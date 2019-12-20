const task3Element = document.getElementById('task-3');
function hello(){
  alert('Hello');
}
function name(name="John"){
  alert(name);
}
function threeNames(name1,name2,name3){
  return `${name1} ${name2} ${name3}`;
}
let result=threeNames('sam','john','sally');
alert(result);

task3Element.addEventListener('click', hello);