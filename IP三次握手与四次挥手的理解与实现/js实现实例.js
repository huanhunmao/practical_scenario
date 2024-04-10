// 模拟客户端和服务器
const client = {
    state: 'closed', // 初始状态为关闭
    sendSYN: function() {
        console.log('客户端发送SYN请求');
        this.state = 'SYN_SENT';
    },
    receiveSYNACK: function() {
        console.log('客户端收到SYN+ACK');
        this.state = 'ESTABLISHED';
    },
    sendACK: function() {
        console.log('客户端发送ACK确认');
        this.state = 'ESTABLISHED';
    },
    sendFIN: function() {
        console.log('客户端发送FIN请求');
        this.state = 'FIN_WAIT';
    },
    receiveFIN: function() {
        console.log('客户端收到FIN请求');
        this.state = 'CLOSE_WAIT';
    },
    sendACKFIN: function() {
        console.log('客户端发送ACK确认');
        this.state = 'CLOSED';
    }
};

const server = {
    state: 'closed', // 初始状态为关闭
    receiveSYN: function() {
        console.log('服务器收到SYN请求');
        this.state = 'SYN_RCVD';
    },
    sendSYNACK: function() {
        console.log('服务器发送SYN+ACK');
        this.state = 'ESTABLISHED';
    },
    receiveACK: function() {
        console.log('服务器收到ACK确认');
        this.state = 'ESTABLISHED';
    },
    receiveFIN: function() {
        console.log('服务器收到FIN请求');
        this.state = 'CLOSE_WAIT';
    },
    sendFIN: function() {
        console.log('服务器发送FIN请求');
        this.state = 'LAST_ACK';
    },
    receiveACKFIN: function() {
        console.log('服务器收到ACK确认');
        this.state = 'CLOSED';
    }
};

// 三次握手
client.sendSYN();
server.receiveSYN();
server.sendSYNACK();
client.receiveSYNACK();
client.sendACK();

// 四次挥手
client.sendFIN();
server.receiveFIN();
server.sendACK();
server.sendFIN();
client.receiveFIN();
client.sendACKFIN();
server.receiveACKFIN();
