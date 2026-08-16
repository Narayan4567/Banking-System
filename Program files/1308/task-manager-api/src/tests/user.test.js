const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index');
const User = require('../models/user');
const { userOneId, userOne, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);

afterAll(async () => {
    await mongoose.connection.close();
});
// Signup Tests
test('Should signup a new user', async () => {
    const response = await request(app)
        .post('/users')
        .send({
            name: 'John Doe',
            email: 'john@example.com',
            password: 'MyPass777'
        })
        .expect(201);
    // Assert that the database was changed correctly
    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull();
    // Assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'John Doe',
            email: 'john@example.com'
        },
        token: user.tokens[0].token
    });
    // Assert password is hashed
    expect(user.password).not.toBe('MyPass777');
});
test('Should not signup user with invalid email', async () => {
    await request(app)
        .post('/users')
        .send({
            name: 'Test',
            email: 'invalidemail',
            password: 'MyPass777'
        })
        .expect(400);
});
test('Should not signup user with short password', async () => {
    await request(app)
        .post('/users')
        .send({
            name: 'Test',
            email: 'test@example.com',
            password: '123'
        })
        .expect(400);
});
// Login Tests
test('Should login existing user', async () => {
    const response = await request(app)
        .post('/users/login')
        .send({
            email: userOne.email,
            password: userOne.password
        })
        .expect(200);
    const user = await User.findById(userOneId);
    expect(response.body.token).toBe(user.tokens[1].token);
});
test('Should not login with wrong password', async () => {
    await request(app)
        .post('/users/login')
        .send({
            email: userOne.email,
            password: 'wrongpassword'
        })
        .expect(400);
});
test('Should not login nonexistent user', async () => {
    await request(app)
        .post('/users/login')
        .send({
            email: 'notexist@example.com',
            password: 'MyPass777'
        })
        .expect(400);
});
// Profile Tests
test('Should get profile for authenticated user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
});
test('Should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401);
});
// Update Tests
test('Should update valid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: 'Updated Name'
        })
        .expect(200);
    const user = await User.findById(userOneId);
    expect(user.name).toEqual('Updated Name');
});
test('Should not update invalid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            location: 'New York'
        })
        .expect(400);
});
test('Should not update user if unauthenticated', async () => {
    await request(app)
        .patch('/users/me')
        .send({
            name: 'Updated Name'
        })
        .expect(401);
});
// Delete Tests
test('Should delete account for authenticated user', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
    const user = await User.findById(userOneId);
    expect(user).toBeNull();
});
test('Should not delete account for unauthenticated user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401);
});
// Logout Tests
test('Should logout user', async () => {
    await request(app)
        .post('/users/logout')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
    const user = await User.findById(userOneId);
    expect(user.tokens.length).toBe(0);
});
test('Should logout user from all sessions', async () => {
    await request(app)
        .post('/users/logoutAll')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
    const user = await User.findById(userOneId);
    expect(user.tokens.length).toBe(0);
});