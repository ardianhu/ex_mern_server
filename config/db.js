const mongoose = require("mongoose")
const db = "mongodb+srv://jackguardian007:J8NTJ1yEW8XdDyJa@cluster0.hnapfys.mongodb.net/?retryWrites=true&w=majority"

mongoose.set("strictQuery", true, "useNewUrlParsesr", true)

const connectDB = async () => {
  try {
    await mongoose.connect(db)
    console.log("MongoDB is connected...")
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}
module.exports = connectDB