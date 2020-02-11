

const sio = require('socket.io-client');

const schoolChannel = sio.connect('http://localhost:3000/school'); // connect with school channel (route)

schoolChannel.emit('join' , 'student'); // each student can join the school channel (room)


setInterval(() =>labSubmission(), 1000); //  method calls a function or evaluates an expression at specified intervals (in milliseconds)

const labSubmission = () => {
  // Resurces : https://www.w3schools.com/js/js_random.asp
  const labMark = Math.floor(Math.random() * 11); // returns a random integer from 0 to 10
  schoolChannel.emit('submission' , `lab : ${labMark}`); // to print the lab grade
};
schoolChannel.on('graded' , payload => {
  console.log(payload);
});

