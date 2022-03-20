const app = require("./index");
const connect = require("./src/configs/db");

app.listen(5002, async function () {
  try {
    await connect();
    console.log("listening on port 5002");
  } catch (err) {
    console.error(err.message);
  }
});
