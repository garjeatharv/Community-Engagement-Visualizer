const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { generateUsers, generateMessages } = require("./dataGenerator");

const app = express();
const port = 3001;

app.use(cors());

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  messages: Number,
  lastActive: Date,
});

const messageSchema = new mongoose.Schema({
  userId: String,
  timestamp: Date,
});

const User = mongoose.model("User", userSchema);
const Message = mongoose.model("Message", messageSchema);

mongoose
  .connect("mongodb://127.0.0.1:27017/community")
  .then(() => {
    console.log("MongoDB connected");


    // Generate initial data
    const users = generateUsers(100);
    const messages = generateMessages(users);

    User.insertMany(users)
      .then((docs) => {
        console.log("Users inserted:", docs.length);
        return Message.insertMany(messages);
      })
      .then((docs) => {
        console.log("Messages inserted:", docs.length);
      })
      .catch((err) => {
        console.error("Error inserting data:", err);
      });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });


app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

app.get("/api/metrics", async (req, res) => {
    try{
        const users = await User.find();
  const messages = await Message.find();

  const totalMembers = users.length;
  const activeMembers = users.filter(
    (user) => new Date() - user.lastActive < 7 * 24 * 60 * 60 * 1000
  ).length;
  const inactiveMembers = totalMembers - activeMembers;
  const engagementRate = messages.length / 7; // Average messages per week
  const topContributors = users
    .sort((a, b) => b.messages - a.messages)
    .slice(0, 5);

  const growthRate = {
    labels: [...Array(7).keys()].map((i) => `Day ${i + 1}`),
    data: [...Array(7).keys()].map((i) => Math.floor(Math.random() * 10)), // Simulated data
  };
  console.log("Data to be sent:", growthRate.data);
  res.json({
    totalMembers,
    growthRate,
    engagementRate,
    activeMembers,
    inactiveMembers,
    topContributors,
  });
    }
  catch(error){
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
