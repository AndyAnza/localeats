async function newFormHandler(event) {
  event.preventDefault();
  const dish_name = document.querySelector("#dish_name").value;
  const description = document.querySelector("#description").value;
  const price = document.querySelector("#price").value;
  const image = document.querySelector("#image").value;

  // Send fetch request to add a new dish
  const response = await fetch(`/`, {
    method: "POST",
    body: JSON.stringify({
      dish_name,
      description,
      price,
      image,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  //   const imageResponse = await fetch(`/`, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     image,
  //   }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // If the dish is added, the 'all' template will be rerendered
  if (response.ok) {
    console.log(`Dish created`);
    // Reload the page to display the new dish
    location.reload();
  } else {
    console.log(`Failed to create dish`);
  }
}

document
  .querySelector("#newDishForm")
  .addEventListener("submit", newFormHandler);

// NEW DISH MODAL
const modalCard = document.getElementById("modalCard");
const newDishBtn = document.getElementById("newDishBtn");
const cancelBtn = document.getElementById("cancelBtn");
// Add a click event listener to the cancel button in the modal to close.
cancelBtn.addEventListener("click", () => {
  modalCard.classList.add("invisible");
});
// Modal appears after click New Dish Button.
newDishBtn.addEventListener("click", () => {
  modalCard.classList.remove("invisible");
});

// Menu Profile
const menuCard = document.getElementById("menuCard");
const faviconBtn = document.getElementById("faviconBtn");
const closeBtn = document.getElementById("closeBtn");
// Add a click event listener to the cancel button in the modal to close.
closeBtn.addEventListener("click", () => {
  menuCard.classList.add("invisible");
});
// Modal appears after click New Dish Button.
faviconBtn.addEventListener("click", () => {
  menuCard.classList.remove("invisible");
});
