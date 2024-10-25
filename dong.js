function validateImage() {
    const fileInput = document.getElementById('profilePic');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select an image file.');
        return false;
    }

    const fileType = file.type;
    const validTypes = ['image/jpeg', 'image/png'];
    if (!validTypes.includes(fileType)) {
        alert('Invalid file type. Only JPG and PNG are allowed.');
        return false;
    }
    
    const maxSize = 2 * 1024 * 1024; 
    if (file.size > maxSize) {
        alert('File size exceeds 2 MB limit.');
        return false;
    }

    
    const reader = new FileReader();
    reader.onload = function(e) {
        const preview = document.getElementById('imagePreview');
        preview.src = e.target.result;
        preview.style.display = 'block'; 
    };
    reader.readAsDataURL(file);

   
    alert('File uploaded successfully. Thank you!');

    return true; 
}