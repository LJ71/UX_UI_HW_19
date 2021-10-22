$(".connect").on("click", function () {
  $(".modal").fadeIn(500);
  $(".overlay").fadeIn(250);
});
function sendEmail() {
  $("#name, #email, #message").val("");
  closeModal();
  alert("Email has been submitted. I'll reach out to you shortly. Thank You!");
}
function closeModal() {
  $(".modal").fadeOut(500);
  $(".overlay").fadeOut(250);
}
