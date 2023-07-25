const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("ul.nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.add("active");
    navMenu.classList.add("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classlist.remove("active");
        navMenu.classlist.remove("active");
    }))

// Load your images on page-load
function preloader() {
    const imagesList = [
      "./images/img-1.jpg",
      "./images/img-2.jpg",
      "./images/img-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
      images[i] = new Image();
      images[i].src = imagesList[i];
    }
  
    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
  };
  window.addEventListener("load", preloader);
  
//get all buttons in node list

let btn = document.querySelectorAll("button");

  // Resource object that stores the dynamic content

  let solutionsData = {
    solution1: {
      headingContent: "Solar Panels Installation",
      imgUrl: "./images/img-1.jpg",
      imgAlt: "Solar Panels Installation",
      bodyText: "Harness the power of the sun with our affordable solar panels installation service. Reduce your energy bills and make your home eco-friendly."
    },
    solution2: {
      headingContent: "Wind Turbine Energy",
      imgUrl: "./images/img-2.jpg",
      imgAlt: "Wind Turbine Energy",
      bodyText: "Get clean and renewable energy from wind turbines. We offer efficient and cost-effective wind energy solutions for your sustainable energy needs."
    },
    solution3: {
      headingContent: "Energy-Efficient Appliances",
      imgUrl: "./images/img-3.jpg",
      imgAlt: "Energy-Efficient Appliances",
      bodyText: "Upgrade to energy-efficient appliances that save money on electricity bills while reducing your carbon footprint. Our solutions make green energy affordable for all."
      
    }
  };
   
  let contentContainer = document.querySelector(".content-container");

    // Create the HTML with the data
    let htmlContent = `
    <h1>${solutionsData.solution1.headingContent}</h1>
    <img src="${solutionsData.solution1.imgUrl}" alt="${solutionsData.solution1.imgAlt}" class="float"> 
    <p>${solutionsData.solution1.bodyText}</p>
  `;

  contentContainer.innerHTML = htmlContent;

  function handleSelection(event) {

    
    let currentItem = event.target;

    for (let i = 0; i < btn.length; i++){
        if(btn[i].hasAttribute("id")){
            btn[i].removeAttribute("id");
        }
    }
  
    // Get the index of the clicked button
    currentItem.setAttribute("id", "active-button");
    
    if (btn[0].hasAttribute("id")){
        contentContainer.innerHTML = `<h1>${solutionsData.solution1.headingContent}</h1>
        <img src="${solutionsData.solution1.imgUrl}" alt="${solutionsData.solution1.imgAlt}" class="float">
        <p>${solutionsData.solution1.bodyText}</p>`;
    } else if (btn[1].hasAttribute("id")){
        contentContainer.innerHTML = `<h1>${solutionsData.solution2.headingContent}</h1>
        <img src="${solutionsData.solution2.imgUrl}" alt="${solutionsData.solution2.imgAlt}" class="float">
        <p>${solutionsData.solution2.bodyText}</p>`;
    } else if (btn[2].hasAttribute("id")){
        contentContainer.innerHTML = `<h1>${solutionsData.solution3.headingContent}</h1>
        <img src="${solutionsData.solution3.imgUrl}" alt="${solutionsData.solution3.imgAlt}" class="float">
        <p>${solutionsData.solution3.bodyText}</p>`;
    } else {
        console("INVALID-BUTTON")
    }
}
    // Get the data from the resource object
   // const { headingContent, bodyText, imgUrl, imgAlt } = solutionsData[`solution${index + 1}`];
  

  
  // Register all buttons to click event
  //buttons.forEach(button => {
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', handleSelection);
    }

  // Load the initial content (solution1) on page load
  handleSelection({ target: buttons[0] });

  
  