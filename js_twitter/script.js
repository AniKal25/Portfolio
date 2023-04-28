
let textarea = document.getElementById("textArea");
let characterCount = document.getElementById("output");
const maxNumOfChars = 140;
    
const countCharacters = () => {
    let numOfEnteredChars = textarea.value.length;
    let counter = maxNumOfChars - numOfEnteredChars;

};       

textarea.addEventListener ("input", () => {
    const remaining = maxNumOfChars - textarea.value.length;

    
    
    const color = remaining < maxNumOfChars * 0.2 ? "red" : null;
    
    characterCount.textContent = `You have ${remaining} /140 characters left`;
    if (remaining <= 0) {
        characterCount.textContent = "You have 0 characters remaining";
      } 
    if (numOfEnteredChars.length > 140) {
        
    }
    characterCount.style.color = color;
    
})

