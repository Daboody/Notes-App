let addBtn = document.querySelector(".add-note");
let appContainer = document.querySelector(".app-container");

addBtn.addEventListener("click",function(){
    // Note Field
    let noteField = document.createElement("textarea");

    let noteContainer = document.createElement("div");
    noteContainer.className = "Note-wrapper";
    
    // Edit Note Option 
    let editNoteOption = document.createElement("i");
    editNoteOption.className = "fa-solid fa-pen-to-square";

    // Delete Note Option 
    let deleteNoteOption = document.createElement("i");
    deleteNoteOption.className = "fa-solid fa-trash-can";
    
    // Delete Note On Click
      deleteNoteOption.addEventListener("click",function(){
        this.parentElement.remove();
      });
      
      editNoteOption.addEventListener("click",function(){
        this.parentElement.children[0].classList.toggle("non-editable");
        this.parentElement.children[0].classList.toggle("when-field-disabled");
         // "when-field-disabled" for CSS File
         if(this.parentElement.children[0].classList.contains("non-editable") == true && this.parentElement.children[0].classList.contains("when-field-disabled")){
            this.parentElement.children[0].setAttribute("disabled","disabled");
         } else {
            this.parentElement.children[0].removeAttribute("disabled");
            this.parentElement.children[0].removeAttribute("when-field-disabled");
         }

      });
      noteContainer.appendChild(noteField);
      noteContainer.appendChild(deleteNoteOption);
      noteContainer.appendChild(editNoteOption);
      appContainer.appendChild(noteContainer);

});
