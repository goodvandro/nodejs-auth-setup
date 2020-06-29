const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const db = require('./models');
const Role = db.role;

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync DB');
  initial();
});

function initial() {
  try {
    Role.create({
      id: 1,
      name: "user"
    });
  } catch (error) {
    console.log(error);
  }

  try {
    Role.create({
      id: 2,
      name: "moderator"
    });
  } catch (error) {
    console.log(error);
  }

  try {
    Role.create({
      id: 3 ,
      name: "admin"
    });
  } catch (error) {
    console.log(error);
  }
}

app.get('/', (req, res) => {
  res.json({ message: "Welcome to JWT Auth application." });
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
