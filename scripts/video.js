// console.log('video is connected');

// 1. fetch, load and show categories on the html:

// create load categories 

const loadCategories = () => {
    // console.log('create load categories');

    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res =>res.json())
    .then(data => displayCategories(data.categories
    ))
    .catch(err => console.log(err))
}
const loadVideos = () => {
    // console.log('create load videos');

    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res =>res.json())
    .then(data => displayVideos(data.videos)) //function call display videos
    .catch(err => console.log(err))
}

// const cardDmo={
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

// display videos
const displayVideos=(videos) =>{
    // console.log(videos)
    const videoContainer=document.getElementById('videos');
    videos.forEach((video) =>{
        console.log(video)
        const card=document.createElement('div');
        card.classList='card card-compact';
        card.innerHTML=`
        <figure class='h-[200px]'>
    <img class='h-full w-full object-cover'
      src="${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div> 
    <img class="h-10 w-10 rounded-full object-cover" src="${video.authors[0].profile_picture}"/>
    </div>
    <div> 
    <h2 class="font-bold"> ${video.title} </h2>
    <div class="flex items-center gap-1"> 
    <p class="text-gray-400">${video.authors[0].profile_name}</p> 
    ${video.authors[0].verified===true? '<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />' : ''}
    </div>
    <p> </p>
    </div>
    </div>
  </div>
        
        `;
        videoContainer.append(card)
    })
}

// {category_id: '1001', category: 'Music'}

// create display categories

const displayCategories = (categories) => {

    const categoriesContainer=document.getElementById('categories');

    
  categories.forEach((item) => {
    console.log(item)

    // create a button:
    const button=document.createElement('button');
    button.classList='btn';
    button.innerText=item.category;
    
    // add btn to category container

    categoriesContainer.appendChild(button)
    
  });
}


loadCategories();
loadVideos();
