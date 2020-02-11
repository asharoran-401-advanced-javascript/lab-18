// eslint-disable-next-line strict
'use strict';

const sio = require('socket.io-client');

const schoolChannel = sio.connect('http://localhost:3000/school');

schoolChannel.emit('join' , 'teacher'); // pass the treachers in the channel (school room)

schoolChannel.on('submission' , payload => {
  let gradMark = Math.floor(Math.random() * 11); // returns a random integer from 0 to 10
  schoolChannel.emit('graded' , {assigment: `${payload}` , grad : `${gradMark}`}); // print a obj of assigment name and grade
});