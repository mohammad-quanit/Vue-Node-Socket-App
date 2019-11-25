const express = require('express');
const app = express();
const socket = require('socket.io');
const server = app.listen(process.env.PORT || 4001, () => console.log(`Running on http://localhost:4001`));
const axios = require("axios");

//socket setup
const io = socket(server);

// const index = require("./routes/index");


app.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

io.on('connection', socket => {
  socket.on('SEND_MESSAGE', data => {
    console.log(data);
    io.emit('MESSAGE', data)
  });
  // socket.emit('sent', `Ye bhja ha`)
})

// // const getApiAndEmit = "TODO";

// const express = require('express');


// const app = express();



// const server = app.listen(4001, function () {
//   console.log('server running on port 3001');
// });


// const io = require('socket.io')(server);

// io.on('connection', function (socket) {
//   console.log(socket.id)
//   socket.on('SEND_MESSAGE', function (data) {
//     io.emit('MESSAGE', data)
//   });
// });