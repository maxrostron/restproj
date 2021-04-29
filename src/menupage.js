let content = document.getElementById("content");

function menuRender() {
    let menupageDiv = document.createElement("div")
    menupageDiv.setAttribute("class", "menupage")
    content.appendChild(menupageDiv)

    function menuFactory(name, description, price, imagename){
        const item = document.createElement("div")
        item.setAttribute("class", `menuitem`)

        const image = document.createElement('img')
        image.setAttribute('src', `images/${imagename}`)
        item.appendChild(image)

        const itemname = document.createElement("h1")
        itemname.textContent = name
        item.appendChild(itemname)

        const itemdescription = document.createElement("h2")
        itemdescription.textContent = description
        item.appendChild(itemdescription)

        const itemprice = document.createElement("h3")
        itemprice.textContent = `£${price}`
        item.appendChild(itemprice)

        return {
            attachItem() {
                menupageDiv.appendChild(item)
            }
        }
    }

    const margherita = menuFactory(
        'Margherita (V)', 
        'Tomato, mozzarella di bufala D.O.P, parmesan, fresh basil, extra virgin olive oil',
        '9.99',
        'marg.PNG')
    margherita.attachItem()

    const caruso = menuFactory(
        'Caruso (V)',
        'Home made Basil pesto sauce, smoked mozzarella, cherry tomatoes, aubergines, parmesan shaved and truffle oil',
        '11.99',
        'caruso.PNG'
    )
    caruso.attachItem()

    const manzoni = menuFactory(
        'Alessandro Manzoni',
        'Tomato, mozzarella, anchovies, cappers, black olives, oregano, fresh basil, extra virgin olive oil',
        '11.99',
        'manzoni.PNG'
    )
    manzoni.attachItem()

    const verdi = menuFactory(
        'Giuseppe Verdi',
        'Mozzarella, parma ham, wild rocket, cherry tomatoes, parmesan shaved, extra virgin olive oil',
        '13.99',
        'verdi.PNG'
    )
    verdi.attachItem()

    const pascoli = menuFactory(
        'Giovanni Pascoli',
        'Burrata cheese, cherry tomatoes, bresaola meat, fresh rocket, parmesan shaved and extra virgin olive oil',
        '13.99',
        'pascoli.PNG'
    )
    pascoli.attachItem()

    const nutella = menuFactory(
        'Pizza Alla Nutella',
        'Pizza focaccia topped with nutella and almond flakes',
        '8.99',
        'nutella.PNG'
    )
    nutella.attachItem()


}


export { menuRender }