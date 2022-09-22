function store(){  
var employee={}
employee.name=document.fdata.name.value
employee.pass=document.fdata.pass.value
employee.email=document.fdata.email.value
employee.city=document.fdata.city.value
// employee.mn=document.fdata.mn.value
console.log(employee)
var data=localStorage.setItem('udata',JSON.stringify(employee))

}