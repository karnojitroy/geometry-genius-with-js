// calculate Triangle area
function calculateTriangleArea() {
    // input base
    const triangleBaseInput = document.getElementById('triangle-base-input');
    const triangleBaseNumber = triangleBaseInput.value;
    const tBase = parseFloat(triangleBaseNumber);
    // assign value 0 after clicking on calculate button
    triangleBaseInput.value = '';
    // input height
    const triangleHeightInput = document.getElementById('triangle-height-input');
    const triangleHeightNumber = triangleHeightInput.value;
    const tHeight = parseFloat(triangleHeightNumber);
    triangleHeightInput.value = '';
    // calculate triangle area
    const triangle_Area = 0.5 * tBase * tHeight;
    // Display input base, height area after clicking on calculate button
    const triangleBase = document.getElementById('triangle-base');
    triangleBase.innerText = tBase;
    const triangleHeight = document.getElementById('triangle-height');
    triangleHeight.innerText = tHeight;
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = triangle_Area.toFixed(2);
    const displayBaseHeightAreaContainer = document.getElementById('triangle-b-h-area-display-container');
    if (triangleArea !== null) {
        displayBaseHeightAreaContainer.removeAttribute('hidden');
    }
    else {
        displayBaseHeightAreaContainer.setAttribute('hidden', true);
    }
}
// Calculate Rectangle Area
function calculateRectangleArea() {
    // input width
    const rectangleWidthInput = document.getElementById('rectangle-width-input');
    const rectangleWidthNumber = rectangleWidthInput.value;
    const rWidth = parseFloat(rectangleWidthNumber);
    rectangleWidthInput.value = '';
    // input rectangle length
    const rectangleLengthInput = document.getElementById('rectangle-length-input');
    const rectangleLengthNumber = rectangleLengthInput.value;
    const rLength = parseFloat(rectangleLengthNumber);
    rectangleLengthInput.value = '';
    // rectangle area
    const rectangle_area = rWidth * rLength;
    // Display input width, Length and area after clicking on calculate button
    const rectangleWidth = document.getElementById('rectangle-width');
    rectangleWidth.innerText = rWidth;
    const rectangleLength = document.getElementById('rectangle-length');
    rectangleLength.innerText = rLength;
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = rectangle_area.toFixed(2);

    const displayRectangleWidthLengthArea = document.getElementById('rectangle-w-l-area-display-container');
    if (rectangleArea !== null) {
        displayRectangleWidthLengthArea.removeAttribute('hidden');
    }
    else {
        displayRectangleWidthLengthArea.setAttribute('hidden', true);
    }
}
// calculate Parallelogram Area
function calculateParallelogramArea() {
    // input base
    const parallelogramBaseInput = document.getElementById('parallelogram-base-input');
    const parallelogramBaseNumber = parallelogramBaseInput.value;
    const pBase = parseFloat(parallelogramBaseNumber);
    parallelogramBaseInput.value = '';
    // input height
    const parallelogramHeightInput = document.getElementById('parallelogram-height-input');
    const parallelogramHeightNumber = parallelogramHeightInput.value;
    pHeight = parseFloat(parallelogramHeightNumber);
    parallelogramHeightInput.value = '';
    //Parallelogram area calculation
    const parallelogram_area = pBase * pHeight;
    // Display input base, Height and area after clicking on calculate button
    const parallelogramBase = document.getElementById('parallelogram-base');
    parallelogramBase.innerText = pBase;
    const parallelogramHeight = document.getElementById('parallelogram-height');
    parallelogramHeight.innerText = pHeight;
    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = parallelogram_area.toFixed(2);

    const displayParallelogramBaseHeightArea = document.getElementById('parallelogram-b-h-area-display-container');
    if (parallelogramArea !== null) {
        displayParallelogramBaseHeightArea.removeAttribute('hidden');
    }
    else {
        displayParallelogramBaseHeightArea.setAttribute('hidden', true);
    }
}

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
