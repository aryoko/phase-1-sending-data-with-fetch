// const { default: axios } = require("axios")





function submitData(name, email) {
  
  const formData = {name: name, email: email}

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
    body: JSON.stringify(formData)
};

const element = document.querySelector('body')

const destinationURL = "http://localhost:3000/users"

/*axios.post(destinationURL, configurationObject)
  .then(function (response) {
    document.body.append(element)
    element.innerText = response.data.id
    console.log(response.data, response.data.id)
  })
  .catch(error => {
    element.parentElement.textContent = `Error: ${error.message}`
    console.log('There was an error!', error)
  }) */

  
    return fetch("http://localhost:3000/users", configurationObject) 
   .then(function (response) {
    return response.json()
  })
  .then(function (object) {
    const newH3 = document.createElement('h3')
    document.body.append(newH3)
    newH3.textContent = object.id
  })
  .catch(function (error) {
    const errorMessage = document.createElement('h4')
    document.body.append(errorMessage)
    errorMessage.textContent = error.message
  });

}



// submitData('ben', 'bennyokri@aol.com')