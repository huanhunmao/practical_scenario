// 定义一个简单的树结构
const tree = {
    value: 'A',
    children: [
      {
        value: 'B',
        children: [
          { value: 'D', children: [] },
          { value: 'E', children: [] }
        ]
      },
      {
        value: 'C',
        children: [
          { value: 'F', children: [] },
          { value: 'G', children: [] }
        ]
      }
    ]
}

// 广度优先遍历函数
function breadthFirstTraversal(root, callback) {
    const queue = [root]; // 使用队列来存储待处理节点
  
    while (queue.length > 0) {
      const node = queue.shift(); // 取出队列头部的节点
  
      callback(node.value); // 处理当前节点
  
      // 将当前节点的子节点依次加入队列尾部
      if (node.children.length > 0) {
        node.children.forEach(child => {
          queue.push(child);
        });
      }
    }
  }  

breadthFirstTraversal(tree, value => console.log(value))