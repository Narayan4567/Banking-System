const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const app = express();
const port = process.env.PORT || 3000;
// Middleware to parse JSON requests
app.use(express.json());
// Register routers
app.use(userRouter);
app.use(taskRouter);
// Start server only if not in test mode
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`🚀 Server running on port ${port}`);
    });
}
module.exports = app;