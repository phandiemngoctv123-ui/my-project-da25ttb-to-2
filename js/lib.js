//Khai báo một đối tượng
const product = {
    id:"1",
    name:"Tôm hùm Alaska",
    price:500000,
    description:"Siêu ngon",
    image:"../assets/images/tom1.jpg",
    link:"chi-tiet.html"
};
const products = [
    {
    id:"1",
    name:"Tôm hùm Alaska",
    price:500000,
    description:"Siêu ngon",
    image:"../assets/images/tom1.jpg",
    link:"chi-tiet.html?id=1"
    },

    {
    id:"2",
    name:"Cua hoàng đế",
    price:3000000,
    description:"Siêu bổ",
    image:"../assets/images/cua1.jpg",
    link:"chi-tiet.html?id=2"
    },

    {
    id:"3",
    name:"Cải bắc thảo",
    price:30000,
    description:"Siêu sạch",
    image:"../assets/images/caithao1.jpg",
    link:"chi-tiet.html?id=3"
    }
];


function inBCC(n)
{
    let result = "";
    let i = 1;
    while(i<=10)
    {
        result += `${n} x ${i} = ${n*i} <br>`;
        i++;
    }
        document.getElementById("result").innerHTML = result;
}

function addItem(name, price, description, link, image)
{
    const item = document.createElement("div");
    item.setAttribute("class", "container-item");

    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "container-image");

    const imageProduct = document.createElement("img");
    imageProduct.setAttribute("src", image);
    imageProduct.setAttribute("alt", name);
    imageProduct.style.width = "100%";
    imageProduct.style.maxWidth = "200px";

    containerImage.appendChild(imageProduct);

    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "container-info");

    // Tên sản phẩm
    const nameProduct = document.createElement("h3");
    nameProduct.innerHTML = name;

    // Giá
    const priceProduct = document.createElement("p");
    priceProduct.innerHTML = price;

    // Mô tả
    const descProduct = document.createElement("p");
    descProduct.innerHTML = description;

    // Link
    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", link);

    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(priceProduct);
    containerInfo.appendChild(descProduct);
    containerInfo.appendChild(linkProduct);

    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    document.getElementById("container-product-list")
            .appendChild(item);
}


function addItemV2 (obj)
{
const list = document.getElementById("product-list") ;
list.innerHTML +=`
<div class=" col ">
    <div class="card product-item" >
        <div class = "product-image">
            <img class="card-img-top" src="${obj.image}" alt="${obj.name}">
        </div><div class="card-body bg-light product-info">
             <h4 class = "card-title">${obj.name}</h4>
            <h5 class = "card-text">${obj.price}</h5>
            <p class = "card-text" >${obj.description}</p>
            <a class = "btn btn-info" href = "${obj.link}">Xem chi tiết</a>
         </div>
    </div>
</div>
`;
}

function loadAllProducts(array)
{
    let i = 0;

    while(i < array.length)
    {
        addItemV2(array[i]);
        i++;
    }
}