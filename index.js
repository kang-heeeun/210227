//mongoose
//간단하게, 몽고디비를 편하게 쓸수 있는 object modeling tool
const express = require("express"); //express 갖고오기
const app = express(); // 새로운 express 앱 만들기
const port = 5000;
const bodyParser = require("body-parser");

const config = require("./config/key");

const { User } = require("./models/User");

app.use(bodyParser.urlencoded({ extended: true })); //application/x-ww-form-urlencoded
app.use(bodyParser.json()); //application/json

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!~~ 안녕하세요 ~"));

app.post("/register", (req, res) => {
  //회원 가입 할때 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`Example app listenling on port ${port}!`));
