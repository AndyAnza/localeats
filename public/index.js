async function newFormHandler(event) {
  event.preventDefault();
  // const userId = document.querySelector("#userId").value;
  const dish_name = document.querySelector("#dish_name").value;
  const description = document.querySelector("#description").value;
  const price = document.querySelector("#price").value;

  // Send fetch request to add a new dish
  console.log(newFormHandler);
  const response = await fetch(`/`, {
    method: "POST",
    body: JSON.stringify({
      dish_name,
      description,
      price,
      // userId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if the dish is added, the 'all' template will be rerendered
  if (response.ok) {
    console.log(`this is working`); //this refreshes the page to load with new data.
  } else {
    console.log(`this is NOT working`);
  }
}

document
  .querySelector("#newDishBtn")
  .addEventListener("submit", newFormHandler);
