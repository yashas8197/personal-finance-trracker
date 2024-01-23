const transactionName = document.getElementById("transactionName")
const amountInput = document.getElementById("amountInput")
const addButton = document.getElementById("addButton")
const outputList = document.getElementById("outputList")

addButton.addEventListener("click", function () {
  const listItem = document.createElement("li");

  listItem.innerHTML = `<p>${transactionName.value} Rs${amountInput.value}</p><button id="listItemDeleteBtn" class="btn btn-danger" onClick="listItemDeleteBtn(this)">Delete</button>`

  listItem.className = "list-group-item d-flex justify-content-between align-items-center"
  outputList.appendChild(listItem)
})

function listItemDeleteBtn(deleteBtn) {
  const listElement = deleteBtn.parentElement
  listElement.remove()
}
