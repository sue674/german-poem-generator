
function generatePoem(event){
   
event.preventDefault();
new Typewriter('#poem', {
  strings: "The poem will go header",
  autoStart: true,
});
}
   


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);