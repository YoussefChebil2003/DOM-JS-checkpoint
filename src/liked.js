let likedBasket = JSON.parse(localStorage.getItem("likedItems")) || []
let basket = JSON.parse(localStorage.getItem("data")) || []

let likedCart = document.getElementById("liked-cart");
let label = document.getElementById("label")

let calculation = () => { 
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y, 0);
    console.log(basket);
}

calculation();

let generateLikedItems = () => {
    if(likedBasket.length!=0){
        console.log("hello");
        return(likedCart.innerHTML = likedBasket.map((x)=>{
            console.log("hi");
            let search = shopItemsData.find((y)=>y.id === x.id) || [];
            let {id, img, name, price} = search;
            return `
            <div class="liked-item">
                <img width="150" src=${img}>
                <div class="details">
                    <div class="liked-title-price-x">
                        <h4 class="liked-title-price">
                            <p>${name}</p>
                            <p class="cart-item-price">$ ${price}</p>
                        </h4>
                        <i onclick="removeItem(${id})" class="bi bi-heart-fill"></i>
                    </div> 
                </div>
            </div>
        `;
        }).join(""));
    }
    else{
        console.log("bye");
        likedCart.innerHTML= ``;
        label.innerHTML = `
            <h2>No items liked</h2>
            <a href="clothes.html">
                <button class = "clothes-btn">Back to the Mall</button>
            </a>
        `
    }
}

generateLikedItems();

let removeItem = (id) =>{
    console.log("done");
    let selectedItem = id;
    let search = likedBasket.find((x)=> x.id === selectedItem.id);
    search.liked = false;
   
    likedBasket = likedBasket.filter((x)=>x.liked !==false);
    localStorage.setItem("likedItems", JSON.stringify(likedBasket));
   
    generateLikedItems();
}