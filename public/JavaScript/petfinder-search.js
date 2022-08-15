// document.body.style.background = 'red';

const petfinderSearchHandler = async (event) => {
    event.preventDefault();
    
    const animalType = document.querySelector('#animal-type').value;

    const submitSearch =  async (data) => {
      return fetch('/api/petfinder', {
        method: 'POST',
        body: JSON.stringify({'type': data}),
        headers: { 'Content-Type': 'application/json' },
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
    let searchResults = await submitSearch(animalType);
    // let redirectUrl = `./searchResults`;
    // searchResults.forEach((result) => {
    //   redirectUrl = `${redirectUrl}/${result.id}`;
    // });
    // console.log(redirectUrl);
    //window.location.href = `${redirectUrl}`;
    if (searchResults){ //response.statusCode == 200
      //document.location.replace('/');
      //document.location.replace('/all')
      document.location.replace(`/type/${animalType}`); // to lowercase
      //document.location.replace(`/breed/${animalBreed}`); // to lowercase
    }
    

};

  document
    .querySelector('#petfinder-search')
    .addEventListener('submit', petfinderSearchHandler);