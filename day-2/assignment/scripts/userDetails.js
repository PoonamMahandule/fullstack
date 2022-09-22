function show(){
let text=localStorage.getItem('udata');
let obj= JSON.parse(text)
document.getElementById('name').innerHTML=obj.name;
document.getElementById('pass').innerHTML=obj.pass;
document.getElementById('email').innerHTML=obj.email;
document.getElementById('city').innerHTML=obj.city;

}