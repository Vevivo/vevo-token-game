let tokenCounter = 0;
const tokenCounterElement = document.getElementById('token-counter');
const vevoButton = document.getElementById('vevo-button');
const tokenDisplay = document.getElementById('token-display');

vevoButton.addEventListener('click', () => {
    tokenCounter++;
    tokenCounterElement.textContent = tokenCounter;

    // Token kazandığınız sayıyı geçici olarak göster
    tokenDisplay.textContent = `+1 VEVO`;
    tokenDisplay.classList.add('show');

    // Animasyonu başlat (kaybolma efekti)
    setTimeout(() => {
        tokenDisplay.classList.remove('show');
    }, 1000); // 1 saniye sonra kaybolacak
});
