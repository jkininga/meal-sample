document.addEventListener("DOMContentLoaded", ()=>{

const existingList = document.getElementById("categories");
let mealCreationForm = document.getElementById("create-category-form");

//let catSubmit = document.getElementById("cat-submit")



fetch("http://localhost:3000/categories")
    .then((response)=>response.json())
    .then((mealsArray)=>{console.log(mealsArray)

    
     
        mealsArray.forEach(meal => {
        let listItem = document.createElement('li');
        listItem.innerText = meal["strCategory"];
        existingList.appendChild(listItem)

        let image = document.createElement('img');
        image.src = meal.strCategoryThumb;
        existingList.appendChild(image)

        let desc    = document.createElement("p");
        desc.innerText = meal.strCategoryDescription;
        existingList.appendChild(desc)

        
    });
    
    }) 




    mealCreationForm.addEventListener("submit", (event)=>{
           event.preventDefault();

    let catName = document.getElementById("cat-name").value;
    let catImage = document.getElementById("cat-image").value;
    let catDescr = document.getElementById("cat-descr").value;

 

    

    fetch("http://localhost:3000/categories/1678", {
        method: "PATCH",
        headers : {
            "Content-Type" : "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({
            "id" : "0625",
            "idCategory": "14",
        "strCategory": catName,
        "strCategoryThumb": catImage,
        "strCategoryDescription": catDescr 
        }) 
    
    
    })
    


})












})