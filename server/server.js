// eslint-disable-next-line strict
'use strict';

const sio = require('socket.io')(3000); //is a JavaScript library for realtime web applications.

// bi-directional communication between web clients and servers / It has two parts: a client-side library that runs in the browser, and a server-side library for Node. js

sio.on('connection' , socket =>{ // connect with socket io
  console.log('connection' , socket.id);
});

const school = sio.of('/school'); // to pass the school route (name space)

school.on('connection' , socket =>{
  console.log('School channel' , socket.id);


  socket.on('join' , room =>{ // listen to join the room
    console.log('join' , room);
    socket.join(room);
  });

  socket.on('submission' , payload => { // listening to submission event from student
    school.to('teacher').emit('submission' , payload); // send to teachers the submmition
  });

  socket.on('graded' , payload =>{ // listening to grad event from teacher
    school.to('student').emit('graded' , payload); // send the grad to student
  });

});




