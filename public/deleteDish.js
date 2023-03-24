const deleteDishBtn = document.getElementById("deleteDishBtn");

deleteDishBtn.addEventListener("click", async (event) => {
  const dishId = event.target.getAttribute("data-dish-id");
  const userId = event.target.getAttribute("data-user-id");

  console.log(dishId);
  console.log(userId);

  // Make a DELETE request to delete the dish with the given ID and user ID
  const response = await fetch(`/user/${userId}/${dishId}`, {
    method: "DELETE",
  });

  // Handle the response
  if (response.ok) {
    // Reload the page to reflect the changes
    window.location.reload();
  } else {
    const data = await response.json();
    console.error(data.error);
  }
});
