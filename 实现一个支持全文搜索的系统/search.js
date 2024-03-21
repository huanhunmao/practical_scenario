class Database {
    constructor() {
      this.data = {}; // 用于存储文档的对象
    }
  
    // 添加文档到数据库
    addDocument(id, content) {
      this.data[id] = content;
    }
  
    // 根据关键词进行全文搜索
    search(keyword) {
      const results = [];
      for (const [id, content] of Object.entries(this.data)) {
        if (this.containsKeyword(content, keyword)) {
          results.push({ id, content });
        }
      }
      return results;
    }
  
    // 判断文档内容是否包含关键词
    containsKeyword(content, keyword) {
      // 这里简单地使用字符串的 includes 方法来判断内容中是否包含关键词
      return content.toLowerCase().includes(keyword.toLowerCase());
    }
  
    // 高亮显示搜索结果中的关键词
    highlightKeyword(content, keyword) {
      // 使用正则表达式来替换匹配的关键词，这里简单地将匹配的关键词用 <strong> 标签包裹来实现高亮显示
      const regex = new RegExp(keyword, 'gi'); // 全局匹配 + 不区分大小写
      return content.replace(regex, '<strong>$&</strong>');
    }
  }
  
  // 创建数据库实例
  const db = new Database();
  
  // 添加一些示例文档
  db.addDocument(1, "This is a sample document for testing.");
  db.addDocument(2, "Another example document with some content.");
  db.addDocument(3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
  
  // 进行全文搜索
  const keyword = "sample";
  const searchResults = db.search(keyword);
  
  // 输出搜索结果并高亮显示关键词
  searchResults.forEach(result => {
    const highlightedContent = db.highlightKeyword(result.content, keyword);
    console.log(`Document ID: ${result.id}`);
    console.log(`Highlighted Content: ${highlightedContent}`);
  });
  