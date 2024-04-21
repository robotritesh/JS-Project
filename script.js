
// swiper

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//    parent data 

let parent = [
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/40256888_1-fresho-coriander-leaves-with-roots-enhances-flavour-of-the-dishes.jpg?tr=w-1920,q=80",
        name:"Coriander Leaves",
        Weight:"100 g",
        price:"₹6", 
        text:"Add"

    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/20001190_12-fresho-onion.jpg?tr=w-1920,q=80",
        name:"Onion",
        Weight:"500 g",
        price: "₹12.5",
        text:"Add"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/40320936_1-fresho-potato-fresh-crop.jpg?tr=w-1920,q=80",
        name:"Potato",
        Weight:"1 kg",
        price:"₹40",
        text:"Add"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000070_15-fresho-carrot-orange.jpg?tr=w-1920,q=80",
        name:"Carrot",
        Weight:"1 kg",
        price:"₹50",
        text:"Add"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000159_27-fresho-potato.jpg?tr=w-1920,q=80",
        name:"Potato",
        Weight:"1 kg",
        price:"₹39",
        text:"Add"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000142_17-fresho-ladies-finger.jpg?tr=w-1920,q=80",
        name:"Ledies'Fingers",
        Weight:"1 kg",
        price:"₹38",
        text:"Add"
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000097_19-fresho-coriander-leaves.jpg?tr=w-1920,q=80",
        name:"Coriander Leaves",
        Weight:"100 g",
        price:"₹5",
        text:"Add"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000103_16-fresho-cucumber.jpg?tr=w-1920,q=80",
        name:"Cucumber (Loose)",
        Weight:"500 g",
        price:"₹13",
        text:"Add"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/1228332_1-fresho-tomato-local.jpg?tr=w-1920,q=80",
        name:"Tomato - Local",
        Weight:"2 x 1 kg",
        price:"₹74",
        text:"Add"  
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000382_10-fresho-carrot-red.jpg?tr=w-1920,q=80",
        name:"Carrot - Red",
        Weight:"500 g",
        price:"₹18",
        text:"Add"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/40312600_2-fresho-tomato-hybrid.jpg?tr=w-1920,q=80",
        name:"Tomato - Hybrid",
        Weight:"250 g",
        price:"₹10.5",
        text:"Add"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/40089741_2-fresho-beans-haricot.jpg?tr=w-1920,q=80",
        name:"Beans - Haricot (Loose)",
        Weight:"1 kg",
        price:"₹116",
        text:"Add"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000069_20-fresho-capsicum-green.jpg?tr=w-1920,q=80",
        name:"Capsicum - Green (Loose)",
        Weight:"5oo g",
        price:"₹30",
        text:"Add"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000074_19-fresho-cauliflower.jpg?tr=w-1920,q=80",
        name:"Cauliflower",
        Weight:"500 g",
        price:"₹30",
        text:"Add"
        
    },{
        img:"https://www.bigbasket.com/media/uploads/p/m/20000979_12-fresho-palak-cleaned-without-roots.jpg?tr=w-1920,q=80",
        name:"Palak",
        Weight:"250 g",
        price:"₹15",
        text:"Add"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000045_18-fresho-beetroot.jpg?tr=w-1920,q=80",
        name:"Beetroot (Loose)",
        Weight:"1 kg",
        price:"₹48",
        text:"Add"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000668_12-fresho-cucumber-english.jpg?tr=w-1920,q=80",
        name:"Cucumber - English (Loose)",
        Weight:"1 kg",
        price:"₹55",
        text:"Add"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/50000513_3-fresho-chilli-green-organically-grown.jpg?tr=w-1920,q=80",
        name:"Chilli ",
        Weight:"500 g",
        price:"₹75",
        text:"Add"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000334_15-fresho-drumstickmoringa.jpg?tr=w-1920,q=80",
        name:"Drumstick/Moringa",
        Weight:"1 kg",
        price:"₹60",
        text:"Add"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000327_13-fresho-curry-leaves.jpg?tr=w-1920,q=80",
        name:"Curry Leaves",
        Weight:"1 kg",
        price:"₹60",
        text:"Add"
        
    },
]

let containar = document.querySelector("#containar3")

let inputBox = document.querySelector("#chilld2")

let searchBtn = document.querySelector("#chilld6")

function showData(arr){
    containar3.innerHTML = ""
    arr.forEach(function(ele){
        let separateDiv = document.createElement("div")
    
        let name = document.createElement("h4")
        name.innerHTML = ele.name
    
        let img = document.createElement("img")
        img.src = ele.img
    
        let Weight = document.createElement("p")
        Weight.innerHTML = ele.Weight
    
        let price = document.createElement("b")
        price.innerHTML = ele.price
    
        let text = document.createElement("h2")
        text.innerHTML = ele.text
    
        separateDiv.append(img, name, Weight, price,text)
        containar.append(separateDiv)
    
    })
    
}


function searchData(){
    let value = inputBox.value

    let narr = parent.filter(function(ele,i){
        return ele.name.toLowerCase() === value.toLowerCase()
    })

    if(narr.length>0){
        showData(narr)
    }
    else{
        containar3.innerHTML = "<h6>Product not found...</h6>"
    }
    
}

searchBtn.addEventListener("click", searchData)

showData(parent)