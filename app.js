let tokenCounter = 0;
const tokenCounterElement = document.getElementById('token-counter');
const vevoLogo = document.getElementById('vevo-logo');
const tokenDisplay = document.getElementById('token-display');

vevoLogo.addEventListener('click', () => {
    tokenCounter++;
    tokenCounterElement.textContent = tokenCounter;

    // Token kazandığınız sayıyı geçici olarak göster
    tokenDisplay.textContent = `+1 VEVO`;
    tokenDisplay.style.opacity = '1';  // Görünür hale getir
    tokenDisplay.classList.remove('fade-out'); // Tekrar tıklanınca animasyonu sıfırla

    // Animasyonu başlat (yukarıya doğru kayarak kaybolma)
    setTimeout(() => {
        tokenDisplay.classList.add('fade-out');
    }, 50);
});
