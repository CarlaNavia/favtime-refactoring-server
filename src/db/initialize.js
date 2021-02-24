import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/favtime-refactoring", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("🎯 Mongodb connected"))
  .catch((error) => console.log(error));
