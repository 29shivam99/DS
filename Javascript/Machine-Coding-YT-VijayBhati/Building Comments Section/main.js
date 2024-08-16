// const replyButtons = document.getElementsById("comment-box");
// console.log(replyButtons);
// replyButtons.forEach(function (replyButton) {
//   replyButton.addEventListener("click", function (e) {
//     parentComment = replyButton.parentNode;
//     const newComment = document.createElement("div");
//     newComment.innerHTML = `<button class="reply">Reply</button>`;
//     newComment.classList.add("comment", "inner-comment");
//     parentComment.appendChild(newComment);
//   });
// });

// event delegation - need to improve
// const commentBox = document.getElementById("comment-box");
// console.log(commentBox);
// commentBox.addEventListener("click", function (e) {
//   parentComment = e.target.parentNode;
//   if (e.target.classList.contains("reply")) {
//     const newComment = document.createElement("div");
//     newComment.innerHTML = `<button class="reply">Reply</button>
//     <button class="delete">Delete</button>`;
//     newComment.classList.add("comment", "inner-comment");
//     parentComment.appendChild(newComment);
//   } else if (e.target.classList.contains("delete")) {
//     parentComment.remove();
//   }
// });

// event delegation - need to improve
const commentBox = document.getElementById("comment-box");
console.log(commentBox);
commentBox.addEventListener("click", function (e) {
  parentComment = e.target.parentNode;
  if (e.target.classList.contains("reply")) {
    console.log(parentComment.children);
    const newComment = document.createElement("div");
    newComment.innerHTML = `<button class="reply">Reply</button>
    <button class="delete">Delete</button>
    <input class="comment-input" />`;
    newComment.classList.add("comment", "inner-comment");
    parentComment.appendChild(newComment);
  } else if (e.target.classList.contains("delete")) {
    parentComment.remove();
  }
});
