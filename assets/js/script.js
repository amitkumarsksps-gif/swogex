// 🔗 YOUR 10 LINKS
const links = [
"https://todaykaka.com/best-credit-card-for-beginners-india.html",
"https://todaykaka.com/best-loan-apps-india-instant-cash.html",
"https://todaykaka.com/business-loan-without-collateral-india.html",
"https://todaykaka.com/emergency-loan-online-instant-approval.html",
"https://todaykaka.com/get-personal-loan-without-credit-check.html",
"https://todaykaka.com/get-a-loan-without-cibil-score.html",
"https://todaykaka.com/instant-loan-online-approval-in-minutes.html",
"https://todaykaka.com/low-interest-personal-loan-online-india.html",
"https://todaykaka.com/same-day-payday-loan-online.html",
"https://todaykaka.com/student-loan-without-guarantor-india.html"
];

// 🚀 START PROCESS
function startProcess() {

  let section = document.getElementById("timerSection");
  if (!section) return;

  section.style.display = "block";

  section.scrollIntoView({ behavior: "smooth" });

  startTimer();
}

// ⏳ TIMER FUNCTION
function startTimer() {

  let time = 15;
  let timer = document.getElementById("timer");

  if (!timer) return;

  let interval = setInterval(() => {
    time--;
    timer.innerText = time;

    if (time <= 0) {
      clearInterval(interval);

      // 🎯 RANDOM REDIRECT
      let randomLink = links[Math.floor(Math.random() * links.length)];
      window.location.href = randomLink;
    }

  }, 1000);
}