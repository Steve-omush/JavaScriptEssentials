const posts = [
    {title : 'Post One', body : 'This is the body of Post One'},
    {title : 'Post Two', body : 'This is the body of Post Two'}
];

function getPosts() {
    setTimeout (() => {
        let output = '';
        //loop through the array.
        posts.forEach((post, index) => {
            //display the title of the posts
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000);
}
//call the function getPosts
/*getPosts();
*/
//add another title to the posts array created but then three seconds later

/*function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}
createPost ({title : 'Post Three', body : 'This is the body of Post Three'});
*/

//Post Three will not be visible at the DOM since it takes 1 more secnd to run than getPosts . Need to use async and callbacks. 


//make getPosts() a callback function now will make it get executed after the post has been pushed to posts and it will not have to wait for 2 seconds. remove the getPost call function
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}
createPost ({title : 'Post Three', body : 'This is the body of Post Three'}, getPosts);
