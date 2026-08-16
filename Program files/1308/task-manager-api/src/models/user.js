const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Task = require('./task');
// User schema
const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        trim: true
    },
    email: { 
        type: String, 
        unique: true, 
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!value.includes('@')) {
                throw new Error('Email is invalid');
            }
        }
    },
    password: { 
        type: String, 
        required: true, 
        minlength: 6,
        trim: true
    },
    tokens: [{ 
        token: { 
            type: String, 
            required: true 
        } 
    }]
}, { 
    timestamps: true 
});
// Virtual property for tasks
userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
});
// Hide sensitive data
userSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens;
    return userObject;
};
// Generate JWT token
userSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'secretkey');
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
};
// Find user by credentials (for login)
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Unable to login');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Unable to login');
    }
    return user;
};
// Hash password before saving
userSchema.pre('save', async function() {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
});
// Delete user tasks when user is removed (Mongoose 8: use 'deleteOne')
userSchema.pre('deleteOne', { document: true, query: false }, async function() {
    const user = this;
    await Task.deleteMany({ owner: user._id });
});
const User = mongoose.model('User', userSchema);
module.exports = User;