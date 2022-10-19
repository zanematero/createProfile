
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
content.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)

//create h3 header with text content Description
let descriptionHeader = document.createElement("h3")
descriptionHeader.textContent = "Description:"
dogDetails.append(descriptionHeader)

//create paragraph with given text content
let dogDescription = document.createElement("p")
dogDescription.textContent = "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals."
dogDetails.append(dogDescription)

//create h3 header Feeding Times
let feedTimeHeader = document.createElement("h3")
feedTimeHeader.textContent = "Feeding Times:"
dogDetails.append(feedTimeHeader)

//create ul of feeding times
let feedTimeList = document.createElement("ul")
let morningTime = document.createElement("li")
morningTime.textContent = "9:00 am"
feedTimeList.append(morningTime)
let noonTime = document.createElement("li")
noonTime.textContent = "12:00 pm"
feedTimeList.append(noonTime)
let eveningTime = document.createElement("li")
eveningTime.textContent = "5:00 pm"
feedTimeList.append(eveningTime)
dogDetails.append(feedTimeList)
