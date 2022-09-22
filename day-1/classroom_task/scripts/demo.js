
//  let: used for code block scope
//   var :doent use var 
//   const
//case sensetive
 var a="hello"  //gloabal
 var a=20
function callall(){
    // var a="hello"  //local
    console.log('welcome to js')
    document.write('welcome to js')
    alert('welcome to js')
    console.log(a)
}
function show(){
document.getElementById('show').innerHTML='welcome to js'
}
function showReplace(){
    // e.preventDefault()
    let newData = document.data.uname.value
    document.getElementById('show1').innerHTML = newData
    // alert(newData)
    console.log(newData)

}