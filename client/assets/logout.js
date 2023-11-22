

document.getElementById('log-out').addEventListener("click", async (e) => {
    fetch('http://localhost:3000/tokens/' + localStorage.getItem("token"), {
        method: 'DELETE',
    })
        .then(res => res.text())
        .then(res => console.log(res))

    localStorage.removeItem("token")

})
