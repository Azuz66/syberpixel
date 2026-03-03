const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

// 🔥 DISCORD WEBHOOK
const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1478188861615112398/IttBx4TiYP1Rv_3oAYjCOcCCvIFSvr7LQZqIR2OCuWu61VvE0pIoYq4GlKdsbTFRxqC1";

// 🎖 Report Route
app.post("/report", async (req, res) => {
  const { reporter, reported, reason } = req.body;

  await axios.post(DISCORD_WEBHOOK, {
    content: `🚨 **New Report**
Reporter: ${reporter}
Reported: ${reported}
Reason: ${reason}`
  });

  res.json({ message: "Report sent successfully" });
});

// 🛡 Appeal Route
app.post("/appeal", async (req, res) => {
  const { username, reason } = req.body;

  await axios.post(DISCORD_WEBHOOK, {
    content: `📩 **New Appeal**
Username: ${username}
Appeal: ${reason}`
  });

  res.json({ message: "Appeal submitted" });
});

// 💎 Tebex Top Donators
app.get("/top-donators", async (req, res) => {
  const response = await axios.get(
    "https://plugin.tebex.io/payments",
    {
      headers: {
        "X-Tebex-Secret": "YOUR_TEBEX_SECRET"
      }
    }
  );

  res.json(response.data);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});