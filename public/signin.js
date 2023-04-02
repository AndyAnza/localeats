const signupFormHandler = async (event) => {
  event.preventDefault();

  const user_name = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ user_name, email, phone, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .getElementById("sign-in-form")
  .addEventListener("submit", signupFormHandler);
