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
  };


// 深度优先遍历函数
function depthFirstTraversal(node, callback) {
    callback(node.value); // 首先处理当前节点
  
    // 递归遍历当前节点的子节点
    if (node.children.length > 0) {
      node.children.forEach(child => {
        depthFirstTraversal(child, callback);
      });
    }
  }

// 测试深度优先遍历
  depthFirstTraversal(tree, value => console.log(value))