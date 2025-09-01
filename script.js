// =========================
// Part 1: JavaScript Basics
// =========================
// Variable declarations and conditionals
let userName = "Andrew";
let userAge = 20;
let message = "";
if (userAge >= 18) {
    message = `Hello, ${userName}! You are an adult.`;
} else {
    message = `Hello, ${userName}! You are a minor.`;
}
document.getElementById("output1").textContent = message;

// =========================
// Part 2: Functions
// =========================
// Custom function 1: Greeting
function greetUser(name) {
    return `Welcome, ${name}!`;
}
// Custom function 2: Sum calculator
function calculateSum(a, b) {
    return a + b;
}
document.getElementById("greetBtn").onclick = function() {
    document.getElementById("output2").textContent = greetUser(userName);
};
document.getElementById("sumBtn").onclick = function() {
    document.getElementById("output2").textContent = `Sum: ${calculateSum(5, 7)}`;
};

// =========================
// Part 3: Loops
// =========================
// Loop example 1: Countdown using for loop
function startCountdown() {
    let output = "Countdown: ";
    for (let i = 5; i >= 1; i--) {
        output += i + " ";
    }
    document.getElementById("output3").textContent = output;
}
document.getElementById("countdownBtn").onclick = startCountdown;
// Loop example 2: Array iteration using forEach
const colors = ["Red", "Green", "Blue"];
let colorOutput = "Colors: ";
colors.forEach(function(color) {
    colorOutput += color + " ";
});
document.getElementById("output3").textContent += "\n" + colorOutput;

// =========================
// Part 4: DOM Manipulation
// =========================
// DOM interaction 1: Toggle highlight class
const part4Section = document.getElementById("part4");
document.getElementById("toggleBtn").onclick = function() {
    part4Section.classList.toggle("highlight");
};
// DOM interaction 2: Add list item dynamically
let itemCount = 0;
document.getElementById("addItemBtn").onclick = function() {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    document.getElementById("itemList").appendChild(li);
};
// DOM interaction 3: Change text content
function showDomMessage() {
    document.getElementById("output4").textContent = "DOM manipulation is awesome!";
}
showDomMessage();
// =========================
// End of Assignment
// =========================
