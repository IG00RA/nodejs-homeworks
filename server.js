const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://igoora:GY7B7oMEknRd8Mls@cluster0.dawxo5e.mongodb.net/db-contacts?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => console.log(error.message));
