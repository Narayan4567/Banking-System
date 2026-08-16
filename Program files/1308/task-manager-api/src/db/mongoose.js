const mongoose = require('mongoose');
// Connect to MongoDB - NO deprecated options needed!
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((error) => console.error("❌ Connection error:", error));