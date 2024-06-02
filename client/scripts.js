const http = new coreHTTP;

// Block Variables
let theList = [];

// setup selectors
const result = document.querySelector(".result");
const input =  document.querySelector("#listitem");
const addButton =  document.querySelector(".add-btn");
// const delButton =  document.querySelector(".del-btn");

// Listeners
addButton.addEventListener("click", httpPost);
// delButton.addEventListener("click", httpDelete);

/* Helper Functions */
function ShowList() {
  let output = "<ul>";
  theList.forEach((item, index) => {
    output += `<li>${item} <button class="del-item-btn" data-index="${index}" style="font-size: 12px; padding: 2px 5px;">Delete</button></li>`;
  });
  output += "</ul>";
  result.innerHTML = output;

  // Add event listeners for the delete buttons
  const deleteButtons = document.querySelectorAll(".del-item-btn");
  deleteButtons.forEach(button => {
    button.addEventListener("click", httpDelete);
  });
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
  http.post('/api',theList)
    .then( (response)=> {
      // console.log(response)
    })
    .catch((error) => {
      console.log(error)
    });
}

/* Listener Functions */
async function httpPost(e) {
  showLoading();
  e.preventDefault();
  theList.push(input.value);
  WriteList();
  ShowList();
  input.value = "";
}

function httpDelete(e) {
  console.log(e.target.getAttribute("data-index"))
  // const index = ;
  showLoading();
  e.preventDefault();
  index = e.target.getAttribute("data-index");
  if(index != -1){
      theList.splice(index,1)
  }else{
    alert('element not found')
  }
  WriteList();
  ShowList();
  input.value = ""
}

// Loading functions
function showLoading() {
  result.innerHTML = "Loading...";
}

async function main() {
  addButton.disabled = true;
  // delButton.disabled = true;
  showLoading();

  await GetList();

  addButton.disabled = false;
  // delButton.disabled = false;
}

main();