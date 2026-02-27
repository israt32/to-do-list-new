let tasks = [];

const inputEl = document.querySelector("#inputEl");
const addBtn = document.querySelector("#btn");
const taskList = document.querySelector("#taskList");
addBtn.addEventListener("click", function(){
  const value = inputEl.value.trim();
  if(value.length > 0){
    taskList.push(value);
    showApp(tasks);
  }
  inputEl.value = "";
});

function showApp(arr){
  taskList.innerHTML = "";
  if(arr.length > 0){
    for(const item of arr){
      let li = document.createElement("li");
      li.textContent = item;
      taskList.append(li);
    }
  }
  else{
    taskList.innerHTML = `
    <li>
    No task to show!
    </li>
    `;
  }
}

// showApp(tasks);