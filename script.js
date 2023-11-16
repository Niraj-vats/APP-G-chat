const ham = () => {
  let a = document.getElementsByClassName("hamburger")[0];
  let clicked = document.getElementsByClassName("hamclicked")[0];
  if (clicked) {
    a.style.position = "absolute";
    a.style.transform = "translateX(-100%)";
    a.classList.remove("hamclicked");
  } else {
    a.style.position = "static";
    a.style.transform = "translateX(0%)";
    a.classList.add("hamclicked");
  }
};

const reply = () => {
  let message = document.getElementById("msg").value.trim();
  let a = document.getElementById("msg");

  if (message == "hello" || message == "Hello") {
    yourMessage("You", message);
    // Simulate a response after a delay
    setTimeout(() => {
      botMessage("Bot", "Hello, How are you?");
    }, 1000);
    a.value = "";
    return;
  } else if (message == "good morning" || message == "Good morning") {
    yourMessage("You", message);
    // Simulate a response after a delay
    setTimeout(() => {
      botMessage("Bot", "Good morning, Have a nice day");
    }, 1000);
    a.value = "";
    return;
  } else if (message == "good night" || message == "Good night") {
    yourMessage("You", message);
    // Simulate a response after a delay
    setTimeout(() => {
      botMessage("Bot", "Good night, Sweet dreams");
    }, 1000);
    a.value = "";
    return;
  } else if (message == "how are you" || message == "How are you") {
    yourMessage("You", message);
    // Simulate a response after a delay
    setTimeout(() => {
      botMessage("Bot", "I am good and what about you");
    }, 1000);
    a.value = "";
    return;
  } else if (
    message == "what is the time now" ||
    message == "What is the time now"
  ) {
    yourMessage("You", message);
    // Simulate a response after a delay
    setTimeout(() => {
      const d = new Date();
      let text = d.toLocaleString();
      botMessage("Bot", `The time is ${text}`);
    }, 1000);
    a.value = "";
    return;
  } else if (message == "") {
    alert("Please write something!");
  } else {
    yourMessage("You", message);
    // Simulate a response after a delay
    setTimeout(() => {
      botMessage("Bot", "You are a web developer");
    }, 1000);
    a.value = "";
  }
};

const yourMessage = (sender, mes) => {
  let input = document.getElementsByClassName("messages")[0];
  const messageDiv = document.createElement("div");
  messageDiv.textContent = `${sender}: ${mes}`;
  input.appendChild(messageDiv);

  // Scroll to the bottom to show the latest message
  input.scrollTop = input.scrollHeight;
};
const botMessage = (sender, mes) => {
  let input = document.getElementsByClassName("messages")[0];
  const messageDiv = document.createElement("p");
  messageDiv.textContent = `${sender}: ${mes}`;
  input.appendChild(messageDiv);

  // Scroll to the bottom to show the latest message
  input.scrollTop = input.scrollHeight;
};
