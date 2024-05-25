<<<<<<< HEAD
//calculate the speed of the car

let speed = 130;
let speedLimit = 70;
let aboveSpeed = 5;
let overSpeed = 1;

//if the  speed is less than 70 its car
//else your licences suspend

if (speed <= speedLimit) {
    console.log("Ok");
} else {
    let aboveLimit = speed - speedLimit;
    let demeritPoints = (aboveLimit / aboveSpeed) * overSpeed;
    console.log(`DemeritPoints: ${demeritPoints}`);

    while(demeritPoints >= 12){
        console.log(`License suspended: ${demeritPoints}`);
    }
}
=======
//calculate the speed of the car

let speed = 130;
let speedLimit = 70;
let aboveSpeed = 5;
let overSpeed = 1;

//if the  speed is less than 70 its car
//else your licences suspend

if (speed <= speedLimit) {
    console.log("Ok");
} else {
    let aboveLimit = speed - speedLimit;
    let demeritPoints = (aboveLimit / aboveSpeed) * overSpeed;
    console.log(`DemeritPoints: ${demeritPoints}`);

    while(demeritPoints >= 12){
        console.log(`License suspended: ${demeritPoints}`);
    }
}
>>>>>>> 1da5eaa90dcd3317d2cad15e438439278def9cb2
