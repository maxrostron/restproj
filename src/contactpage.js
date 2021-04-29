let content = document.getElementById("content");

function contactRender() {
    let contactpageDiv = document.createElement("div")
    contactpageDiv.setAttribute("class", "contactpage")
    content.appendChild(contactpageDiv)

    let image = document.createElement("img")
    image.setAttribute("src", "images/contactPage.PNG")
    contactpageDiv.appendChild(image)

    let contactTitle = document.createElement("h1")
    contactTitle.textContent = "Contact Us:"
    contactpageDiv.appendChild(contactTitle)

    let contactDetails = document.createElement("h2")
    contactDetails.setAttribute('style', 'white-space: pre;')
    contactDetails.textContent = "Call us: 07902 000000 \r\n";
    contactDetails.textContent += "Email us: github@fakepizza.come \r\n"
    contactDetails.textContent += " \r\n"
    contactDetails.textContent += "We are open daily to serve the best food. \r\n"
    contactDetails.textContent += " \r\n"
    contactDetails.textContent += "Monday –  Thursday: 5pm – 10:30pm \r\n"
    contactDetails.textContent += "Friday – Sunday: 12pm – 10:30pm \r\n"

    contactpageDiv.appendChild(contactDetails)

}


export { contactRender }