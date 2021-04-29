let content = document.getElementById("content");

function homeRender() {
    let homepageDiv = document.createElement("div")
    let title = document.createElement("h1")
    let image = document.createElement("img")
    let intro = document.createElement("h2")

    homepageDiv.setAttribute("class", "homepage")

    let titleContent = document.createTextNode("The Pizza Co")

    // intro.setAttribute('style', 'white-space: pre;')
    // intro.textContent = "Pizza is one of the world’s most popular foods. \r\n";
    // intro.textContent += "\r\n";
    // intro.textContent += "In the U.S., 350 slices are eaten every second, while 40% of Americans eat pizza at least once a week.\r\n";
    // intro.textContent += "\r\n";
    // intro.textContent += "There’s a reason why pizza is so popular. Humans are drawn to foods that are fatty and sweet and rich and complex. Pizza has all of these components. Cheese is fatty, meat toppings tend to be rich, and the sauce is sweet. \r\n";
    // intro.textContent += "\r\n";
    // intro.textContent += "Pizza toppings are also packed with a compound called glutamate, which can be found in the tomatoes, cheese, pepperoni and sausage. When glutamate hits our tongues, it tells our brains to get excited – and to crave more of it. This compound actually causes our mouths to water in anticipation of the next bite.\r\n";
    // intro.textContent += "\r\n";
    // intro.textContent += "Then there are the combinations of ingredients. Cheese and tomato sauce are like a perfect marriage. On their own, they taste pretty good. But according to culinary scientists, they contain flavor compounds that taste even better when eaten together. \r\n";


    title.appendChild(titleContent)
    image.src = 'https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/publications/hospitality/bighospitality.co.uk/article/2020/04/17/pizza-pilgrims-reopens-victoria-restaurant-for-delivery-after-closing-due-to-coronavirus-crisis/3334355-1-eng-GB/Pizza-Pilgrims-reopens-Victoria-restaurant-for-delivery-after-closing-due-to-Coronavirus-crisis_wrbm_large.jpg'

    homepageDiv.appendChild(title)
    homepageDiv.appendChild(image)
    // homepageDiv.appendChild(intro)
    content.appendChild(homepageDiv)
}

export { homeRender }