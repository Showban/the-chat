document.addEventListener("click", () => {
    const audio = new Audio("cosa/viento.mp3");
    audio.loop = true;

    audio.play().then(() => {
        console.log("Audio iniciado.");
    }).catch((error) => {
        console.error("Error al iniciar el audio:", error);
    })})