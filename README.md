# README.md

## Default Input

`default-input` is a small JavaScript library that automatically saves the input values of input elements in the browser's local storage and restores them after page reloads. This is useful in scenarios where users need to fill out forms repeatedly with the same information.

### Installation

You can include the script directly from jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/gh/bohachu/default-input/defaultInput.js"></script>
```

Alternatively, you can download the `defaultInput.js` file from the repository and include it in your project.

### Usage

1. Include the `defaultInput.js` script in your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ... -->
</head>
<body>
  <!-- Your input elements -->
  <input type="text" id="username">
  <input type="email" id="email">
  <!-- Include the script -->
  <script src="https://cdn.jsdelivr.net/gh/bohachu/default-input/defaultInput.js"></script>
</body>
</html>
```

2. Make sure to assign unique `id` attributes to your input elements.

3. Initialize the `DefaultInput` class and call the `init()` method, as shown in the example above.

That's it! The input values will now be saved in the local storage and restored after page reloads.

### Browser Support

`default-input` should work in all modern browsers that support the `localStorage` API. This includes:

- Chrome
- Firefox
- Safari
- Edge
- Internet Explorer 11

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
