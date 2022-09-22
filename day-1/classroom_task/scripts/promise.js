
  const getUser = (id) => {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Getting the User from the database");
      ({
        id: id,
        name: "Poonam",
      });
    }, 2000);
  })
};
  
  
const loadBlogs = (username) => {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
    console.log("Getting Twitter REST API to lad the posts");
    callbackDemo(['Post-1','Post-2','Post-3']);
    }, 2000);
 })
};

const loadComments = (post) => {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
    console.log("Getting Twitter to load the comments");
    callbackDemo(['comments for ' + post]);
    }, 2000);
 })
};

const loadrating = (post) => {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
    console.log("Getting Twitter to load the ratings");
    callbackDemo(['ratings for ' + post]);
    }, 2000);
  })
};

getUser(101)
.then(blogs => loadBlogs(blogs[0]))
    .then (comments => loadComments(comments))
    .then(comments => loadrating(comments) )
    .then(comments => console.log(comments) )
    .catch(err => console.log("Err " + err))
    
           
