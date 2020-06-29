module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "password",
  DB: "dbd_nodejs_auth_setup",
  PORT: 3307,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}