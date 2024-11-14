// calculate Triangle area
function calculateTriangleArea() {
    // input base
    const triangleBaseInput = document.getElementById('triangle-base-input');
    const triangleBaseNumber = triangleBaseInput.value;
    const base = parseFloat(triangleBaseNumber);
    // assign value 0 after clicking on calculate button
    triangleBaseInput.value = '';
    // input height
    const triangleHeightInput = document.getElementById('triangle-height-input');
    const triangleHeightNumber = triangleHeightInput.value;
    const height = parseFloat(triangleHeightNumber);
    triangleHeightInput.value = '';
    // calculate triangle area
    const triangle_Area = 0.5 * base * height;
    // Display input base, height area after clicking on calculate button
    const triangleBase = document.getElementById('triangle-base');
    triangleBase.innerText = base;
    const triangleHeight = document.getElementById('triangle-height');
    triangleHeight.innerText = height;
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = triangle_Area;

    // input base, height and calculated  triangle area display
    const displayBaseHeightAreaContainer = document.getElementById('triangle-b-h-area-display-container');
    if (triangleArea !== null) {
        displayBaseHeightAreaContainer.removeAttribute('hidden');
    }
    else {
        displayBaseHeightAreaContainer.setAttribute('hidden', true);
    }

}