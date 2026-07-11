require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());
const url = "mongodb://localhost:27017/examprep";

mongoose.connect(url)
  .then(() => {
    console.log("Successfully Connected");
  })
  .catch((err) => {
    console.log(`Error is ${err}`);
  });
    
//apis started
app.use("/uploads", express.static("uploads"));
app.use("/api/examinee", require("./routes/examineeRoute"));
//  admin apis started
app.use('/api/admin', require('./routes/adminRoute'));
//  session api
app.use('/api/session/', require('./routes/sessionRoute'));
// subject api
app.use('/api/subject/', require('./routes/subjectRoute'));
// question api
app.use('/api/question/', require('./routes/questionRoute'));
//examination api
app.use('/api/exams/', require('./routes/examinationRoute'));
//message api
app.use('/api/message', require('./routes/messageRoute'));
// api for dashboard
app.use('/api/dashboard/', require('./routes/dashboardRoute'));
//apis ended

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});