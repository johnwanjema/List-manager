const http = new coreHTTP;

// Block Variables
let theList = [];

// setup selectors
const result = document.querySelector(".result");
const input =  document.querySelector("#listitem");
const addButton =  document.querySelector(".add-btn");
const delButton =  document.querySelector(".del-btn");

// Listeners
addButton.addEventListener("click", httpPost);
delButton.addEventListener("click", httpDelete);

/* Helper Functions */
function ShowList() {
  let output = "<ul>";
  for (const itm of theList) {
    output += `<li>${itm}</li>`;
  }
  output += "</ul>";
  result.innerHTML = output;
}

async function GetList() {
    http.get('/api')
    .then( (response)=> {
      theList = response;
      ShowList();
    })
    .catch((error) => {
      console.log(error)
    });
}

async function WriteList() {

}

/* Listener Functions */
async function httpPost(e) {
  // console.log(input.value)
  http.post('/api',{1 : 'item'})
    .then( (response)=> {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    });
}

function httpDelete(e) {

  
}

// Loading functions
function showLoading() {
  result.innerHTML = "Loading...";
}

async function main() {
  addButton.disabled = true;
  delButton.disabled = true;
  showLoading();

  await GetList();

  addButton.disabled = false;
  delButton.disabled = false;
}

main();