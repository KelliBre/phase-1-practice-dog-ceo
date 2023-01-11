console.log('%c HI', 'color: firebrick')

function getDogImg (){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then(response => response.json())
    .then(response => {
        const dogContainer = document.getElementById("dog-image-container");
        response.message.map(url =>{
            const img = document.createElement("img");
            img.src = url;
            dogContainer.append(img);
        
        })
    });
    
}

function getAllDogBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
    .then(response => response.json())
    .then(response => {
        console.log("All Breeds", response.message);
        const dogList = document.getElementById("dog-breeds");
        const keys = Object.keys(response.message);
        console.log(keys);
        keys.map(breed => {
            const li = document.createElement("li");
            li.textContent = breed;
            dogList.append(li);
        })
    })


}
getAllDogBreeds();
getDogImg();