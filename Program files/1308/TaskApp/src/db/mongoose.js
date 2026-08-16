const mongoose = require('mongoose');
// Connect to MongoDB using Promises
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((error) => console.error("❌ Connection error:", error));