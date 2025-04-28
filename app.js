// Get references to elements
let questionContainer_textArea = document.getElementById("questions-container");
let createBtn = document.getElementById("create-btn");

// 1. Jab button click kare tab save kare localStorage me
createBtn.addEventListener("click", () => {
  let pollText = questionContainer_textArea.value.trim();

  if (!pollText) {
    alert("Please enter questions and options!");
    return;
  }

  // Purana data uthao
  let existingData = JSON.parse(localStorage.getItem("poll")) || [];

  // Add naya poll text
  existingData.push(pollText);

  // Save back to localStorage
  localStorage.setItem("poll", JSON.stringify(existingData));

  alert("Poll saved successfully!");
});

// 2. Jab page load ho, tab localStorage ka data uthao aur object create karo
window.addEventListener("DOMContentLoaded", () => {
  let savedData = JSON.parse(localStorage.getItem("poll")) || [];

  if (savedData.length > 0) {
    // Merge all saved data into one big text
    let allPollText = savedData.join('\n');

    // Split lines
    let lines = allPollText.split('\n').map(line => line.trim()).filter(line => line !== "");

    let pollObjects = [];
    let currentQuestion = null;

    lines.forEach(line => {
      if (/^\d+\.\s/.test(line)) { // Agar line number se start hoti hai
        if (currentQuestion) {
          pollObjects.push(currentQuestion);
        }
        currentQuestion = {
          question: line.replace(/^\d+\.\s/, ''), // "1. " hatado
          options: []
        };
      } else {
        if (currentQuestion) {
          currentQuestion.options.push(line);
        }
      }
    });

    // Last question bhi add karo
    if (currentQuestion) {
      pollObjects.push(currentQuestion);
    }

    // Console me show karo final object
    console.log("Parsed Poll Objects:", pollObjects);

    // (Optional) Screen par bhi dikhana hai to yahan code likh sakte ho
  } else {
    console.log("No Poll Data Found.");
  }
});


