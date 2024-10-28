function applyStyles() {
    // Get the paragraph element
    const paragraph = document.getElementById("customParagraph");

    // Get RGB values for font color
    const fontR = document.getElementById("fontR").value;
    const fontG = document.getElementById("fontG").value;
    const fontB = document.getElementById("fontB").value;

    // Set the font color using the RGB values
    if (fontR && fontG && fontB) {
        paragraph.style.color = `rgb(${fontR}, ${fontG}, ${fontB})`;
    }

    // Get RGB values for border color
    const borderR = document.getElementById("borderR").value;
    const borderG = document.getElementById("borderG").value;
    const borderB = document.getElementById("borderB").value;

    // Set the border color using the RGB values
    if (borderR && borderG && borderB) {
        paragraph.style.borderColor = `rgb(${borderR}, ${borderG}, ${borderB})`;
    }

    // Get the border width and apply it
    const borderWidth = document.getElementById("borderWidth").value;
    if (borderWidth) {
        paragraph.style.borderWidth = `${borderWidth}px`;
    }
}
