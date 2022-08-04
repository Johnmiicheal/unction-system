const express = require('express');
const app = express();
const PORT = 4000;
const http = require('http').Server(app);
const cors = require('cors');
const sock = require('socket.io')(http, {
	cors: {
		origin: "http://localhost:3000"
	}
});

app.use(cors());
sock.on('connection', (socket) => {
	console.log(`🤟: ${socket.id} user just connected!`);
	socket.on('disconnect', () => {
		console.log('😭: We have lost a comrade');
	});
});

app.get('/api'. (req, res) => {
	res.json({
		message: 'Welcome to Unction Bidding Platform',
	)};
});

http.listen(PORT, () => {
	console.log(`[ Listening on ${PORT} ]`);
});
