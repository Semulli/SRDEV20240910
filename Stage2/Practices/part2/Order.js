const customerQuestion = confirm("Do you want order something?");

if (customerQuestion) {
  const question1 = prompt("Which meals do you want to order??");

  if (question1 == "hamburger menu") {
    console.log(`your ${question1} will prepared))`);
  } else if (question1 == "cheeseburger menu") {
    console.log(`${question1} will prepared soon`);
  }
} else {
  console.log("so, what are you doing here??");
}
