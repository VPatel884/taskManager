const readlineSync = require('readline-sync');

const tasks = [];

function userMenu() {
  console.log('Daily Task Manager');
  console.log('1. Add task');
  console.log('2. Tasks lists');
  console.log('3. Tasks status');
  console.log('4. Remove task');
  console.log('5. Exit');
}

function addTask(name,description) {
  readlineSync.question('Enter task name: ');
  readlineSync.question('Enter task description: ')
  tasks.push({name,description});
}

function listOfTasks() {
  for (task of tasks) {
    console.log('Task: ', tasks.name);
    console.log('Task description: ', tasks.description);
    console.log('-------------')
  }
}