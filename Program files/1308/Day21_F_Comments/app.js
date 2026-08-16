// Import Express framework
const express = require('express')
// Import path module
const path = require('path')
// Import body-parser middleware
const bodyParser = require('body-parser')
// Import mongoose
const mongoose = require('mongoose')
// Connect to MongoDB
// Option 1: Local MongoDB (if you installed MongoDB Community Server)
const mongoURL = 'mongodb://localhost:27017/notesapp';
// Option 2: MongoDB Atlas (Cloud) - Replace with your connection string
// const mongoURL = 'mongodb+srv://username:password@cluster.mongodb.net/notesapp';
mongoose.connect(mongoURL)
  .then(() => console.log('✅ Connected to MongoDB successfully!'))
  .catch(err => console.error('❌ MongoDB connection error:', err));
// Define a schema for Notes
const noteSchema = new mongoose.Schema({
   noteContent: { 
      type: String, 
      required: true 
   },
   createdAt: { 
      type: Date, 
      default: Date.now 
   }
});
// Create a model for Notes
const Note = mongoose.model('Note', noteSchema);
// Define a schema for Users (as per Task 8 requirement)
const userSchema = new mongoose.Schema({
   name: String,
   age: Number,
   email: { type: String, required: true }
});
// Create a model for Users
const User = mongoose.model('User', userSchema);
// Insert a sample user (Task 8 requirement)
async function insertSampleUser() {
   try {
      // Check if user already exists
      const existingUser = await User.findOne({ email: 'prasun@example.com' });
      if (!existingUser) {
         const newUser = new User({ 
            name: 'Prasunamba', 
            age: 30, 
            email: 'prasun@example.com' 
         });
         await newUser.save();
         console.log('✅ Sample user saved successfully!');
      } else {
         console.log('ℹ️ Sample user already exists');
      }
   } catch (err) {
      console.error('❌ Error saving user:', err);
   }
}
// Call the function to insert sample user
insertSampleUser();
// Create Express application
const app = express()
// Set views directory
app.set('views', path.join(__dirname, 'views'))
// Set EJS as the template engine
app.set('view engine', 'ejs')
// Enable JSON request parsing
app.use(bodyParser.json());
// Enable HTML form data parsing
app.use(bodyParser.urlencoded({
   extended: true
}))
// Home page route - Displays all notes from database
app.get("/", async (req, res) => {
   try {
      // Fetch all notes from MongoDB
      const notes = await Note.find().sort({ createdAt: -1 });
      res.render("home", {
          notes
      });
   } catch (error) {
      console.error('❌ Error fetching notes:', error);
      res.status(500).send('Error fetching notes');
   }
})
// Route to add a new note - Save to database
app.post("/", async (req, res) => {
   try {
      // Get note content from form
      const noteContent = req.body.noteContent;
      // Create new note document
      const newNote = new Note({
         noteContent: noteContent
      });
      // Save to database
      await newNote.save();
      console.log('✅ Note saved to database');
      // Fetch all notes and display
      const notes = await Note.find().sort({ createdAt: -1 });
      res.render("home", {
          notes
      });
   } catch (error) {
      console.error('❌ Error saving note:', error);
      res.status(500).send('Error saving note');
   }
})
// Route to update an existing note - Update in database
app.post('/update', async (req, res) => {
   try {
      // Get note ID and updated content
      const noteId = req.body.noteId;
      const noteContent = req.body.noteContent;
      // Update note in database
      await Note.findByIdAndUpdate(noteId, { noteContent: noteContent });
      console.log('✅ Note updated in database');
      // Fetch all notes and display
      const notes = await Note.find().sort({ createdAt: -1 });
      res.render("home", {
          notes
      });
   } catch (error) {
      console.error('❌ Error updating note:', error);
      res.status(500).send('Error updating note');
   }
})
// Route to delete a note - Delete from database
app.post('/delete', async (req, res) => {
   try {
      // Get note ID to delete
      const noteId = req.body.noteId;
      // Delete note from database
      await Note.findByIdAndDelete(noteId);
      console.log('✅ Note deleted from database');
      // Fetch all notes and display
      const notes = await Note.find().sort({ createdAt: -1 });
      res.render("home", {
          notes
      });
   } catch (error) {
      console.error('❌ Error deleting note:', error);
      res.status(500).send('Error deleting note');
   }
})
// Start server at port 3000
app.listen(3000, () => {
   console.log("✅ App is running on port 3000")
   console.log("🌐 Open: http://localhost:3000")
})