// 
let cancel = document.querySelector("#btn");
let noti = document.querySelector("#notify");

cancel.addEventListener("click", function () {
  noti.remove();
});

var btnn = document.getElementById("btnn");
var sidebar = document.getElementById("sidebar");
var cancell = document.getElementById("cancell");

btnn.addEventListener("click", function () {
  sidebar.classList.add("active"); // Show with slide
});

cancell.addEventListener("click", function () {
  sidebar.classList.remove("active"); // Hide with slide
});

// search
let search=document.getElementById("search")
let Productcontainer=document.getElementById("Productcontainer")
let productlist=Productcontainer.querySelectorAll("div")
console.log(productlist)

search.addEventListener("keyup",function(){
    let enteredvalue=event.target.value.toUpperCase()

    for(count=0; count<productlist.length; count=count+1){
        let productname=productlist[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            productlist[count].style.display="none"
        }else{
        productlist[count].style.display="block"

        }
    }
})



//select product
document.addEventListener("DOMContentLoaded", function () {
let summerCheckbox = document.getElementById("summer")
let partyCheckbox = document.getElementById("party")
let beachCheckbox = document.getElementById("beach")
let redCheckbox = document.getElementById("red")
let orangeCheckbox = document.getElementById("orange")
let blueCheckbox = document.getElementById("blue")
let newCheckbox = document.getElementById("new")
let oldCheckbox = document.getElementById("old")

let allImages = [
  document.getElementById("img1"),
  document.getElementById("img2"),
  document.getElementById("img3"),
  document.getElementById("img4"),
  document.getElementById("img5"),
  document.getElementById("img6"),
  document.getElementById("img7"),
  document.getElementById("img8"),
  document.getElementById("img9")
];

let checkboxMap = {
  summer: [0,5], 
  party: [1,4], 
  beach: [8,3],

  red: [2],
  orange: [7],
  blue: [6],

  new: [0,1,2,3],
  old: [4,5,6,7,8]
      
};

function updateVisibleImages() {
  let visibleIndices = new Set()

  if (summerCheckbox.checked) {
    checkboxMap.summer.forEach(index => visibleIndices.add(index))
  }

  if (partyCheckbox.checked) {
    checkboxMap.party.forEach(index => visibleIndices.add(index))
  }
   if (beachCheckbox.checked) {
    checkboxMap.beach.forEach(index => visibleIndices.add(index))
  }

  if (redCheckbox.checked) {
    checkboxMap.red.forEach(index => visibleIndices.add(index))
  }
    if (orangeCheckbox.checked) {
    checkboxMap.orange.forEach(index => visibleIndices.add(index))
  }
    if (blueCheckbox.checked) {
    checkboxMap.blue.forEach(index => visibleIndices.add(index))
  }

    if (newCheckbox.checked) {
    checkboxMap.new.forEach(index => visibleIndices.add(index))
  }
  if (oldCheckbox.checked) {
    checkboxMap.old.forEach(index => visibleIndices.add(index))
  }
  // Update visibility of images
  allImages.forEach((img, index) => {
    img.style.display = visibleIndices.size === 0 || visibleIndices.has(index)
      ? "block"
      : "none";
  });
}

summerCheckbox.addEventListener("click", updateVisibleImages)
partyCheckbox.addEventListener("click", updateVisibleImages)
beachCheckbox.addEventListener("click", updateVisibleImages)
redCheckbox.addEventListener("click", updateVisibleImages)
orangeCheckbox.addEventListener("click", updateVisibleImages)
blueCheckbox.addEventListener("click", updateVisibleImages)
newCheckbox.addEventListener("click", updateVisibleImages)
oldCheckbox.addEventListener("click", updateVisibleImages)
});
