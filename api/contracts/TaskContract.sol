pragma solidity 0.8.20;
//SPDX-License-Identifier: MIT

contract TaskContract {
 event AddTask(address recipient, uint taskId);
 event DeleteTask(uint taskId, bool isDeleted);

 struct Task {
  uint id;
  string taskText;
  bool isDeleted;
 }

 Task[] tasks;
 mapping(uint256 => address) public taskToOwner;

 function addTask(string memory taskText, bool isDeleted) external {
  //to generately create unique id for task, we simply get the current length of the tasks array
  uint taskId = tasks.length;
  tasks.push(Task(taskId, taskText, isDeleted));
  //msg.sender will have the wallet address of the user
  taskToOwner[taskId] = msg.sender;
  emit AddTask(msg.sender, taskId);
 }

 function getMyTasks() external view returns (Task[] memory) {
  Task[] memory temporary = new Task[](tasks.length); 
  uint counter = 0;

  for (uint i = 0; i < tasks.length; i++) {
   if (taskToOwner[i] == msg.sender && !tasks[i].isDeleted) {
    temporary[counter] = tasks[i];
    counter++;
   }
  }

  Task[] memory result = new Task[](counter);
  for (uint i = 0; i < counter; i++) {
   result[i] = temporary[i];
  }

  return result;
 }

 function deleteTask(uint taskId, bool isDeleted) external {
  if(taskToOwner[taskId] == msg.sender) {
   tasks[taskId].isDeleted = isDeleted;
   emit DeleteTask(taskId, isDeleted);
  }
 }

 //login with metamask
 function login() external view returns (address) {
  return msg.sender;
 }

}
