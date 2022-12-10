let shop = document.getElementById("shop");

let shopItemsData = [{
    id:"0001",
    name:"White T-Shirt",
    price: 10,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "src/images/items/tshirt1.jpg"
},{
    id:"0002",
    name:"Green T-Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "src/images/items/tshirt2.jpg"
},{
    id:"0003",
    name:"Red T-Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "src/images/items/tshirt4.jpg"
},{
    id:"0004",
    name:"Black T-Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "src/images/items/tshirt3.jpg"
}]
 
console.log(shop)

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let{id,name,price,desc,img} = x;
        return `
        <div id=product-id-${id} class="clothes-content">
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
                    <i class="bi bi-dash-square"></i>
                    <div id=${id} class="nb-items">0</div>
                    <i class="bi bi-plus-square"></i>
                </div>                   
            </div>
        </div>
        `
    }).join(""));
};

generateShop();

