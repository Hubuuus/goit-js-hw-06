const validation = document.querySelector("#validation-input");
const validValue = validation.getAttribute("data-length");

validation.addEventListener("blur", () => {

  if (parseInt(validValue) === validation.value.trim().length) {
    validation.classList.remove("invalid");
    validation.classList.add("valid");
  } else {
    validation.classList.remove("valid");
    validation.classList.add("invalid");
  }
});
