let tokenCounter = 0;
let totalBalance = 0;
const tokenCounterElement = document.getElementById('token-counter');
const vevoButton = document.getElementById('vevo-button');
const tokenDisplay = document.getElementById('token-display');
const connectWalletButton = document.getElementById('connect-wallet');
const claimTokensButton = document.getElementById('claim-tokens');
const balanceDisplayElement = document.getElementById('total-balance');
let signer;
let userAddress;

// Kullanıcının Metamask cüzdanını bağlama fonksiyonu
async function connectWallet() {
    if (window.ethereum) {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []); // Metamask cüzdanı bağlantısı
            signer = provider.getSigner();
            userAddress = await signer.getAddress();
            alert('Wallet successfully connected!');
        } catch (err) {
            console.error(err);
        }
    } else {
        alert('Please install Metamask!');
    }
}

// VEVO token kazandırma fonksiyonu
vevoButton.addEventListener('click', () => {
    tokenCounter++;
    tokenCounterElement.textContent = tokenCounter;

    // Token kazandığını göstermek için kısa bir animasyon
    tokenDisplay.textContent = `+1 VEVO`;
    tokenDisplay.classList.remove('hide'); // Yazıyı görünür yap
    tokenDisplay.classList.add('show');

    // 1 saniye sonra yazıyı kaybet
    setTimeout(() => {
        tokenDisplay.classList.remove('show');
        tokenDisplay.classList.add('hide');
    }, 1000); // 1 saniye sonra kaybolsun
});

// Tokenleri claim etme fonksiyonu
claimTokensButton.addEventListener('click', () => {
    if (!userAddress) {
        alert("Please connect your wallet first.");
        return;
    }
    
    // Kazanılan VEVO tokenlerini claim et
    totalBalance += tokenCounter;
    balanceDisplayElement.textContent = totalBalance;

    alert(`${tokenCounter} VEVO tokens will be transferred to your wallet.`);
    tokenCounter = 0; // Token sayacını sıfırla
    tokenCounterElement.textContent = tokenCounter;
});

// Metamask'ı bağla butonuna tıklayınca Metamask'ı bağlama
connectWalletButton.addEventListener('click', connectWallet);
