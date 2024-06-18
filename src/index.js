
function displayPoem(response){
new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
});
}

function generatePoem(event){
    event.preventDefault();
   
   let instructions = document.querySelector("#user-instruction")
   let apiKey = "feaeta6473b4b23fd60370ob33dc4c40";
let prompt = `Write a short poem of 4 lines in German about  ${instructions.value}`
let context = "You are a romantic poet and write short poems about the topic given to you. Put them in 4 lines and separate them with a <br /> element. Sign it with 'SheCodes AI' at the bottom in a <strong> element. "
   let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
  
   axios.get(apiUrl).then(displayPoem);
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML =  `<div class="generating"> Generating a German poem about ${instructions.value} for you </div>`

console.log("Generating poem");
console.log(`prompt: ${prompt}`);
console.log(`context: ${context}`);

}
   


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);