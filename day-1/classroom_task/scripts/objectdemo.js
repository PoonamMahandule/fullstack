function show(){
    const Userdata={
         uname: document.data.uname.value,
         email:document.data.email.value,
         city:document.data.city.value,
    }
    document.getElementById('show').innerHTML=Userdata.email + " " +Userdata.uname + " "+Userdata.city
    }