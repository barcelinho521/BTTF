const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  return res.send("hello world")
})

app.post("/user", (req, res) => {
  console.log(req.body);
  if (!req.body.email || !req.body.password || !req.body.confirmPassword || !req.body.birthday || !req.body.Name) {
    return res.status(400).json({ message: "un des champs est vide" })
  }

  if (req.body.password != req.body.confirmPassword) {
    return res.status(400).json({ message: "error" })
  }

  if (!underAgeValidate(req.body.birthday)) {
    return res.status(400).json({ message: "NO" })
  }


  const newRecord = new YourModel({ name: req.body.name, age: req.body.birthday, email: req.body.email, password: req.body.password });
  newRecord.save()
  return res.sendStatus(201)

})
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

const uri = process.env.ATLAS_URI;
console.log(uri)
mongoose.connect("mongodb://127.0.0.1:27017/Meetic");
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const Schema = mongoose.Schema;
const yourSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const YourModel = mongoose.model('YourModel', yourSchema);

// const newRecord = new YourModel({ name: 'John Doe', age: 30, email: 'john@example.com' });
// newRecord.save((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Record saved successfully!');
//   }
// });

// YourModel.find((error, records) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(records);
//   }
// });


function underAgeValidate(birthday) {
  const optimizedBirthday = birthday.replace(/-/g, "/");
  const myBirthday = new Date(optimizedBirthday);
  const currentDate = new Date().toJSON().split(0, 10) + ' 01:00:00';
  const myAge = ~~((Date.now(currentDate) - myBirthday) / (31557600000));
  if (myAge < 18) {
    return false;
  } else {
    return true;
  }
}
console.log(underAgeValidate('1999-02-21'));