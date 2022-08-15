const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && password) {
    const response = await fetch("./api/userroutes", {
      method: "post",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
      alert("New user created, please log in");
      document.location.replace("./login");
    } else {
      alert("Failed to sign up, please try again!");
    }
  }
};

var submitBTN = document.querySelector(".signup-form");
submitBTN.addEventListener("click", signupFormHandler);
