function Show(){
let Get=document.getElementById("Task");//get id element with the name Task & store it To Get
let Task_Value = Task.value;//store the Task value to Task_value

if(Task_Value.trim() === ""){//trim is a string method that removes extra space 
    alert("Please enter a Task");
    return;
}

let Task_Id = document.getElementById("Task_List");//get the id task listand & store it on Task_Id
let Create_Task =document.createElement("li");//Create a li Html element & store it 
Create_Task.innerText = Task_Value;//inside our new li elment we gonna store Task_Value which is whatever user puts
Task_Id.append(Create_Task);//here  we are adding the li element to ul element to the end or task list using append.
console.log(Create_Task);//printing the li and whatever the value is

// Task.value="";//this clears the input box after clicked enter

let Delte_btn = document.createElement("button");
Delte_btn.innerText = "❌";
Delte_btn.style.marginLeft= "130px";
Delte_btn.style.cursor= "pointer";

Delte_btn.onclick = function(){//here something happen when the button is clicked 
    Task_Id.removeChild(Create_Task)//Task id is the Task list so removes a list from Task list,which is the value 
};
  Create_Task.appendChild(Delte_btn);//add the delte btn end of its task wich is the "❌"
//   Task_Id.appendChild(Create_Task); //and here we add new lists to the ul

  Get.value="" ;//clears the box
}
