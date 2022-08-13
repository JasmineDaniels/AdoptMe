// document.body.style.background = 'red';

const petfinderSearchHandler = async (event) => {
    event.preventDefault();
  
    const animalType = document.querySelector('#animal-type').value;

    const submitSearch =  async (data) => {
      await fetch('/api/petfinder', {
        method: 'POST',
        body: JSON.stringify({'type': data}),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(results => results.json())
      .then(data => {
        searchResults = data
        console.log(searchResults)
      });
      // .then(window.location.href = './searchResults')
      // .catch(err => res.status(500).send(err));
    };
    let searchResults = await submitSearch(animalType);
    console.log(searchResults);
};

  document
    .querySelector('#petfinder-search')
    .addEventListener('submit', petfinderSearchHandler);