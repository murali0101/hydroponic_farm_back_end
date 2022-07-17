const app = require("./index");
const connectMongoDB = require("./configs/db");

const port = process.env.PORT || 5800;

app.listen(port, async () => {
  try {
    await connectMongoDB();
    console.log(`listening to port ${port} .........`);
  } catch (error) {
    console.log("error:", error);
  }
});
