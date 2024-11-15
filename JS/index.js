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