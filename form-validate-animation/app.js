function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      // Check for validation
      if (input.type === "text" && validteUser(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "password" && validatePass(input)) {
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }

      //  get rid of animation
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  });
}

function validteUser(user) {
  if (user.value.length < 6) {
    console.log("not enough characters");
    error("rgb(189, 87, 87)");
  } else {
    error("rgb(87, 189, 130)");
    return true;
  }
}

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validation.test(email.value)) {
    error("rgb(87, 189, 130)");
    return true;
  } else {
    error("rgb(189, 87, 87)");
  }
}

function validatePass(password) {
  const validation = new RegExp(
    "((?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%?=*&]).{8,20})"
  );
  if (validation.test(password.value)) {
    error("rgb(87, 189, 130)");
    return true;
  } else {
    error("rgb(189, 87, 87)");
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}

function error(color) {
  document.body.style.backgroundColor = color;
}

animatedForm();
