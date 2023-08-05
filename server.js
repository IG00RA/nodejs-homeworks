require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
const { DB_HOST } = process.env;
const { PORT } = process.env;

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error.message));
