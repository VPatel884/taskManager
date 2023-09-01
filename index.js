const readlineSync = require('readline-sync');

const task = [];

function userMenu() {
  console.log('Daily Task Manager');
  console.log('1. Add task');
  console.log('2. Tasks lists');
  console.log('3. Tasks status');
  console.log('4. Remove task');
  console.log('5. Exit');
}
