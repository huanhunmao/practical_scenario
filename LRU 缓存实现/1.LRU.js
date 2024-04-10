// **实现一个简易的LRU缓存**：
//    设计并实现一个`LRUCache`类，给定一个固定大小的缓存，并支持`get(key)`和`put(key, value)`方法。当缓存满时，自动移除最近最少使用的项

class LRUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.cache = new Map()
    }

    get(key){
        if(this.cache.has(key)){
            // 将命中的项移到最前面，表示最近使用过
            const value = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, value)
            return value
        }else{
            // 如果缓存中没有对应的值，则返回-1
            return -1 
        }
    }

    put(key, value){
        if(this.cache.has(key)){
            // 如果缓存中已经存在该项，更新值，并移到最前面
            this.cache.delete(key)
        }else if(this.cache.size >= this.capacity){
            // 如果缓存满了，删除最久未使用的项（最后一项）
            const keysIterator = this.cache.keys()
            const oldestKey = keysIterator.next().value

            this.cache.delete(oldestKey)
        }

        this.cache.set(key,value)
    }
}


// 示例使用
const lruCache = new LRUCache(2); // 缓存容量为2

lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1));    // 返回 1
lruCache.put(3, 3);               // 移除 key 2
console.log(lruCache.get(2));    // 返回 -1 (未找到)
lruCache.put(4, 4);               // 移除 key 1
console.log(lruCache.get(1));    // 返回 -1 (未找到)
console.log(lruCache.get(3));    // 返回 3
console.log(lruCache.get(4));    // 返回 4