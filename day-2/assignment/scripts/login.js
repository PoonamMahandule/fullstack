function login(e) {
    let name = document.getElementById('name').value, pwd = document.getElementById('password').value;
    let formData = JSON.parse(localStorage.getItem('udata')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.uname.toLowerCase() == name && data.password.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        alert("login succesfull");
    }
    e.preventDefault();
}