// JavaScript for form validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for contacting AhoMen Droit! We will get back to you soon.");
  document.getElementById("contact-form").reset();
});
