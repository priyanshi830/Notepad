

//to save text to localStorage
function saveText() {
    const inputBox = document.querySelector(".input-box");
    const textToSave = inputBox.textContent.trim();
    localStorage.setItem("savedText", textToSave);
  }
  
  // retrieve text from localStorage
  function loadSavedText() {
    const savedText = localStorage.getItem("savedText");
    const inputBox = document.querySelector(".input-box");
    if (savedText) {
      inputBox.textContent = savedText;
    }
  }
  
  // clear text from the notepad and localStorage
  function clearText() {
    const inputBox = document.querySelector(".input-box");
    inputBox.textContent = "";
    localStorage.removeItem("savedText");
  }
  
 
  document.getElementById("save").addEventListener("click", saveText);
  document.getElementById("delete").addEventListener("click", clearText);
  
  //  saved text
  window.addEventListener("load", loadSavedText);
  