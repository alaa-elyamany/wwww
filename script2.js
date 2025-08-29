//array of object of products

var product = [
    {image:"blouse1.png",name:"Apple Green Blouse",price:"450L.E",group:"tops"},
    {image:"blouse2.png",name:"Mint-Green Blouse",price:"400L.E",group:"tops"},
    {image:"blouse3.png",name:"Baby Blue Blouse",price:"450L.E",group:"tops"},
    {image:"dress1.jpg",name:"Green Dress",price:"600L.E",group:"dresses"},
    {image:"dress2.jpg",name:"Floral-Black Dress",price:"700L.E",group:"dresses"},
    {image:"dress3.jpg",name:"Potrol Dress",price:"550L.E",group:"dresses"},
    {image:"dress4.jpg",name:"Royal Dress",price:"800L.E",group:"dresses"},
    {image:"dress5.webp",name:"Black Dress",price:"600L.E",group:"dresses"},
    {image:"jeans1.webp",name:"Copper-Brown Jeans",price:"400L.E",group:"bottoms"},
    {image:"jeans3.jpg",name:"Charcoal-Black Jeans",price:"400L.E",group:"bottoms"},
    {image:"skirt1.png",name:"Light-Beige Skirt",price:"550L.E",group:"bottoms"},
    {image:"skirt3.png",name:"Black Skirt",price:"350L.E",group:"bottoms"},
    {image:"skirt2.jpg",name:"Navy-Blue Skirt",price:"450L.E",group:"bottoms"},
    {image:"t-shirt2.jpg",name:"Gray T-shirt",price:"250L.E",group:"tops"},
    {image:"t-shirt1.png",name:"White T-shirt",price:"300L.E",group:"tops"},
    {image:"access1.png",name:"Blue Accessiaress",price:"200L.E",group:"access"},
    {image:"access2.png",name:"Pink Accessiaress",price:"200L.E",group:"access"},
    {image:"access3.png",name:"Silver Accessiaress",price:"200L.E",group:"access"},
    {image:"bag3.png",name:"Light-Beige Bag",price:"350L.E",group:"access"},
    {image:"bag1.webp",name:"Brown Bag",price:"350L.E",group:"access"},
    {image:"bag2.webp",name:"Haven Bag",price:"450L.E",group:"access"},
    {image:"cap1.webp",name:"Sky Blue Cap",price:"100L.E",group:"access"},
    {image:"cap2.webp",name:"Black Cap",price:"100L.E",group:"access"},
    {image:"hat2.webp",name:"Light-Beige Hat",price:"150L.E",group:"access"},
    {image:"hat1.webp",name:"White Hat",price:"150L.E",group:"access"},
    {image:"heels1.webp",name:"Black Heels",price:"350L.E",group:"access"},
    {image:"heels2.png",name:"Coffee Heels",price:"300L.E",group:"access"},
    {image:"sport1.jpg",name:"White Sports",price:"300L.E",group:"access"},
];

localStorage.setItem("prod", JSON.stringify(product));

var logout_button=document.getElementById("logout_button");
if(logout_button){
  logout_button.addEventListener("click",function(){
    Swal.fire({
      title: "Are you sure?",
      text: "You will exit the website",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "rgb(244, 142, 246)",
      cancelButtonColor: "rgba(247, 213, 126, 1)",
      confirmButtonText: "Yes, exit!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Exit!",
          text: "You have exited.",
          icon: "success"
        });
        location.href="index.html";
      }
    });
  });
}

var container=document.getElementById("product_container");

function display(){
  let arr = JSON.parse(localStorage.getItem("prod")) || [];
  if(container){
    container.innerHTML="";
    arr.forEach((products,i)=>{
      container.innerHTML+=`
        <div class="col-xxl-3 col-lg-4 col-md-6 col-sm-12 pt-5 ">
          <div class="card shadow" style="width: 18rem;">
            <div class="zoom"><img src="${products.image}" class="card-img-top" alt="${products.name}"></div>
            <div class="card-body text-start">
              <h5 class="card-title">${products.name}</h5>
              <p class="card-text">Price: ${products.price}</p>
              <a class="btn1 text-white rounded-pill button_add">Add to Cart</a>
              <a class="btn2 text-white rounded-pill button_remove">Remove</a>
            </div>
          </div>
        </div>`;
    });
  }
}

var form_addproducts=document.getElementById("form_add");
if(form_addproducts){
  form_addproducts.addEventListener ("submit",function(e){
    e.preventDefault();
    let image=document.getElementById("image").value;
    let name=document.getElementById("productName").value;
    let price=document.getElementById("productPrice").value;
    let group=document.getElementById("productGroup").value;
    let arr = JSON.parse(localStorage.getItem("prod")) || [];
    arr.push({image,name,price,group});
    localStorage.setItem("prod",JSON.stringify(arr));
    display();
  });
}

document.addEventListener("DOMContentLoaded", function(){
  display();

  let cartElement = document.getElementById("counter");
  let cartnum = parseInt(localStorage.getItem("cartcounter")) || 0;
  if(cartElement){ cartElement.textContent = cartnum; }

  if(container){
    container.querySelectorAll(".card").forEach(card=>{
      let added = false;
      let addBtn = card.querySelector(".button_add"); 
      let removeBtn = card.querySelector(".button_remove"); 

      addBtn.addEventListener("click", function(){
        Swal.fire({
          text: "You will add it to the cart!",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "rgb(244, 142, 246)",
          cancelButtonColor: "rgba(247, 213, 126, 1)",
          confirmButtonText: "Yes, add it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({ title:"Add", text:"You add it successfully", icon:"success"});
            if(!added){ 
              cartnum++; 
              if(cartElement){ cartElement.textContent = cartnum; }
              localStorage.setItem("cartcounter", cartnum);
              added = true;
            }
          }
        });
      });

      removeBtn.addEventListener("click", function(){
        Swal.fire({
          text: "You will delete it from the cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "rgb(244, 142, 246)",
          cancelButtonColor: "rgba(247, 213, 126, 1)",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({ title:"Deleted!", text:"You deleted it successfully.", icon:"success"});
            if(added && cartnum > 0){ 
              cartnum--;
              if(cartElement){ cartElement.textContent = cartnum; }
              localStorage.setItem("cartcounter", cartnum);
              added = false;
            }
          }
        });
      });

    });
  }
});



