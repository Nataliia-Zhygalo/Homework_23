
/*Написать функцию assignObjects(obj1, obj2),
 которая принимает аргументами 2 объекта и возвращает новый, 
 который состоит из свойств обоих объектов (склеить). 
 Если свойство повторяется, то взять значение второго объекта

assignObjects({ x: 10, y: 20 }, { z: 30 }) вывод { x:10, y:20, z: 30 }
assignObjects({ x: 10 }, { x: 20, y: 30 }) вывод { x:20, y: 30 }
*/
const obj1 = {
 x: 10,
 y: 20
};
const obj2 = {
  z: 30 
};

const newObj = assignObjects(obj1, obj2);

function assignObjects(obj1, obj2) {
	const assignObj = obj1;
	for (let key in obj2) {
		assignObj[key] = obj2[key];
}
return assignObj;
}
console.log(newObj);


