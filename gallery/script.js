document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('galleryContainer');

    
    function populateGallery() {
        for (let i = 0; i < 9; i++) {
            const imageUrl = `https://source.unsplash.com/random/300x300?sig=${i + 1}`;
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.alt = `Random Image ${i + 1}`;
            galleryContainer.appendChild(imageElement);
        }
    }

    
    populateGallery();
});
