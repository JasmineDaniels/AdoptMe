const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup");
  const email = document.querySelector("#email-signup");
  const password = document.querySelector("#password-signup");

  // if (username && password) {
  const sendSignup =  async (username, password) => {
    return fetch('/api/User', {
      method: "POST",
      body: JSON.stringify({
        username: username.value,
        password: password.value }),
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      return response;
    })
    // .then((results) => {
    //   console.log(results);
    //   return results;
    // })
    .catch(err => response.status(500).send(err));
  };

  let response = await sendSignup(username, password);

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
