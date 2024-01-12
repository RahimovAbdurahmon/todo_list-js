import { deleteUser , asyncEditUser, addUser , searchUser } from "./async.js"
let tableBody = document.querySelector(".tbody")
let dialogEdit = document.querySelector(".dialogEdit")
let closeEdit = document.querySelector(".closeEdit")
let btnEdit = document.querySelector(".btnEdit")
let inpEditName = document.querySelector(".inpEditName")
let dialogInfo = document.querySelector(".dialogInfo")
let closeInfo = document.querySelector(".closeInfo")
let infoName = document.querySelector(".infoName")
let btnAdd = document.querySelector(".btnAdd")
let inpAdd = document.querySelector(".inpAdd")
let inpSearch = document.querySelector(".inpSearch")
let btnSort = document.querySelector(".btnSort")
let btnRemove = document.querySelector(".btnRemove")

let cnt = 1;
function get(data) {
    tableBody.innerHTML = ""
    data.forEach(elem => {
        let tr = document.createElement("tr")
        tr.classList.add("tr")

        let tdId = document.createElement("td")
        tdId.classList.add("tdId")
        tdId.innerHTML = cnt
        cnt = elem.id
        
        let tdName = document.createElement("td")
        tdName.innerHTML = elem.name
        tdName.classList.add("tdName")

        let tdButton = document.createElement("td")
        tdButton.classList.add("tdButton")

        let btnDelete = document.createElement("button")
        btnDelete.innerHTML = "Delete"
        btnDelete.classList.add("btnDelete")
        btnDelete.onclick = () => {
            setTimeout(() => {
                deleteUser(elem.id)
            },3000)
        }

        let btnEditDialog = document.createElement("button")
        btnEditDialog.innerHTML = "Edit"
        btnEditDialog.classList.add("btnEditDialog")
        btnEditDialog.onclick = () => {
            editUser(elem)
        }

        let btnInfo = document.createElement("button")
        btnInfo.innerHTML = "Info"
        btnInfo.classList.add("btnInfo")
        btnInfo.onclick = () => {
            infoUser(elem)
        }

        tdButton.append(btnDelete,btnEditDialog,btnInfo)
        tr.append(tdId,tdName,tdButton)
        tableBody.appendChild(tr)
    });
}

///edit
closeEdit.onclick = () => {
    dialogEdit.close()
}
function editUser(elem) {
    dialogEdit.showModal()
    inpEditName.value = elem.name
    btnEdit.onclick = () => {
        let newEditUser=  {
            name : inpEditName.value
        }
        asyncEditUser(elem.id,newEditUser)
        dialogEdit.close()
    }
}

////info
function infoUser(user) {
    dialogInfo.showModal()
    infoName.innerHTML = `Name : ${user.name}`
}
closeInfo.onclick = () => {
    dialogInfo.close()
}

////Add
btnAdd.onclick = () => {
    let newUser = {
        name : inpAdd.value,
        isComplete : false
    }
    addUser(newUser)
    inpAdd.value = ""
}

///search
inpSearch.oninput = () => {
    searchUser(inpSearch.value.toLowerCase().trim())
}

///sort
btnSort.onclick = () => {

}

btnRemove.onclick = () => {
    
}

export { get }