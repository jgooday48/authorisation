document.getElementById('log-out').addEventListener("click", async () => {
    fetch('http://localhost:3000/tokens/' + localStorage.getItem("token"), {
        method: 'DELETE',
    })
        .then(result => result.text())
        .then(result => console.log(result))

    localStorage.removeItem("token")

})
