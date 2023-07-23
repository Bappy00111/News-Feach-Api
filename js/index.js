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
    // console.log(datas._id)
    const allNews = document.getElementById('all-news');
    allNews.innerHTML = " "
    document.getElementById('news-counts').innerText = datas.length;
    document.getElementById('catagore-names').innerText = category_name;

    datas.forEach(data =>{
        console.log(data._id)
     allNews.innerHTML += `
     <div class="card mb-3">
     <div class="row g-0">
       <div class="col-md-4">
         <img src="${data.image_url}" class="img-fluid rounded-start p-3" alt="...">
       </div>
       <div class="col-md-8 d-flex flex-column">
         <div class="card-body">
           <h5 class="card-title">${data.title}</h5>
           <p class="card-text">${data.details.slice(0,200)}......</p>
         </div>
         <div class=" d-flex  justify-content-around">
           <div class="d-flex gap-2">
           <img src="${data.author.img}" class="img-fluid  rounded-circle" alt="..." height="auto" width="40" >
              <div >
              <p class="mb-0">${data.author.name}</p>
              <p>${data.author.published_date}</p>
              </div>
           </div>
           <div class="d-flex align-items-center gap-2">
           <i class="fa-solid fa-eye"></i>
           <p class="mb-0">${data.total_view}</p>
           </div>
           <div class="d-flex align-items-center">
           <i class="fa-solid fa-star-half-stroke"></i>
           <i class="fa-regular fa-star"></i>
           <i class="fa-regular fa-star"></i>
           <i class="fa-regular fa-star"></i>
           <i class="fa-regular fa-star"></i>
           </div>
           <div class="d-flex align-items-center">
           <i class="fa-solid fa-arrow-right" onclick="NewsDetels('${data._id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>

           </div>
         </div>
       </div>
     </div>
   </div>
     `
    })
}

const NewsDetels = (news_id) =>{
  const url =`https://openapi.programming-hero.com/api/news/${news_id}`
  fetch(url)
  .then(res => res.json())
  .then(data => showNewsDeles(data.data[0]))

}

const showNewsDeles = (data) =>{
  console.log(data)
}
// fechCatagore()