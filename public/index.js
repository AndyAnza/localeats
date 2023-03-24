async function newFormHandler(event) {
  event.preventDefault();
  const dish_name = document.querySelector("#dish_name").value;
  const description = document.querySelector("#description").value;
  const price = document.querySelector("#price").value;
  // const userId = document.querySelector("#userId").value;
  console.log(event);
  // Send fetch request to add a new dish
  const response = await fetch(`/`, {
    method: "POST",
    body: JSON.stringify({
      dish_name,
      description,
      price,
      userId: 1,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

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
