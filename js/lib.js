/*Mã nguồn javasript*/
function inBCC(n)
{
    let result = "";
    let i=1;
    while(i<=10)
    {
        result += `${n} x ${i} = ${n*i} <br>`;
        i++;
    }
    document.getElementById("result").innerHTML= result;
}

function addItem(name, price, description, link, image)
{
    //tạo khung chứa container-item
    const item = document.createElement("div");//<div></div>
    item.setAttribute("class","container-item");
    
    //tạo khung chứa container-image
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "container-image");

    //tạo ảnh
    const imageProduct = document.createElement("img");
    imageProduct.setAttribute("src", image);//truyền tham số image
    imageProduct.setAttribute("alt", name);
    imageProduct.setAttribute("style", "width:100%; max-width:150px;");

    //chèn đối tượng vào khung chứa ảnh
    containerImage.appendChild(imageProduct);

    //tạo khung chứa container-info
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute = ("class", "container-info");

    //tạo 4 đứa con
    const nameProduct = document.createElement("p");
    nameProduct.innerHTML = name;

    const priceProduct = document.createElement("p");
    priceProduct.innerHTML = price;

    const descProduct = document.createElement("p");
    descProduct.innerHTML = description;

    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", link);

    //thêm con vào khung chứa
    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(priceProduct);
    containerInfo.appendChild(descProduct);
    containerInfo.appendChild(linkProduct);

    //đưa khung ảnh vào item
    item.appendChild(containerImage);

    //đưa khung info vào item
    item.appendChild(containerInfo);
   
    //đưa khung chứa container-product-list vào container
    document.getElementById("container-product-list").appendChild(item);
}