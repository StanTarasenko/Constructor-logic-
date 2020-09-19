//Конструктор объекта с полями
let Student = function(name, points) {
  this.name = name;
  this.points = points;
}
//Обращение к глобальному классу Student, через свойство prototype
//с указанием функций
Student.prototype.maxMark = function() {
  return(Math.max(this.points));
}

Student.prototype.minMark = function() {
  return(Math.min(this.points));
}

//Создание новой переменной привязываемой к глобальному классу
let stas = new  Student('Stas', [1, 2, 3]);


console.log(stas);
stas.maxMark();

//функция для создания разных чисел
function randomNum(min, max) {
return Math.floor(Math.random() * (max + 1 - min));
}

//создание 5 объектов с разными числами в поле points
const students = [];
for (let i = 1; i < 6; i++) {
let student = new Student('Student ' + i, [randomNum(1, 10), randomNum(1, 10), randomNum(1, 10)]);
students.push(student);
}

console.log('all your students', students);

//функция для нахождения самого большого числа у всех студентов
function findMaxMark(arrOfStudents) {
return Math.max(arrOfStudents[0].maxMark());
}

const res = findMaxMark(students);
console.log('This is the max mark of the students ', res);