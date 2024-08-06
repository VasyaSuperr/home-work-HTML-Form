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
