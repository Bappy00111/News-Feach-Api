const fechCatagore = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => showCataGores(data.data.news_category))
}

const showCataGores = (data) =>{
    // all catagores link 
    const catagoresContainer = document.getElementById('catagores-container');
    data.forEach(singleData => {
        // console.log(singleData.category_id)
        catagoresContainer.innerHTML += `
        <a class="nav-link" href="#" onclick="fetchAllCatagore('${singleData.category_id}','${singleData.category_name}')">${singleData.category_name}</a>
        `
        // const div = document.createElement('div')
        // div.innerHTML = `
        // <a class="nav-link" href="#">${singleData.category_name}</a>
        // `;
        // catagoresContainer.appendChild(div)

        
    });
    
}

// fetch all news catagore 

const fetchAllCatagore = (category_id,category_name) =>{
   const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
   fetch(url)
   .then(res => res.json())
   .then(data => fetchAllShowCatagores(data.data,category_name))
}

const fetchAllShowCatagores = (datas,category_name) =>{
    console.log(datas)
    document.getElementById('news-counts').innerText = datas.length;
    document.getElementById('catagore-names').innerText = category_name;

    // datas.forEach(data =>{
     
    // })
}
// fechCatagore()