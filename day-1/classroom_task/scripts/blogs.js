//call back: pay for coffee onces it ready ..passing parameter as a function in other function
const getBlogs = (callbackdemo) => {
  
    setTimeout(() => {
        callbackdemo({
       // return {
          title: 'welcome to my app'
      //  }
    })
      }, 2000);
     
}
// getBlogs = function(){

// }
getBlogs((bp) => {
    console.log(bp.title);
})
// const mydata = getBlogs()
// console.log(mydata.title)
//window  alert,conform ,setTimeout 2 sec  2000ms
//settime
