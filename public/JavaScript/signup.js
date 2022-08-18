const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup");
  const email = document.querySelector("#email-signup");
  const password = document.querySelector("#password-signup");

  // if (username && password) {
    const response = await fetch('./signup', {
      method: "post",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
      alert("New user created, please log in");
      sessionStorage.setItem("username", `${username}`)
      document.location.replace('/login');
    } else {
      alert("Failed to sign up, please try again!");
    }
  // }
};

var submitBTN = document.querySelector("#btn_id");
submitBTN.addEventListener("click", signupFormHandler);
