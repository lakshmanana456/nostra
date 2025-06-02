// menu slide
     
var btnn = document.getElementById("btnn");
var sidebar = document.getElementById("sidebar");
var cancell = document.getElementById("cancell");

btnn.addEventListener("click", function () {
  sidebar.classList.add("active"); // Show with slide
});

cancell.addEventListener("click", function () {
  sidebar.classList.remove("active"); // Hide with slide
});

//arrival and most wanted

//selectiong new arrival element  
let arrival_btn1 = document.getElementById("arrival_btn1");
let new_arrivals1 = document.getElementById("new_arrivals");

arrival_btn1?.addEventListener("click", function () {
  let offset = 100; // height of your sticky navbar
  let sectionPosition = new_arrivals1.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({
    top: sectionPosition - offset,
    behavior: "smooth"
  });
});

//selectiong most wanted element
let wanted_btn1 = document.getElementById("wanted_btn1");
let most_wanted1 = document.getElementById("most_wanted");

wanted_btn1?.addEventListener("click", function () {
  most_wanted1.scrollIntoView({ behavior: "smooth" });
})

// 
let arrival_btn2 = document.getElementById("arrival_btn2");
let new_arrivals2 = document.getElementById("new_arrivals");

arrival_btn2?.addEventListener("click", function () {
  let offset = 100; // height of your sticky navbar
  let sectionPosition = new_arrivals2.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({
    top: sectionPosition - offset,
    behavior: "smooth"
  });
});

//selectiong most wanted element
let wanted_btn2 = document.getElementById("wanted_btn2");
let most_wanted2 = document.getElementById("most_wanted");

wanted_btn2?.addEventListener("click", function () {
  most_wanted2.scrollIntoView({ behavior: "smooth" });
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


//selecting advertisment elements
let cancel = document.querySelector("#btn");
let noti = document.querySelector("#notify");

cancel.addEventListener("click", function () {
  noti.remove();
});

// advertisment container
 var scrollContainer = document.querySelector(".image_container")
        var back_btn = document.getElementById("back_btn")
        var next_btn = document.getElementById("next_btn")

        back_btn.addEventListener("click", function () {
            scrollContainer.style.scrollBehavior = "smooth"
            let scrollPercentage = 1; 
            scrollContainer.scrollLeft -= scrollContainer.clientWidth * scrollPercentage
        })

        next_btn.addEventListener("click", function () {
            scrollContainer.style.scrollBehavior = "smooth"
            let scrollPercentage = 1; 
            scrollContainer.scrollLeft += scrollContainer.clientWidth * scrollPercentage
        })
        

  
