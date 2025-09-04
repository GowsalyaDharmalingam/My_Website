// Greeting based on time
function getGreeting() {
  let now = new Date();
  let hour = now.getHours();
  if (hour < 12) return "GOOD MORNING, WELCOME TO MY PAGE!";
  else if (hour < 18) return "GOOD AFTERNOON, WELCOME TO MY PAGE!";
  else return "GOOD EVENING, WELCOME TO MY PAGE!";
}

// Display greeting & datetime
document.getElementById("greeting").innerText = getGreeting();
document.getElementById("datetime").innerText = "You visited on: " + new Date().toLocaleString();

// Toggle forms visibility
function toggleForms() {
  const formBox = document.getElementById("formBox");
  formBox.classList.toggle("hidden");
}
