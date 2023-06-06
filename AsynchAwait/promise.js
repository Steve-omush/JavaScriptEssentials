// //promise
// const posts = [
//     {title : 'Post One', body : 'This is the body of Post One'},
//     {title : 'Post Two', body : 'This is the body of Post Two'}
// ];

// function getPosts() {
//     setTimeout (() => {
//         let output = '';
//         //loop through the array.
//         posts.forEach((post, index) => {
//             //display the title of the posts
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// function createPost(post) {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             posts.push(post);

//             const error = false;

//             if (!error) {
//                 resolve();
//             } else {
//                 reject('Error! Soething is Wrong!');
//             }

//         }, 2000);
//     });  
// }
// //Async Await 
//  async function getIt() {
//     await createPost ({title : 'Post Three', body : 'This is the body of Post Three'});
//     getPosts();
//  }
//  getIt();

//  //Async Await fetch
//  async function fetchUsers () {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     console.log(data);
//  }
//  fetchUsers();

// //createPost ({title : 'Post Three', body : 'This is the body of Post Three'}) .then(getPosts).catch( err => console.log(err));
// // use promise.all
// const promise1 = Promise.resolve('Hello World!');
// const promise2 = 10;
// const promise3 = new Promise ((resolve,reject) => setTimeout(resolve,2000,"Goodbye"));
// //fetch api . uses two .then()
// const promise4 = fetch ('https://jsonplaceholder.typicode.com/users') .then(res => res.json());

// Promise.all([promise1,promise2,promise3,promise4]). then(values => console.log(values));



// //More Examples
// function resolveAfterTwoSeconds() {
//     return new Promise ( resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         },2000);
//     });
// }
// async function asynCall() {
//     console.log('Calling');
//     const result = await resolveAfterTwoSeconds();
//     console.log(result);
// }
// asynCall();
function resolveAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("slow");
        console.log("slow promise is done");
      }, 2000);
    });
  }
  
  function resolveAfter1Second() {
    console.log("starting fast promise");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("fast");
        console.log("fast promise is done");
      }, 1000);
    });
  }
  
  async function sequentialStart() {
    console.log("==SEQUENTIAL START==");
  
    // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds();
    console.log(slow); // 2. this runs 2 seconds after 1.
  
    const fast = await resolveAfter1Second();
    console.log(fast); // 3. this runs 3 seconds after 1.
  }
  
  async function concurrentStart() {
    console.log("==CONCURRENT START with await==");
    const slow = resolveAfter2Seconds(); // starts timer immediately
    const fast = resolveAfter1Second(); // starts timer immediately
  
    // 1. Execution gets here almost instantly
    console.log(await slow); // 2. this runs 2 seconds after 1.
    console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
  }
  
  function concurrentPromise() {
    console.log("==CONCURRENT START with Promise.all==");
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
      (messages) => {
        console.log(messages[0]); // slow
        console.log(messages[1]); // fast
      },
    );
  }
  
  async function parallel() {
    console.log("==PARALLEL with await Promise.all==");
  
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
      (async () => console.log(await resolveAfter2Seconds()))(),
      (async () => console.log(await resolveAfter1Second()))(),
    ]);
  }
  
  sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"
  
  // wait above to finish
  setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"
  
  // wait again
  setTimeout(concurrentPromise, 7000); // same as concurrentStart
  
  // wait again
  setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"
  