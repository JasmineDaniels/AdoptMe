// document.body.style.background = 'red';

const petfinderSearchHandler = async (event) => {
    event.preventDefault();
  
    const animalType = document.querySelector('#animal-type').value;
    // const password = document.querySelector('#password-login').value.trim();

    const submitSearch = (data) => {
      fetch('/api/petfinder', {
        method: 'POST',
        body: JSON.stringify({'type': data}),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json)
      .then(console.log);
    };
    submitSearch(animalType);
    console.log(animalType);
};
  

  
  document
    .querySelector('#petfinder-search')
    .addEventListener('submit', petfinderSearchHandler);