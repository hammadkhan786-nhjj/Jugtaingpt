function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const message = userInput.value.trim();
  if (!message) return;

  // Show user message
  chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;

  // AI savage desi-style reply logic
  const reply = getJugtainReply(message);

  // Show reply
  chatBox.innerHTML += `<p><strong>Jugtaingpt:</strong> ${reply}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  userInput.value = "";
}

function getJugtainReply(input) {
  const savageReplies = [
    "Bhai tu toh chappal ka bhi version downgrade hai.",
    "Tera logic dekh ke AI ne bhi resign de dia.",
    "Tu sawal nahi, network error lag raha hai.",
    "Khud se baat kar le, tera dimaag hi chatbot hai.",
    "Mujhe laga code crash hua, par tu tha.",
    "Tere level ka answer Google bhi nahi deta.",
    "Bhai, roast nahi kar raha, tera reality check kar raha hoon.",
    "Mujhe tera input mila, par server ne 'ehhh nahi bhai' bol dia.",
    "Tu smart hota toh main Siri hota.",
    "Yeh sawaal toh mere GPU pe zulm hai."
  ];
  return savageReplies[Math.floor(Math.random() * savageReplies.length)];
}
