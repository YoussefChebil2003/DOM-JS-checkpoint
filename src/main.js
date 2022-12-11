let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || []

console.log(shop)

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let{id,name,price,desc,img} = x;
        let search = basket.find((x)=>x.id === id) || [];
        return `
        <div id=product-id-${id} class="item">
            <div class="clothes-img">
                <img src=${img}>
            </div>
            <div class="clothes-description">
                <h3>${name}</h3>
                <p>${desc}</p>
            </div>
            <div class="clothes-price-quantity">
                <div class="price">
                    <h2>$ ${price}</h2>
                </div>
                <div class="clothes-quantity">
                    <i onclick="decrement(${id})" class="bi bi-dash-square"></i>
                    <div id=${id} class="nb-items">
                        ${search.item === undefined? 0: search.item}
                    </div>
                    <i onclick="increment(${id})" class="bi bi-plus-square"></i>
                </div>                   
            </div>
        </div>
        `
    }).join(""));
};

generateShop();

let increment = (id) =>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);
    
    if (search === undefined) {
        basket.push({
          id: selectedItem.id,
          item: 1,
        });
    }
    else{
        search.item ++;    
    }

    //console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) =>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);
    
    if (search === undefined) return;
    if(search.item === 0)
        return;
    else{
        search.item --;    
    }
    update(selectedItem.id);
    basket = basket.filter((x)=>x.item !==0);
    //console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));

};

let update = (id) =>{
    let search = basket.find((x)=> x.id === id);
    //console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => { 
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y, 0);
    console.log(basket);
}

calculation();