const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  // Validate Name
  if (name === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Validate Email
  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

  // Validate Message
  if (message === "") {
    messageError.textContent = "Message cannot be empty.";
    valid = false;
  }

  // Show success
  if (valid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
  }
});
