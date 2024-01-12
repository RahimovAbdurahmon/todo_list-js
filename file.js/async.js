import { get } from "./dom.js"
let url = "http://localhost:3000/data"

///get
async function getData() {
    try {
        let { data } = await axios.get(url)
        get(data)
    } catch (error) {
        console.log(error);
    }
}

///Delet
async function deleteUser(id) {
    try {
        let { data } = await axios.delete(`${url}/${id}`)
        getData()
    } catch (error) {
        console.log(error);
    }
}

///Etit
async function asyncEditUser(id,newEditUser) {
    try {
        let { data } = await axios.put(`${url}/${id}`, newEditUser)
        getData()
    } catch (error) {
        console.log(error);
    }
}

//Add
async function addUser(newUser) {
    try {
        let { data } = await axios.post(url, newUser)
        getData()
    } catch (error) {
        console.log(error);
    }
}

//search
async function searchUser(searchValue) {
    try {
        let { data } = await axios.get(`${url}?q=${searchValue}`)
        get(data)
    } catch (error) {
        console.log(error);
    }
}

export { getData , deleteUser , asyncEditUser, addUser , searchUser }