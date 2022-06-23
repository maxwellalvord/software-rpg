const textElement = document.getElementsById("text");
const buttonOptionElement = document.getElementById("button-options");

let State = {}

export function startGame(){
  State = {}
  showText(1);

}

export function showText(textId){
 const textNode = textNodes.find(textNode => textNode.id === textId);
 textElement.innerText = textNode.text
 while (buttonOptionElement.firstChild) {
  buttonOptionElement.removeChild(buttonOptionElement.firstChild)
 }
 textNode.options.foreach(option => {
  if (showChoice(option)) {
    const button = document.createElement("button")
    button.innerText = option.text
    button.classList.add("btn")
    buttonOptionElement.addEventListener("click", () => optionSelect(option))
    buttonOptionElement.appendChild(button)
  }
 })
}

export function showChoice(option){
  return true
}

export function optionSelect(option) {

}

const textNodes = [
  {
    id : 1,
    text: "Oh No! You woke at the office again! We don't pay for you to live here, what happened?",
    options: [
      {
        text: "You ignore your boss and go back to sleep!",
        setState: { isplaying: false},
        nextText: 99
      },
      {
        text: "I'll go grab a coffee then I'm sure I will be productive!",
        nextText: 2

      },
      {
        text: "You apologize to your boss and get focused."
      }
    ]
  }
]





startGame();


