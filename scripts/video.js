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


loadCategories()
