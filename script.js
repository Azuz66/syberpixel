function showSection(id) {

  // hide all sections
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });

  // show selected
  document.getElementById(id).classList.add("active");

  // auto close menu
  document.getElementById("sidebar").classList.remove("show");
}

function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("show");
}

function copyIP() {
  navigator.clipboard.writeText("syberpixelsmp.falixsrv.me");
  alert("IP Copied!");
}

function buy() {
  window.open("https://syberpixel.tebex.io");
}

fetch("https://api.mcsrvstat.us/2/syberpixelsmp.falixsrv.me")
.then(res => res.json())
.then(data => {
  const status = document.getElementById("server-status");
  if(data.online){
    status.innerHTML = "<span style='color:#00ff88'>● Online</span>";
  } else {
    status.innerHTML = "<span style='color:red'>● Offline</span>";
  }
});

document.getElementById("reportForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const reporter = document.getElementById("reporter").value;
  const reported = document.getElementById("reported").value;
  const reason = document.getElementById("reason").value;

  const webhookURL = "https://discord.com/api/webhooks/1478188939675308124/NJ8G8nGtIehH_3s38jDXNRcDtxTWolZ4RRlVCOi-7t2yoPI5RXpH_uiwUOj91wXmE1Cx";

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      embeds: [{
        title: "🚨 New Player Report",
        color: 5763719,
        fields: [
          { name: "Reporter", value: reporter },
          { name: "Reported Player", value: reported },
          { name: "Reason", value: reason }
        ]
      }]
    })
  })
  .then(() => {
    alert("Report sent to staff!");
    document.getElementById("reportForm").reset();
  })
  .catch(() => {
    alert("Error sending report.");
  });

});

document.getElementById("appealForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("appealUser").value;
  const reason = document.getElementById("appealReason").value;

  const webhookURL = "https://discord.com/api/webhooks/1478188861615112398/IttBx4TiYP1Rv_3oAYjCOcCCvIFSvr7LQZqIR2OCuWu61VvE0pIoYq4GlKdsbTFRxqC1";

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      embeds: [{
        title: "📩 New Appeal Submitted",
        color: 3066993,
        fields: [
          { name: "Username", value: user },
          { name: "Appeal Reason", value: reason }
        ]
      }]
    })
  })
  .then(() => {
    alert("Appeal sent successfully!");
    document.getElementById("appealForm").reset();
  })
  .catch(() => {
    alert("Error sending appeal.");
  });

});