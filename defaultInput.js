// v1.1.0 defaultInput.js
// defaultInput.js
(function () {
  class DefaultInput {
    constructor() {
      this.setDefaultInputValue = this.setDefaultInputValue.bind(this);
    }

    setDefaultInputValue(inputElement) {
      const inputId = inputElement.id;

      if (!inputElement) {
        console.error(`Input element with id '${inputId}' not found.`);
        return;
      }

      const defaultValue = "";
      const savedInputValue = localStorage.getItem(inputId) || defaultValue;
      inputElement.value = savedInputValue;

      inputElement.addEventListener("change", () => {
        localStorage.setItem(inputId, inputElement.value);
      });
    }

    init() {
      const firstForm = document.querySelector("form");
      if (!firstForm) {
        console.error("Form not found.");
        return;
      }
      firstForm.addEventListener("submit", (event) => {
        const inputElements = document.querySelectorAll("input");
        inputElements.forEach((inputElement) => {
          localStorage.setItem(inputElement.id, inputElement.value);
        });
      });
      document.addEventListener("DOMContentLoaded", () => {
        const inputElements = document.querySelectorAll("input");
        inputElements.forEach((inputElement) => {
          this.setDefaultInputValue(inputElement);
        });
      });
    }
  }

  const defaultInput = new DefaultInput();
  defaultInput.init();
})();
