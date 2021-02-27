//mongoose
//간단하게, 몽고디비를 편하게 쓸수 있는 object modeling tool
const express = require("express"); //express 갖고오기
const app = express(); // 새로운 express 앱 만들기
const port = 3000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://heeeun:abcd1234@boilerplate.sspkq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () => console.log(`Expddd ${port}`));
