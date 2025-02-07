function itemcreate(ui){
    let box= document.createElement("button"),
        item= document.createElement("div"),
        iname= document.createElement("div");
    box.classList.add("item");
    item.classList.add("item-book");
    iname.classList.add("item-title");
    if(ui.title&& ui.image){
        box.onclick= function(){
            document.location.href= ui.image.replace(/book.png+$/, "")+ "index.html";
        };
        iname.textContent= ui.title;
        item.style.backgroundImage= `url(${ui.image})`;
    }else{
        iname.textContent= "New Book";
    }
    box.appendChild(item);
    box.appendChild(iname);
    document.querySelector(".books-items").appendChild(box);
}