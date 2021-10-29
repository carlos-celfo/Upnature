const mongoose = require("mongoose");
// please make sure to replace <Password> with the database password
const conn_str =
  "mongodb+srv://dayo25:Tunde%4025@dayos-db.aa7hq.mongodb.net/mydb?retryWrites=true&w=majority";

mongoose.connect(conn_str, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conn = mongoose.connection;

const connectionError = conn.on("error", () =>
  console.log("MongoDB connection failed")
);

const connected = conn.once("open", () =>
  console.log("MongoDB connected succesfully")
);

module.exports = { connected, connectionError };
