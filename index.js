document.addEventListener("DOMContentLoaded", function () {
  const productImage = document.getElementById("productImage");
  const sizes = ["28", "30", "31", "32", "33", "34", "36", "38"];
  const sizesContainer = document.getElementById("sizes");
  const addToCartButton = document.getElementById("cartBtn");
  const inputs = document.querySelectorAll(".input > input");
  const sendButton = document.querySelector(".outline-button");

  function updateButtonState(text, disabled) {
    if (addToCartButton) {
      addToCartButton.textContent = text;
      addToCartButton.disabled = disabled;
    }
  }

  function toggleSendButtonState() {
    let allFilled = Array.from(inputs).every((input) => input.value !== "");
    sendButton.disabled = !allFilled;
  }

  function addToCart() {
    const selectedSize = document.querySelector(".size.selected");
    if (selectedSize) {
      updateButtonState("Adding...", true);
      setTimeout(function () {
        updateButtonState("Add To Cart", false);
        alert("Item added to cart!");
      }, 2000);
    } else {
      alert("Please select a size first.");
    }
  }

  if (productImage) {
    productImage.addEventListener("mouseover", function () {
      this.src = "./assets/images/product2.webp";
    });

    productImage.addEventListener("mouseout", function () {
      this.src = "./assets/images/product.webp";
    });
  }

  sizes.forEach((size) => {
    const sizeElement = document.createElement("div");
    sizeElement.textContent = size;
    sizeElement.className = "size";
    sizeElement.addEventListener("click", function () {
      document
        .querySelectorAll(".size")
        .forEach((el) => el.classList.remove("selected"));
      sizeElement.classList.add("selected");
      if (addToCartButton) {
        addToCartButton.disabled = false;
      }
    });
    sizesContainer.appendChild(sizeElement);
  });

  if (addToCartButton) {
    addToCartButton.disabled = true;
    addToCartButton.addEventListener("click", addToCart);
  }

  inputs.forEach((input) =>
    input.addEventListener("input", toggleSendButtonState)
  );
  toggleSendButtonState();
});
