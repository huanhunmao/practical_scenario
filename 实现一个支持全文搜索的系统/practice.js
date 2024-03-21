class DataBase{
   constructor(){
    this.data = {}
   }

   addDocument(id, content){
    this.data[id] = content
   }

   search(keyword){
    const result = []
    for(const [id, content] of Object.entries(this.data)){
        if(this.containKeyword(content, keyword)){
            result.push({
                id, 
                content
            })
        }
    }

    return result
   }

   containKeyword(content, keyword){
    return content.toLowerCase().includes(keyword.toLowerCase())
   }

   heightLight(content, keyword){
    const regx = new RegExp(keyword, 'gi')
    return content.replace(regx, '<strong>$&</strong>')
   }
}

const db = new DataBase()

db.addDocument(1,'hahhaha, Marxu')
db.addDocument(2,'hahhaha, Jerry')
db.addDocument(3,'hahhaha, Mark')

const keyword = 'Mark'
const res = db.search(keyword)
console.log('res',res); // res [ { id: '2', content: 'hahhaha, Jerry' } ]

res.forEach(res => {
    const heightLightRes = db.heightLight(res.content, keyword)
    console.log('heightLightRes',heightLightRes);
})