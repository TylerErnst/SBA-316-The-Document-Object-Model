
let canvasState = true;
let color = '#FF0000';

// Cache at least one element using selectElementById.
const canvas = document.getElementById('canvas');
const title = document.getElementById('title');

const pixelWidthBox = document.getElementById('width');
const pixelHeightBox = document.getElementById('height');
// Cache at least one element using querySelector or querySelectorAll.
const inpColor = document.querySelector('#inp-c');

// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
const clearButton = colorSelect.lastElementChild;
const darkButton = document.getElementById('darkButton')
const resolutionButton = document.getElementById('resolutionButton');
const maxResolutionButton = resolution.lastElementChild;



//Initial setup

//Default resolution values
let resoultionWidth = 400;
let resoultionHeight = 400;
//default pixel size
let pixelSize = 10;
//calculate pixels needed to fill canvas using resolution height and width
let pixels = (resoultionHeight/pixelSize) * (resoultionWidth/pixelSize);
//Create Canvas
setResolution(resoultionWidth, resoultionHeight);








// Iterate over a collection of elements to accomplish some task.
//          Radio buttons?
//          Bubble?
//      Determine if there is any color in any div (does an image of some kind exist)
//      Warn user if about to clear

function checkCanvasIfEmpty (canvas){
    let child=canvas.firstElementChild
    while (child != null){
        //console.log(child);
        if (child.style.backgroundColor !== ""){
            return false
        }
        child = child.nextElementSibling;
    }
    return true;
}


// Create at least one element using createElement.
// Use appendChild and/or prepend to add new elements to the DOM.
function  createCanvas(canvas, pixelCount){
    for (let i = 0; i < pixelCount; i++){
        let newDiv = document.createElement("divp");
        canvas.appendChild(newDiv);
    }
}

function  clearCanvas(canvas, pixelCount){
    
    //Check if canvas is not empty
    console.log(!checkCanvasIfEmpty(canvas));
    if (!checkCanvasIfEmpty(canvas)){
        if (!confirm('Canvas is not empty, proceeding will clear. Continue?')){
            console.log(`Don't Delete`);
            return false;
        }else{
            console.log(`delete`);
        }
    }
    canvas.innerHTML = '';
    createCanvas(canvas,pixelCount);
    return true;
}


// Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.


// Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
// Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
darkButton.addEventListener("click", (e) => {
    e.stopPropagation();
    document.body.classList.toggle("theme-dark");
    console.log('toggle')
  });

canvas.addEventListener("mouseover", (event) => {
    if (event.target != canvas && canvasState == true){
        event.target.style.backgroundColor = color;
    }
});

canvas.addEventListener("click", (event) => {
    canvasState = !canvasState;
});

inpColor.addEventListener("change", (event) => {
    color = event.target.value;
});
  
// Modify at least one attribute of an element in response to user interaction.
clearButton.addEventListener("click", (event) => {
    let height = canvas.style.height.replace(/[^0-9]/g, '');
    let width = canvas.style.width.replace(/[^0-9]/g, '');
    setResolution (width, height);
});
// Register at least two different event listeners and create the associated event handler functions.
//          See above 2+

// Use at least two Browser Object Model (BOM) properties or methods. done
//      Max resoultion of canvas
//      screen.availWidth
//      screen.availHeight
maxResolutionButton.addEventListener("click", (event) => {
    let width = screen.availWidth * .9;
    let height = screen.availHeight * .7;
    setResolution(width, height);    
});

// Include at least one form and/or input with HTML attribute validation. done
// Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
// Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
// Commit frequently to the git repository.
// Include a README file that contains a description of your application.
// Level of effort displayed in creativity, presentation, and user experience.





function setResolution (width, height){
    //Using default size of 10 for pixels
    let pixelSize = 10;

    //Prevent resolution from going over max size
    if (width > (screen.availWidth * .9)){
        width = screen.availWidth * .9;
    }
    if (height > (screen.availHeight * .7)){
        height = screen.availHeight * .7
    }

    //Round width & height to fit pixel size
    width = Math.round(width);
    width -= width % pixelSize;
    height = Math.round(height);
    height -= height % pixelSize;

    let pixels = (width/pixelSize) * (height/pixelSize);
    if (clearCanvas(canvas, pixels)){
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        
        pixelWidthBox.value = width;
        pixelHeightBox.value = height;
    }
}



//Ask user for new resolution
//Form with submit event
//Check for correct input (number) -- done with input type
//adjust to be a multiple of pixel size
resolutionButton.addEventListener("click", (event) => {

    resoultionWidth = pixelWidthBox.value;
    resoultionHeight = pixelHeightBox.value;
    // let pixels = (resoultionHeight/pixelSize) * (resoultionWidth/pixelSize);
    // canvas.innerHTML = '';
    setResolution(resoultionWidth, resoultionHeight);
});











