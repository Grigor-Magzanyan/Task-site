var img = document.getElementById("carusel")

carusel_trans_time = "2s"
img.style.backgroundImage = `url(/img/nkar1.png)`

let allbtns = document.querySelectorAll(".nkar_btn")
allbtns.forEach(element => {
    element.onclick = () =>{
        allbtns.forEach(i => {
            i.style.backgroundColor = "#DCCDD0"    
        });
        img.style.transition = carusel_trans_time
        img.style.backgroundImage = `url(/img/${element.id}.png)`
        element.style.backgroundColor = "#9A5B6A"
    }
});

let wish = document.querySelectorAll(".wish")
wish.forEach(i => {
    i.onclick = () => {
        if (i.className == "fas fa-heart wish") {
            i.className = "far fa-heart wish"
        }
        else{
            i.className = "fas fa-heart wish"
        }
    }
})

let colors1 = document.querySelectorAll(".colors1")
colors1.forEach(element => {
    element.onclick = () =>{
        colors1.forEach(i => {
            i.style.borderBottom = "none"    
        });
        element.style.borderBottom = "2px solid #584C42"
    }
});
let colors2 = document.querySelectorAll(".colors2")
colors2.forEach(element => {
    element.onclick = () =>{
        colors2.forEach(i => {
            i.style.borderBottom = "none"    
        });
        element.style.borderBottom = "2px solid #584C42"
    }
});
let colors3 = document.querySelectorAll(".colors3")
colors3.forEach(element => {
    element.onclick = () =>{
        colors3.forEach(i => {
            i.style.borderBottom = "none"    
        });
        element.style.borderBottom = "2px solid #584C42"
    }
});
let colors4 = document.querySelectorAll(".colors4")
colors4.forEach(element => {
    element.onclick = () =>{
        colors4.forEach(i => {
            i.style.borderBottom = "none"    
        });
        element.style.borderBottom = "2px solid #584C42"
    }
});