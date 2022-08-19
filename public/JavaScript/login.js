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
      return response.json()
    })
    .then((results) => {
      console.log(results);
      return results;
    })
    .catch(err => response.status(500).send(err));
  };

  let response = await sendLogin(userNameEl, passwordEl);
  console.log('data', response)

    if (response.ok) {
      // sessionStorage.setItem("username", `${username}`)

      document.location.replace('/myPage');
    } else {
      alert("failed to log in");
    }
  // }
};

var submitBTN = document.querySelector("#btn_id");

submitBTN.addEventListener("click", loginFormHandler);
