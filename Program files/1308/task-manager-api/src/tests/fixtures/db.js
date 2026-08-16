const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const Task = require('../../models/task');

// ─── User One ────────────────────────────────────────────────────────────────
const userOneId = new mongoose.Types.ObjectId();
const userOne = {
    _id: userOneId,
    name: 'Test User',
    email: 'test@example.com',
    password: 'MyPass777',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, 'secretkey')
    }]
};

// ─── User Two ────────────────────────────────────────────────────────────────
const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
    _id: userTwoId,
    name: 'Another User',
    email: 'another@example.com',
    password: 'MyPass777',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, 'secretkey')
    }]
};

// ─── Tasks ───────────────────────────────────────────────────────────────────
const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'First task',
    completed: false,
    owner: userOneId
};

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Second task',
    completed: true,
    owner: userOneId
};

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Third task',
    completed: true,
    owner: userTwoId
};

// ─── Setup Database ──────────────────────────────────────────────────────────
const setupDatabase = async () => {
    await User.deleteMany();
    await Task.deleteMany();

    await new User(userOne).save();
    await new User(userTwo).save();

    await new Task(taskOne).save();
    await new Task(taskTwo).save();
    await new Task(taskThree).save();
};

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
};
