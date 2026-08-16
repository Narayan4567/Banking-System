const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index');
const Task = require('../models/task');
const {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
} = require('./fixtures/db');

beforeEach(setupDatabase);

afterAll(async () => {
    await mongoose.connection.close();
});
// Create Task Tests
test('Should create task for authenticated user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            description: 'Test task from automated test'
        })
        .expect(201);
    const task = await Task.findById(response.body._id);
    expect(task).not.toBeNull();
    expect(task.completed).toEqual(false);
});
test('Should not create task without authentication', async () => {
    await request(app)
        .post('/tasks')
        .send({
            description: 'Test task'
        })
        .expect(401);
});
test('Should not create task with invalid description', async () => {
    await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            description: ''
        })
        .expect(400);
});
// Get Tasks Tests
test('Should fetch user tasks', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
    expect(response.body.length).toEqual(2);
});
test('Should fetch only completed tasks', async () => {
    const response = await request(app)
        .get('/tasks?completed=true')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
    expect(response.body.length).toEqual(1);
    expect(response.body[0].completed).toBe(true);
});
test('Should fetch only incomplete tasks', async () => {
    const response = await request(app)
        .get('/tasks?completed=false')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
    expect(response.body.length).toEqual(1);
    expect(response.body[0].completed).toBe(false);
});
test('Should sort tasks by description', async () => {
    const response = await request(app)
        .get('/tasks?sortBy=description:asc')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
    expect(response.body[0].description).toBe('First task');
});
test('Should sort tasks by creation date', async () => {
    const response = await request(app)
        .get('/tasks?sortBy=createdAt:desc')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
    expect(response.body.length).toBe(2);
});
test('Should fetch page of tasks', async () => {
    const response = await request(app)
        .get('/tasks?limit=1&skip=1')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
    expect(response.body.length).toBe(1);
});
// Get Single Task Tests
test('Should fetch user task by id', async () => {
    await request(app)
        .get(`/tasks/${taskOne._id}`)
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
});
test('Should not fetch user task by id if unauthenticated', async () => {
    await request(app)
        .get(`/tasks/${taskOne._id}`)
        .send()
        .expect(401);
});
test('Should not fetch other users task by id', async () => {
    await request(app)
        .get(`/tasks/${taskOne._id}`)
        .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
        .send()
        .expect(404);
});
// Update Task Tests
test('Should update user task', async () => {
    await request(app)
        .patch(`/tasks/${taskOne._id}`)
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            completed: true
        })
        .expect(200);
    const task = await Task.findById(taskOne._id);
    expect(task.completed).toEqual(true);
});
test('Should not update task with invalid field', async () => {
    await request(app)
        .patch(`/tasks/${taskOne._id}`)
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            location: 'New York'
        })
        .expect(400);
});
test('Should not update other users task', async () => {
    await request(app)
        .patch(`/tasks/${taskOne._id}`)
        .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
        .send({
            completed: true
        })
        .expect(404);
    const task = await Task.findById(taskOne._id);
    expect(task.completed).toEqual(false);
});
// Delete Task Tests
test('Should delete user task', async () => {
    await request(app)
        .delete(`/tasks/${taskOne._id}`)
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
    const task = await Task.findById(taskOne._id);
    expect(task).toBeNull();
});
test('Should not delete task if unauthenticated', async () => {
    await request(app)
        .delete(`/tasks/${taskOne._id}`)
        .send()
        .expect(401);
    const task = await Task.findById(taskOne._id);
    expect(task).not.toBeNull();
});
test('Should not delete other users tasks', async () => {
    await request(app)
        .delete(`/tasks/${taskOne._id}`)
        .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
        .send()
        .expect(404);
    const task = await Task.findById(taskOne._id);
    expect(task).not.toBeNull();
});