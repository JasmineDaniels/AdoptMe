const searchFilter = async (event) => {
    event.preventDefault();
    
    const filterData = [
      {'gender': `${document.querySelector('#gender').value}`},
      {'age': `${document.querySelector('#age').value}`},
      {'size': `${document.querySelector('#size').value}`}
    ];
    console.log(filterData);

    const submitSearch =  async (data) => {
      return fetch('/api/petfinder/filter', {
        method: 'POST',
        body: JSON.stringify(data),
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
    let searchResults = await submitSearch(filterData);
    let redirectUrl = `./searchResults`;
    searchResults.forEach((result) => {
      redirectUrl = `${redirectUrl}/${result.id}`;
    });
    console.log(redirectUrl);
    window.location.href = `${redirectUrl}`;

    // if (searchResults){ //response.statusCode == 200
    //   //document.location.replace('/');
    //   //document.location.replace('/all')
    //   document.location.replace(`/type/${animalType}`); // to lowercase
    //   //document.location.replace(`/breed/${animalBreed}`); // to lowercase
    // }
    

};
  
document
    .querySelector('#filter-results')
    .addEventListener('submit', searchFilter);