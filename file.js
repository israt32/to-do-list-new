let tasks = [];

const inputEl = document.querySelector("#inputEl");
const addBtn = document.querySelector("#btn");
const taskList = document.querySelector("#taskList");
addBtn.addEventListener("click", function(){
  const value = inputEl.value.trim();
  if(value.length > 0){
    tasks.push(value);
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
      li.style.marginTop = '10px';
      let button = document.createElement("button");
      // let button = document.createElement("button")
      button.style.marginLeft = "10px";
      button.innerHTML = 'Delete';
      button.addEventListener("click", function(){
        arr.splice(arr.indexOf(item), 1);
        deleteTask();
      });
      li.append(button);
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

showApp(tasks);

function deleteTask(){
  showApp(tasks);
}
