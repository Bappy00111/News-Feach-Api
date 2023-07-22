const fechCatagore = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => showCataGores(data.data.news_category))
}

const showCataGores = (data) =>{
    // all catagores link 
    const catagoresContainer = document.getElementById('catagores-container');
    data.forEach(singleData => {
        console.log(singleData.category_name)
        catagoresContainer.innerHTML += `
        <a class="nav-link" href="#">${singleData.category_name}</a>
        `
        // const div = document.createElement('div')
        // div.innerHTML = `
        // <a class="nav-link" href="#">${singleData.category_name}</a>
        // `;
        // catagoresContainer.appendChild(div)

        
    });
    
}
// fechCatagore()