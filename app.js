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

// Function to connect the user's Metamask wallet
async function connectWallet() {
    if (window.ethereum) {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []); // Connect to Metamask wallet
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

// VEVO token earning function
vevoButton.addEventListener('click', () => {
    tokenCounter++;
    tokenCounterElement.textContent = tokenCounter;

    // Show a brief animation to display the earned token
    tokenDisplay.textContent = `+1 VEVO`;
    tokenDisplay.classList.add('show');
    setTimeout(() => {
        tokenDisplay.classList.remove('show');
    }, 1000);
});

// Function to claim tokens
claimTokensButton.addEventListener('click', () => {
    if (!userAddress) {
        alert("Please connect your wallet first.");
        return;
    }
    
    // Claim earned VEVO tokens
    totalBalance += tokenCounter;
    balanceDisplayElement.textContent = totalBalance;

    alert(`${tokenCounter} VEVO tokens will be transferred to your wallet.`);
    tokenCounter = 0; // Reset token counter
    tokenCounterElement.textContent = tokenCounter;
});

// Connect wallet button event listener
connectWalletButton.addEventListener('click', connectWallet);
