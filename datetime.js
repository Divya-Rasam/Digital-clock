// dates

let myDate = new Date();
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());

console.log(typeof myDate);

// date is an object in javascript

//let myCreatedDate = new Date(2024, 7, 29);
//let myCreatedDate = new Date(2024, 7, 29, 15, 51, 15);
//let myCreatedDate = new Date("2024-08-29");
let myCreatedDate = new Date("08-29-2024");

console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);  // to not confuse end user
console.log(newDate.getDay());   // mon tue wed

`${newDate.getDay()} and the time`

newDate.toLocaleString('default', {                // defining object
    weekday: "long",
})                                        