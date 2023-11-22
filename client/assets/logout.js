
const logout = document.querySelector('#logout')
logout.addEventListener("click", async (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/tokens/' + localStorage.getItem("token"), {
        method: 'DELETE',
    })
        .then(res => res.text())
        .then(res => console.log(res))

    localStorage.removeItem("token")

})
