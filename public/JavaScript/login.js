const loginFormHandler = async (event) => {
  event.preventDefault();

  const userNameEl = document.querySelector("#username-login");
  const email = document.querySelector("#email-login");
  const passwordEl = document.querySelector("#password-login");

  // if (username && password) {
    const response = await fetch('/login', {
      method: "post",
      body: JSON.stringify({
        username: userNameEl.value,
        // email,
        password: passwordEl.value,
      }),
      headers: { "Content-Type": "application/json" },
    });

console.log('data', response)
    if (response.ok) {
      document.location.replace('/myPage');
    } else {
      alert("failed to log in");
    }
  // }
};

var submitBTN = document.querySelector("#btn_id");

submitBTN.addEventListener("click", loginFormHandler);
