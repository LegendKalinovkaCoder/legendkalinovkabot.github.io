let currentAudio = null;

function playSound(soundNumber) {
    // Останавливаем предыдущий звук, если он играет
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Воспроизводим новый звук
    currentAudio = document.getElementById(`sound${soundNumber}`);
    currentAudio.play();
}
