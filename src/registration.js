document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("register-form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const regModal = document.getElementById("register-modal-container");
  const closeForm = document.getElementById("close-form-span");
  const openRegister = document.getElementById("open-login-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (checkInputs()) {
      showModal();
    }
  });

  name.addEventListener("input", () => {
    validateField(name, name.value.trim() !== "", "Name cannot be blank");
  });

  email.addEventListener("input", () => {
    validateField(email, isEmail(email.value.trim()), "Not a valid email");
  });

  phone.addEventListener("input", () => {
    validateField(
      phone,
      isPhone(phone.value.trim()),
      "Not a valid phone number"
    );
  });

  password.addEventListener("input", () => {
    validateField(
      password,
      password.value.trim().length >= 8,
      "Password must be at least 8 characters"
    );
  });

  function checkInputs() {
    let isValid = true;
    validateField(name, name.value.trim() !== "", "Name cannot be blank");
    validateField(email, isEmail(email.value.trim()), "Not a valid email");
    validateField(
      phone,
      isPhone(phone.value.trim()),
      "Not a valid phone number"
    );
    validateField(
      password,
      password.value.trim().length >= 8,
      "Password must be at least 8 characters"
    );

    document.querySelectorAll(".form-control").forEach((control) => {
      if (control.classList.contains("error")) {
        isValid = false;
      }
    });

    return isValid;
  }

  // объект для хранения данных пользователя
  const userData = {
    name: name,
    email: email,
    password: password,
  };

  // сохраняем данные в localStorage
  localStorage.setItem("users", JSON.stringify(userData));

  function validateField(input, condition, errorMessage) {
    if (condition) {
      setSuccess(input);
    } else {
      setError(input, errorMessage);
    }
  }

  function setError(input, message) {
    const formControl = input.parentElement;
    const icon = formControl.querySelector(".icon");
    formControl.className = "form-control error";
    icon.className = "icon fas fa-times-circle";
    input.placeholder = message;
  }

  function setSuccess(input) {
    const formControl = input.parentElement;
    const icon = formControl.querySelector(".icon");
    formControl.className = "form-control success";
    icon.className = "icon fas fa-check-circle";
  }

  function isEmail(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  }

  function isPhone(phone) {
    return /^\+?(\d.*){3,}$/.test(phone);
  }

  function showModal() {
    const modal = document.getElementById("successModal");
    modal.style.display = "block";

    const closeBtn = document.querySelector(".close-button-reg");
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }

  // открытие модального окна
  openRegister.onclick = () => {
    regModal.style.display = "block";
  };

  // закрытие модального окна
  closeForm.onclick = () => {
    regModal.style.display = "none";
  };

  // закрытие модального окна при клике вне его
  window.onclick = (event) => {
    if (event.target === regModal) {
      regModal.style.display = "none";
    }
  };
});
