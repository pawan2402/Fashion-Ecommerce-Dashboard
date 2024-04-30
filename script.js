
document.getElementById('import-button').addEventListener('click', function () {
    console.log("Button clicked!"); // For debugging
    var fileInput = document.querySelector('.file-input');
    if (fileInput) {
        fileInput.click(); // Click on the file input
    }
});
