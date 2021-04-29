import { homeRender } from './homepage'
import { menuRender } from './menupage'
import { contactRender } from './contactpage'

let render = (function (){

    ///Establish Nav Bar
    let content = document.getElementById("content");
    let navbar = document.createElement("div")
    navbar.setAttribute("class", "navbar")
    content.appendChild(navbar)  

    let navlist = document.createElement("div")
    let logo = document.createElement("img")

    logo.setAttribute('src', 'images/logo.svg')

    navlist.setAttribute("class", "navlist")

    let navpages = ["home", "menu", "contact"]

    navbar.appendChild(navlist)
    navbar.appendChild(logo)

    for(let i = 0; i < 3; i++){
        let current = navpages[i]
        let p = document.createElement('p');
        p.setAttribute('id', `${[current]}`);
        p.textContent = navpages[i];
        navlist.appendChild(p)
    }

    let homepage = document.getElementById("home")
    let menu = document.getElementById("menu")
    let contact = document.getElementById("contact")
    
    function clearPage() {
        if(document.querySelector(".homepage") != null) {
            document.querySelector(".homepage").parentNode.removeChild(document.querySelector(".homepage"))
        }

        if(document.querySelector(".menupage") != null) {
            document.querySelector(".menupage").parentNode.removeChild(document.querySelector(".menupage"))
        }

        if(document.querySelector(".contactpage") != null){
            document.querySelector(".contactpage").parentNode.removeChild(document.querySelector(".contactpage"))
        }
    }

    homepage.addEventListener("click", function() {
        clearPage()
        homeRender()
    })

    menu.addEventListener("click", function() {
        clearPage()
        menuRender()
    })

    contact.addEventListener("click", function() {
        clearPage()
        contactRender()
    })

})();

document.onload = homeRender()

