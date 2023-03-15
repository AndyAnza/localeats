async function newFormHandler(event) {
  event.preventDefault();
  // const user_name = document.querySelector("#user_name").value;
  const dish_name = document.querySelector("#dish_name").value;
  const description = document.querySelector("#description").value;
  const price = document.querySelector("#price").value;
  // The following is a ternary operator. It checks to see if has_nuts is checked. If it is, it will return true, otherwise, it will return false.
  //const has_nuts = document.querySelector("#has_nuts:checked") ? true : false;
  // Send fetch request to add a new dish
  const response = await fetch(`/api/dish`, {
    method: "POST",
    body: JSON.stringify({
      dish_name,
      description,
      price,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if the dish is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace("/"); //this refreshes the page to load with new data.
  } else {
    alert("Failed to add dish");
  }
}

document
  .querySelector(".new-dish-form")
  .addEventListener("submit", newFormHandler);
