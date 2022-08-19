console.log('I am connected')

document.querySelectorAll('.contact-pet').forEach(btn => {
    // ... add an event listener for `this` button...
    btn.addEventListener('click', async (event) => {
      event.preventDefault(); //event.target  
  
      const Pet_name = btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.children[0].innerHTML
      console.log(Pet_name)
      const Age = btn.parentElement.previousElementSibling.children[1].children[2].children[0].innerHTML
      console.log(Age)
      const petfinder_id = btn.getAttribute('id');
      console.log(petfinder_id)
      const breeds = btn.parentElement.previousElementSibling.children[1].children[0].children[0].innerHTML
      console.log(breeds)
      const description = btn.parentElement.previousElementSibling.children[0].innerHTML
      console.log(description)
      const type = btn.parentElement.previousElementSibling.children[1].children[4].children[0].innerHTML
      console.log(type)
      const photos = btn.parentElement.previousElementSibling.previousElementSibling.children[0].children[0].getAttribute('id')
      console.log(photos)
      
      const awaitFetch = await fetch(`/api/contact`, {
        method: 'POST',
        body: JSON.stringify({
          Pet_name,
          Age,
          petfinder_id,
          breeds,
          description,
          type,
          photos,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })      
  
      if (awaitFetch.ok){
        document.location.replace(`/contact/${petfinder_id}`)
      } else {
        console.log('Failed to make Contact')
      }
    })
  
  })