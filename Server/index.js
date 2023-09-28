const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()


const uri =`mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.0i3pjbq.mongodb.net/?retryWrites=true&w=majority`;
// Middle ware
app.use(cors());
app.use(express.json());
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Mongo Db Connect Successfully");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("Social Media server is running");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
