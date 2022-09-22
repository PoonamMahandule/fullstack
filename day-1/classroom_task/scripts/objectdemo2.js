
function comp(){
    const udata= new Object()
    
    udata.uname='admin'
    udata.city='pune'
    
    showdata= function(){
        document.getElementById('show').innerHTML=udata.uname + " " + udata.city
    }
    udata.showdata()
    }


