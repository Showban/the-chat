document.addEventListener('DOMContentLoaded', function() { 

    const images = document.querySelectorAll('.imagenes .item img');

    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popupImage');
    const closeBtn = document.querySelector('.close-btn');

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            console.log('Has hecho clic en la imagen: ' + image.id);

            popupImage.src = image.src;
            
            popup.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const audio = document.getElementById('audio');
    
    playButton.addEventListener('click', function() {
        audio.play(); 

        const audioDuration = audio.duration;
        let counter = audioDuration - 1;
        const interval = setInterval(function() {
            console.log("Contador: " + counter + " segundos");

            counter--;

            if (counter <= 0) {
                clearInterval(interval);
                console.log("Contador finalizado, cerrando la pestaña...");
                window.close();
            }
        }, 1000);
    });
});