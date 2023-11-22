
const nav = document.querySelector('nav')
nav.addEventListener("click", async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token")
    const options = {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    const response = await fetch("http://localhost:3000/users/logout", options);


    localStorage.removeItem("token")
    // window.location.assign('index.html')


})
