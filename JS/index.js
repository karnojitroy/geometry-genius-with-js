// =============================
//        using Hard code
// =============================

// calculate Triangle area
// function calculateTriangleArea() {
//     // input base
//     const triangleBaseInput = document.getElementById('triangle-base-input');
//     const triangleBaseNumber = triangleBaseInput.value;
//     const tBase = parseFloat(triangleBaseNumber);
//     // assign value 0 after clicking on calculate button
//     triangleBaseInput.value = '';
//     // input height
//     const triangleHeightInput = document.getElementById('triangle-height-input');
//     const triangleHeightNumber = triangleHeightInput.value;
//     const tHeight = parseFloat(triangleHeightNumber);
//     triangleHeightInput.value = '';
//     // calculate triangle area
//     const triangle_Area = 0.5 * tBase * tHeight;
//     // Display input base, height area after clicking on calculate button
//     const triangleBase = document.getElementById('triangle-base');
//     triangleBase.innerText = tBase;
//     const triangleHeight = document.getElementById('triangle-height');
//     triangleHeight.innerText = tHeight;
//     const triangleArea = document.getElementById('triangle-area');
//     triangleArea.innerText = triangle_Area.toFixed(2);
//     const displayBaseHeightAreaContainer = document.getElementById('triangle-b-h-area-display-container');
//     if (triangleArea !== null) {
//         displayBaseHeightAreaContainer.removeAttribute('hidden');
//     }
//     else {
//         displayBaseHeightAreaContainer.setAttribute('hidden', true);
//     }
// }
// Calculate Rectangle Area
// function calculateRectangleArea() {
//     // input width
//     const rectangleWidthInput = document.getElementById('rectangle-width-input');
//     const rectangleWidthNumber = rectangleWidthInput.value;
//     const rWidth = parseFloat(rectangleWidthNumber);
//     rectangleWidthInput.value = '';
//     // input rectangle length
//     const rectangleLengthInput = document.getElementById('rectangle-length-input');
//     const rectangleLengthNumber = rectangleLengthInput.value;
//     const rLength = parseFloat(rectangleLengthNumber);
//     rectangleLengthInput.value = '';
//     // rectangle area
//     const rectangle_area = rWidth * rLength;
//     // Display input width, Length and area after clicking on calculate button
//     const rectangleWidth = document.getElementById('rectangle-width');
//     rectangleWidth.innerText = rWidth;
//     const rectangleLength = document.getElementById('rectangle-length');
//     rectangleLength.innerText = rLength;
//     const rectangleArea = document.getElementById('rectangle-area');
//     rectangleArea.innerText = rectangle_area.toFixed(2);

//     const displayRectangleWidthLengthArea = document.getElementById('rectangle-w-l-area-display-container');
//     if (rectangleArea !== null) {
//         displayRectangleWidthLengthArea.removeAttribute('hidden');
//     }
//     else {
//         displayRectangleWidthLengthArea.setAttribute('hidden', true);
//     }
// }
// calculate Parallelogram Area
// function calculateParallelogramArea() {
//     // input base
//     const parallelogramBaseInput = document.getElementById('parallelogram-base-input');
//     const parallelogramBaseNumber = parallelogramBaseInput.value;
//     const pBase = parseFloat(parallelogramBaseNumber);
//     parallelogramBaseInput.value = '';
//     // input height
//     const parallelogramHeightInput = document.getElementById('parallelogram-height-input');
//     const parallelogramHeightNumber = parallelogramHeightInput.value;
//     pHeight = parseFloat(parallelogramHeightNumber);
//     parallelogramHeightInput.value = '';
//     //Parallelogram area calculation
//     const parallelogram_area = pBase * pHeight;
//     // Display input base, Height and area after clicking on calculate button
//     const parallelogramBase = document.getElementById('parallelogram-base');
//     parallelogramBase.innerText = pBase;
//     const parallelogramHeight = document.getElementById('parallelogram-height');
//     parallelogramHeight.innerText = pHeight;
//     const parallelogramArea = document.getElementById('parallelogram-area');
//     parallelogramArea.innerText = parallelogram_area.toFixed(2);

//     const displayParallelogramBaseHeightArea = document.getElementById('parallelogram-b-h-area-display-container');
//     if (parallelogramArea !== null) {
//         displayParallelogramBaseHeightArea.removeAttribute('hidden');
//     }
//     else {
//         displayParallelogramBaseHeightArea.setAttribute('hidden', true);
//     }
// }

// Calculate Rhombus area
function rhombusArea() {
    // input d1
    const rhombusD1Input = document.getElementById('rhombus-d1-input');
    const rhombusD1Number = rhombusD1Input.value;
    const d1 = parseFloat(rhombusD1Number);
    rhombusD1Input.value = '';
    // input d2
    const rhombusD2Input = document.getElementById('rhombus-d2-input');
    const rhombusD2Number = rhombusD2Input.value;
    const d2 = parseFloat(rhombusD2Number);
    rhombusD2Input.value = '';
    // area calculation
    const rhombus_area = 0.5 * d1 * d2;
    // Display  d1, 2 and area after clicking on calculate button
    const rhombusD1 = document.getElementById('rhombus-d1');
    rhombusD1.innerText = d1;
    const rhombusD2 = document.getElementById('rhombus-d2');
    rhombusD2.innerText = d2;
    const rhombusArea = document.getElementById('rhombus-area');
    rhombusArea.innerText = rhombus_area.toFixed(2);
    const rhombusD1D2AreaContainer = document.getElementById('rhombus-d1-d2-area-display-container');
    if (rhombusArea !== null) {
        rhombusD1D2AreaContainer.removeAttribute('hidden');
    }
    else {
        rhombusD1D2AreaContainer.setAttribute('hidden', true);
    }

}
// calculate Pentagon area
function calculatePentagonArea() {
    // input perimeter
    const perimeterInput = document.getElementById('perimeter-input');
    const perimeterNumber = perimeterInput.value;
    const p = parseFloat(perimeterNumber);
    perimeterInput.value = '';
    // input apothem
    const apothemInput = document.getElementById('apothem-input');
    const apothemNumber = apothemInput.value;
    const a = parseFloat(apothemNumber);
    apothemInput.value = '';
    // pentagon area calculation
    const pentagon_area = 0.5 * p * a;
    // Display pentagon perimeter. apothem, area after clicking calculate button 
    const perimeter = document.getElementById('pentagon-p');
    perimeter.innerText = p;
    const apothem = document.getElementById('pentagon-a');
    apothem.innerText = a;
    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = pentagon_area.toFixed(2);

    const displayPentagonPerimeterApothemArea = document.getElementById('pentagon-p-a-area-display-container');
    if (pentagonArea !== null) {
        displayPentagonPerimeterApothemArea.removeAttribute('hidden');
    }
    else {
        displayPentagonPerimeterApothemArea.setAttribute('hidden', true);
    }
}

// Calculate Ellipse area
function calculateEllipseArea() {
    // input a axis length
    const aAxisInput = document.getElementById('a-axis-input');
    const aAxisNumber = aAxisInput.value;
    const a = parseFloat(aAxisNumber);
    // input b axis length
    const bAxisInput = document.getElementById('b-axis-input');
    const bAxisNumber = bAxisInput.value;
    const b = parseFloat(bAxisNumber);
    // area calculation
    const ellipse_area = 3.14 * a * b;
    // Display Ellipse a and b axis length and area after clicking calculate button 
    const aAxis = document.getElementById('a-axis');
    aAxis.innerText = a;
    const bAxis = document.getElementById('b-axis');
    bAxis.innerText = b;
    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = ellipse_area.toFixed(2);

    const displayEllipseAreaContainer = document.getElementById('ellipse-a-b-area-display-container');
    if (ellipseArea !== null) {
        displayEllipseAreaContainer.removeAttribute('hidden');
    }
    else {
        displayEllipseAreaContainer.setAttribute('hidden', true);
    }
}

// ==============Reusable function for similar task==============
// Triangle area
function calculateTriangleArea() {
    const base = getInputValueById('triangle-base-input');
    const height = getInputValueById('triangle-height-input');
    const displayContainer = document.getElementById('triangle-b-h-area-display-container');
    const dBase = document.getElementById('triangle-base');
    const dHeight = document.getElementById('triangle-height');
    const dArea = document.getElementById('triangle-area');

    const area = (0.5 * base * height).toFixed(2);
    displayResultInCard(base, height, area, displayContainer, dBase, dHeight, dArea);
}
// Rectangle Area
function calculateRectangleArea() {
    const width = getInputValueById('rectangle-width-input');
    const length = getInputValueById('rectangle-length-input');
    const displayContainer = document.getElementById('rectangle-w-l-area-display-container');
    const dWidth = document.getElementById('rectangle-width');
    const dLength = document.getElementById('rectangle-length');
    const dArea = document.getElementById('rectangle-area');

    const area = (width * length).toFixed(2);
    displayResultInCard(width, length, area, displayContainer, dWidth, dLength, dArea);
}
// Parallelogram area

function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base-input');
    const height = getInputValueById('parallelogram-height-input');
    const displayContainer = document.getElementById('parallelogram-b-h-area-display-container');
    const dBase = document.getElementById('parallelogram-base');
    const dHeight = document.getElementById('parallelogram-height');
    const dArea = document.getElementById('parallelogram-area');

    const area = base * height;
    displayResultInCard(base, height, area, displayContainer, dBase, dHeight, dArea);
}
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    inputField.value = '';
    return value;
}

function displayResultInCard(input1, input2, area, displayContainer, dInput1, dInput2, dArea) {
    dInput1.innerText = input1;
    dInput2.innerText = input2;
    dArea.innerText = area;
    if (area) {
        displayContainer.removeAttribute('hidden');
    }
    else {
        displayContainer.setAttribute('hidden', true);
    }

}