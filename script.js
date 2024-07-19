//selecting popup-box popup-overlay add-popup-button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")


addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

//select cancel button
var cancelpopup = document.getElementById("cancel")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

//select container, add-book, book-title-input, book-author-input, book-description-input
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var bookdescription = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    
                      
    div.setAttribute("class","book-container")
    div.innerHTML = ` <div class="book-details"> <h2>${booktitle.value}</h2>
                      <h5>${bookauthor.value}</h5></div>
                      <p>${bookdescription.value}</p>
                     <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

function deletebook(event){
    event.target.parentElement.remove()
}