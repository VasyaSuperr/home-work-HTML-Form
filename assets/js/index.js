"use strict";

const INPUTS_REG_EXP = {
  "user-first-name": /^[A-Z][a-z]{1,32}(-[A-Z][a-z]{1,32})?$/,
  "user-last-name": /^[A-Z][a-z]{1,32}(-[A-Z][a-z]{1,32})?$/,
  "user-email": /^.+@.+\..+$/,
  "user-phone-1": /^\d{3}$/,
  "user-phone-2": /^\d{3}$/,
  "user-phone-3": /^\d{4}$/,
};

const inputs = document.querySelectorAll("input");

inputs.forEach((i) => i.addEventListener("input", inputHandler));

function inputHandler(e) {
  if (INPUTS_REG_EXP[e.target.name].test(e.target.value)) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
  }
}

document.querySelector("#contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const firstName = e.target["user-first-name"].value;
  const lastName = e.target["user-last-name"].value;
  const email = e.target["user-email"].value;
  const userPhone1 = e.target["user-phone-1"].value;
  const userPhone2 = e.target["user-phone-2"].value;
  const userPhone3 = e.target["user-phone-3"].value;
  const subject = e.target["subject"].value;
  const message = e.target["message"].value.trim().replace(/\s+/g, " ");

  const phone = `${userPhone1}${userPhone2}${userPhone3}`;

  const dataForm = {
    name: `${firstName} ${lastName}`,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  };

  console.log(dataForm);
}
