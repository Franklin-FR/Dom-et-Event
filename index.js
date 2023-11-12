

// const ulElement = document.querySelector("ul")
// console.log(ulElement.parentNode)

let submitInput = document.querySelector('input[type ="submit"]')
submitInput.addEventListener("click", addNewItem)

function addNewItem (e) {
    e.preventDefault()
    let newLi = document.createElement("li")
  let newItem =  document.getElementById("inpput").value
  newLi.textContent = newItem
 let ul = document.querySelector("#ul-id")
 ul.appendChild(newLi)
 document.getElementById("inpput").value = ""


    // document.createTextNode()

}