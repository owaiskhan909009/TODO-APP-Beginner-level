let todolist = [
  { item: "Buy milk", dueDate: "4/10/2025" },
  { item: "Buy a car", dueDate: "4/10/2025" },
];
displayitems();

function addtodo() {
  let inpuitelement = document.querySelector("#todoinput");
  let dateelement = document.querySelector("#tododate");
  let todoitem = inpuitelement.value;
  let tododate = dateelement.value;
  todolist.push({item:todoitem, dueDate:tododate});
  inpuitelement.value = "";

  displayitems();
}

function displayitems() {
  let contarnerElement = document.querySelector(".todo-contanor");
  let newhtml = "";
  for (let i = 0; i < todolist.length; i++) {
  let {item, dueDate} = todolist[i]
    newhtml += `
            <span class= "itemsspan"> ${item}</span>
            <span> ${dueDate}</span>
            <button onClick= "todolist.splice(${i}, 1);
            displayitems()">Delete</button>
        `;
  }
  contarnerElement.innerHTML = newhtml;
}
