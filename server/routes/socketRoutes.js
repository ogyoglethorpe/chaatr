const io = require('socket.io');

module.exports = (server) => {
  const socketIo = io(server);

  socketIo.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });

    socket.on('message', (data) => {
      console.log('Message received:', data);
      socket.broadcast.emit('new_message', data);
    });
  });

  return socketIo;
};