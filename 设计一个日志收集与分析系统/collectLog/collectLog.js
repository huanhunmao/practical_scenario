const { Kafka } = require('kafkajs');

// 创建 Kafka 客户端实例
const kafka = new Kafka({
  clientId: 'log-collector',
  brokers: ['localhost:9092'] // Kafka 服务器地址
});

// 创建生产者实例
const producer = kafka.producer();

// 日志收集函数
async function collectAndSendLog(logData) {
  try {
    // 发送日志数据到 Kafka
    await producer.send({
      topic: 'logs-topic', // Kafka 主题名称
      messages: [
        { value: JSON.stringify(logData) } // 将日志数据转换成 JSON 字符串
      ]
    });
    console.log('Log sent successfully:', logData);
  } catch (error) {
    console.error('Error sending log:', error);
  }
}

// 模拟 app-server-1 产生日志数据
setInterval(() => {
  const logData = {
    timestamp: Date.now(),
    message: 'This is server1 log message',
    level: 'INFO',
    source: 'app-server-1'
  };
  collectAndSendLog(logData);
}, 5000); // 每隔 5 秒产生一条日志

// 模拟 app-server-2 产生日志数据
setInterval(() => {
    const logData = {
      timestamp: Date.now(),
      message: 'This is server2 log message',
      level: 'warning',
      source: 'app-server-2'
    };
    collectAndSendLog(logData);
  }, 3000); // 每隔 3 秒产生一条日志

// 连接 Kafka 服务器并启动生产者
async function startProducer() {
  try {
    await producer.connect();
    console.log('Producer connected to Kafka server');
  } catch (error) {
    console.error('Error connecting to Kafka server:', error);
  }
}

// 启动生产者
startProducer();
