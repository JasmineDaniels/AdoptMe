const loginFormHandler = async (event) => {
  event.preventDefault();

  const userNameEl = document.querySelector("#username-login");
  const passwordEl = document.querySelector("#password-login");

  // if (username && password) {
    const response = await fetch('/api/User/login', {
      method: "post",
      body: JSON.stringify({
        username: userNameEl.value,
        password: passwordEl.value,
      }),
      headers: { "Content-Type": "application/json" },
    });

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
