// 构建一个图片懒加载组件
// 设计一个前端组件，用于在长列表中实现图片的懒加载功能，即滚动到可视区域时才加载相应的图片资源

// 滑动到位置后才会 请求图片  进行懒加载 （默认不加载 此处资源）  核心是 IntersectionObserver  用于监测元素是否进入视口

class LazyLoadImages{
    constructor(selector = '.lazy-load'){
        this.images = document.querySelectorAll(selector)
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
            root: null,
            rootMargin:'0px',
            threshold: 0.5 // 50%可见时触发加载
        })

        this.images.forEach(image => {
            this.observer.observe(image)
        })
    }

    handleIntersection(entries, observer){
        console.log('entries',entries); // [IntersectionObserverEntry, IntersectionObserverEntry]
        console.log('observer',observer); // IntersectionObserver {root: null, rootMargin: '0px 0px 0px 0px', thresholds: Array(1), delay: 0, trackVisibility: false, …}
        entries.forEach(entry => {
            // 图片进入视口，加载图片
            if(entry.isIntersecting){
                const image = entry.target
                const src = image.getAttribute('data-src')

                if(src){
                    image.setAttribute('src', src)
                }

                // 并停止观察
                observer.unobserve(image)
            }
        })
    }   
}

// 使用示例
const lazyLoad = new LazyLoadImages('.lazy-load');