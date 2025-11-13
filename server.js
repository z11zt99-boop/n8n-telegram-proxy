const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.json());

app.post("/webhook", async (req, res) => {
  try {
    await fetch("https://n8n-latest.onrender.com/webhook/telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(process.env.PORT || 10000, "0.0.0.0", () => {
  console.log("Proxy server running...");
});
