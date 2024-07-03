const express = require('express');
const app = express();
const port = 80;
const userRoutes = require('./member/route/MemberRoute');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/members', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});