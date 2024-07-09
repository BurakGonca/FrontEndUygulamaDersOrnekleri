// get request

// const jsonURL = "https://jsonplaceholder.typicode.com/posts";
// const getReq = (url) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open("GET", url)
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//               const response = JSON.parse(xhr.responseText);
//               console.log(response);
//             } else {
//               console.log(`${xhr.status} - Couldn't fetch the data`);
//             }
//           }
//     }
//     xhr.send()
// }

// getReq(jsonURL)







//post request



// const url_post = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// const data = {
//     userId: 999,
//     id: 999,
//     title: "ANK-16",
//     completed: true
// }
// console.log(data);
// const newPost = JSON.stringify(data);
// console.log(newPost);

// xhr.onreadystatechange = ()=>{
//     if(xhr.readyState === 4 && xhr.status === 201){
//         console.log("4-DONE");
//         console.log(xhr.response);
//     }
// }
// xhr.open("POST",url_post);
// xhr.setRequestHeader("Content-type","application/json; chartset=utf-8");
// xhr.responseType="json";
// xhr.send(newPost);







//put request

// const url_post = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// const data2 = {
//     userId: 999,
//     id: 999,
//     title: "ANK-16",
//     completed: true
// }
// console.log(data2);
// data2.userId=1500;
// const newPost = JSON.stringify(data2);
// console.log(newPost);

// xhr.onreadystatechange = ()=>{
//     if(xhr.readyState === 4 && xhr.status === 201){
//         console.log("4-DONE");
//         console.log(xhr.response);
//     }
// }
// xhr.open("PUT",url_post);
// xhr.setRequestHeader("Content-type","application/json; chartset=utf-8");
// xhr.responseType="json";
// xhr.send(newPost);




















//---------------------------------------------------------------------------------------------------------------------------------


// Aşağıda tarifinden anlayacağınız istekleri https://jsonplaceholder.typicode.com/ URL'ine atın. her bir isteği 1 kere then, 1 kere de async/await yöntemi ile atın. isteklerinizi fonksiyon içerisinde tanımlayın.
//getCommentById, getAllComments, postComment, deleteComment, updateCommentPatch, updateCommentPut




 
// const getCommentById = ((id) => {
//   const jsonUrl = "https://jsonplaceholder.typicode.com/comments";
//   fetch(`${jsonUrl}/${id}`)
//       .then((res) => res.json())
//       .then((data) => console.log(data));
// })
// getCommentById(3);



//-------------------------------------------------


// const getAllComments = (() =>{
//   const jsonUrl = "https://jsonplaceholder.typicode.com/comments";
//   fetch(`${jsonUrl}`)
//   .then((response) =>response.json())
//   .then((data) => console.log(data));

// }
// )

// getAllComments();




//-------------------------------------------------




// const newComment = {
//   name: "Burak Gonca",
//   email: "burak@gonca.com",
//   body: "lorem ipsum dolor sit amet non elit"

// };

// const postComment =((newComment)=>{
//   const jsonUrl = "https://jsonplaceholder.typicode.com/comments";

//   fetch(jsonUrl, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newComment),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));

// }
// )

// postComment(newComment);





//-------------------------------------------------







