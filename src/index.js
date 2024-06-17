
function displayPoem(response){
new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
});
}

function generatePoem(event){
    event.preventDefault();
   //build api url
   let instructions = document.querySelector("#user-instruction")
   let apiKey = "feaeta6473b4b23fd60370ob33dc4c40";
let prompt = `Write a short poem of 4 lines in German about  ${instructions}`
let context = "You are a romantic poet and write short poems about the topic given to you. Put them in 4 lines and separate them with a <br /> element. Sign it with 'SheCodes AI' at the bottom in a <strong> element. "
   let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
   //get answer from api using axios
   axios.get(apiUrl).then(displayPoem);
   //display poem insted of dummy


}
   


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);