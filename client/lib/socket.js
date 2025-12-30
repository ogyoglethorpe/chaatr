'use strict';

const io = require('socket.io-client');

class SocketClient {
    constructor(url) {
        this.socket = io(url);
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.socket.on('connect', () => {
            console.log('Connected to the server');
        });

        this.socket.on('disconnect', (reason) => {
            console.log(`Disconnected from the server: ${reason}`);
        });

        this.socket.on('error', (err) => {
            console.error('Socket error:', err);
        });
    }

    sendMessage(event, data) {
        this.socket.emit(event, data);
    }

    onMessage(event, callback) {
        this.socket.on(event, callback);
    }
}

module.exports = SocketClient;