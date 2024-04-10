server {
    listen 80;
    server_name example.com;
  
    root /path/to/your/root/directory;
  
    # 静态资源缓存配置
    location /static/ {
        # 7 天前缓存
      expires 7d;
    }
  
    # 动态内容路由，禁用强缓存，启用协商缓存
    location /news {
      add_header Cache-Control no-cache;
    }
  
    # 其他配置...
  }
  