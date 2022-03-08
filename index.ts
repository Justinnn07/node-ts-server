const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/index.ts");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  express.static("./static")
); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.xjlqo.mongodb.net/customers?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/", routes);
const port = 3002;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
