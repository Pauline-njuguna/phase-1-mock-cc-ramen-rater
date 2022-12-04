// write your code here
const menu = document.getElementById("ramen-menu")
function fetchImages(url) {
    fetchImages(url)
    .then (resp => resp.json())
    .then(ramen => {createImages(ramen)})
}
fetchImages(" http://localhost:3000/ramens")

function createImages(images){
    for(let image of images){
        newMenuItem(image)
    }
}
const form= document.getElementById("new-ramen")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let image = {
      "image": document.querySelector("#new-image").value,
     "name": document.querySelector("#new-image").value,
     "restraunt": document.querySelector("#new-image").value,
     "rating": document.querySelector("#new-image").value,
      "comment":document.querySelector("#new-image").value,
    }
    newMenuItem(image)
    showDetailInfo(image)
})
function newMenuItem(image){
    let menuItem =document.createElement("img")
    menuItem.setAttribute("src", image.image)
    menu.appendChild(menuItem)
}