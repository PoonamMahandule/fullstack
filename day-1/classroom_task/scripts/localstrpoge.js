
// function addData(){
//  var data=localStorage.setItem('udata',document.fdata.uname.value)
//     }
// function showData(){
//      var data=localStorage.getItem('udata',document.fdata.uname.value)
//      document.getElementById('showName').innerHTML
// }

function addData(){
     var data=localStorage.setItem('udata',document.fdata.uname.value)
    }
    
    
    function showData(){
    document.getElementById('show').innerHTML=localStorage.getItem('udata')
    }