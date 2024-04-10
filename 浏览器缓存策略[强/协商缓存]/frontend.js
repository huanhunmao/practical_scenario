// 1、资源文件压缩和合并
//  示例：合并压缩后的CSS文件 
{/* <link rel="stylesheet" href="styles.min.css"> */}


{/* 2 使用 浏览器本地缓存  */}
// 使用localStorage存储数据
localStorage.setItem('key', 'value');
// 从localStorage读取数据
var data = localStorage.getItem('key');

// 3 资源文件的版本控制
//  示例：使用文件版本号 
// <link rel="stylesheet" href="styles.v2.css">

// 4 服务端渲染 
// 使用服务器端渲染或预渲染技术，将页面的HTML内容提前生成好，并通过HTTP响应头控制缓存，以提高页面加载速度和SEO效果
// 服务器端渲染示例（使用Next.js框架）
// 还有一个 getStaticProps
export async function getServerSideProps(context) {
    // 在此处进行服务器端数据获取和HTML渲染
    return {
      props: {
        // 传递给页面的数据
      }
    }
  }
  