const menuData = [
    {
        label: 'home1',
        link: '/home1'
    },
    {
        label: 'products',
        children: [
            {
                label: 'elc',
                children: [
                    {
                        label: '1',
                        link: '/1'
                    },
                    {
                        label: '2',
                        link: '/2'
                    }
                ]
            }
        ]
    },
    {
        label: 'other',
        children: [
            {
                label: 'ppx',
                children: [
                    {
                        label: 'ppx1',
                        link: '/ppx1'
                    }
                ]
            }
        ]
    },
    {
        label: 'about',
        link: '/about'
    }
]


 function renderMenu(data, parent){
   const ul = document.createElement('ul');
   parent.appendChild(ul)

   data.forEach(item => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = item.label 

    if(item.link){
        link.href = item.link 
    }else{
        link.href = '#'
    }

    ul.appendChild(li)
    li.appendChild(link)

    if(item.children){
        renderMenu(item.children, li)
    }
   })
 }