// comment clicked
const addComentBox = function (e) {
  let btnComment = e.target;
  let inputBox = btnComment.parentElement;
  let commentInp = inputBox.querySelector(".comment-input");
  let inpText = commentInp.value;

  if (!inpText) {
    alert("Please enter something in the comment box");
    return;
  }

  let commentBox = inputBox.parentElement;

  let newCommentBox = document.createElement("div");
  newCommentBox.classList.add("comment-box");
  newCommentBox.classList.add("child-comment-box");
  newCommentBox.innerHTML = `
            <div class="comment">
              <div class="comment-text">${inpText}</div>
              <div class="btns">
                <button class="reply btn" onclick="replyClicked(event)">Reply</button>
                <button class="edit btn" onclick="editClicked(event)">Edit</button>
                <button class="delete btn" onclick="deleteClicked(event)">Delete</button>
              </div>
            </div>`;

  commentBox.appendChild(newCommentBox);
  commentInp.value = "";

  let parentInpBox = e.target.closest(".child-input-box");
  if (parentInpBox) parentInpBox.remove();
};

// reply clicked

const replyClicked = function (e) {
  let replyBtn = e.target;
  let parentCommentBox = replyBtn.closest(".comment-box");
  if (parentCommentBox.querySelector(".input-box")) return;
  let newComment = document.createElement("div");
  newComment.classList.add("input-box");
  newComment.classList.add("child-input-box");
  newComment.innerHTML = `
              <input class="comment-input" placeholder="Type a comment" />
              <button class="btn-comment btn" onclick="addComentBox(event)">Comment</button>
            `;

  parentCommentBox.appendChild(newComment);
};

//  saves the editted text

const saveEdit = function (e) {
  console.log(e);
  let editingInp = e;
  editingInp.addEventListener("blur", () => {
    const text = editingInp.value;
    let commentEle = editingInp.closest(".comment");
    editingInp.remove();

    let inputText = document.createElement("div");
    inputText.classList.add("comment-text");
    inputText.innerText = text;
    commentEle.prepend(inputText);
  });
};

// edit clicked

const editClicked = function (e) {
  let editBtn = e.target;

  let inpVal = editBtn
    .closest(".child-comment-box")
    .querySelector(".comment-text");
  console.log(inpVal);

  let inputTag = document.createElement("input");
  inputTag.classList.add("input-edit");
  inputTag.value = inpVal.innerText;

  inpVal.remove();

  editBtn
    .closest(".child-comment-box")
    .querySelector(".comment")
    .prepend(inputTag);
  inputTag.addEventListener("click", function () {
    saveEdit(inputTag);
  });
};

// delete clicked

const deleteClicked = function (e) {
  let deleteBtn = e.target;
  let parentCommentBox = deleteBtn.closest(".child-comment-box");
  parentCommentBox.remove();
};
