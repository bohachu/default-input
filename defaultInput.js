// defaultInput.js
// v1.0.1
(function() {
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

      const defaultValue = '';
      const savedInputValue = localStorage.getItem(inputId) || defaultValue;
      inputElement.value = savedInputValue;

      inputElement.addEventListener('change', () => {
        localStorage.setItem(inputId, inputElement.value);
      });
    }

    init() {
      document.addEventListener('DOMContentLoaded', () => {
        const inputElements = document.querySelectorAll('input');
        inputElements.forEach(inputElement => {
          this.setDefaultInputValue(inputElement);
        });
      });
    }
  }

  const defaultInput = new DefaultInput();
  defaultInput.init();
})();
