const loginFormHandler = async (event) => {
  event.preventDefault();

  const userNameEl = document.querySelector("#username-login");
  const passwordEl = document.querySelector("#password-login");

  // if (username && password) {
  const sendLogin =  async (userNameEl, passwordEl) => {
    return fetch('/api/User/login', {
      method: "POST",
      body: JSON.stringify({
        username: userNameEl.value,
        password: passwordEl.value,
      }),
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

  let response = await sendLogin(userNameEl, passwordEl);

    if (response.ok) {
      alert("You are now logged in!");
      // sessionStorage.setItem("username", `${username}`)

      document.location.replace('/myPage');
    } else {
      alert("Failed to log in");
    }
  // }
};

var submitBTN = document.querySelector("#btn_id");

submitBTN.addEventListener("click", loginFormHandler);
