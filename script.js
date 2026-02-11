// ================================================
// ROMANTIC VALENTINE WEB APP - JAVASCRIPT
// All interactive features and animations
// ================================================

// === GLOBAL VARIABLES ===
let currentPage = 1;
let musicPlaying = false;
let typewriterFinished = false;

// === PAGE NAVIGATION SYSTEM ===
/**
 * Navigate to a specific page with smooth transition
 * @param {number} pageNumber - The page number to navigate to (1-5)
 */
function goToPage(pageNumber) {
    // Hide current page
    const currentPageElement = document.querySelector('.page.active');
    if (currentPageElement) {
        currentPageElement.classList.remove('active');
    }
    
    // Show new page
    const newPageElement = document.getElementById(`page${pageNumber}`);
    if (newPageElement) {
        newPageElement.classList.add('active');
        currentPage = pageNumber;
        
        // Trigger specific page actions
        if (pageNumber === 2) {
            startTypewriter();
        } else if (pageNumber === 3) {
            animateReasonCards();
        } else if (pageNumber === 5) {
            createConfetti();
        }
    }
}

// === FLOATING HEARTS BACKGROUND ANIMATION ===
/**
 * Create and animate floating hearts in the background
 */
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    
    // Create a new heart every 300ms
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        // Random horizontal position
        heart.style.left = Math.random() * 100 + '%';
        
        // Random animation duration (6-10 seconds)
        heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
        
        // Random delay
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }, 300);
}

// === TYPEWRITER EFFECT FOR LOVE LETTER ===
/**
 * Animated typewriter effect for the love letter on Page 2
 */
function startTypewriter() {
    // Prevent multiple typewriter instances
    if (typewriterFinished) return;
    
    const text = `My Dearest Love,

From the moment I met you, my world became brighter, my days became sweeter, and my heart became fuller. You have this incredible way of making everything feel magical, even the simplest moments we share together.

Every time I see your smile, my heart skips a beat. When I hear your voice, everything else fades away. Your laughter is the melody that plays in my mind, and your happiness means everything to me.

I find myself thinking about you constantly – wondering what you're doing, hoping you're smiling, and counting the moments until I can see you again. You've become such an important part of my life, and I can't imagine my days without you in them.

You inspire me to be better, to dream bigger, and to love deeper. Your kindness, your strength, and your beautiful soul have captured my heart completely. I am so grateful for every moment we've shared and excited for all the memories we'll create together.

I wanted to show you just how much you mean to me, and I hope these words can express even a fraction of what's in my heart.

With all my love,
Forever Yours 💕`;

    const element = document.getElementById('typewriter');
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 30); // Typing speed (30ms per character)
        } else {
            typewriterFinished = true;
            // Remove blinking cursor after typing is complete
            element.style.borderRight = 'none';
        }
    }
    
    type();
}

// === REASON CARDS ANIMATION ===
/**
 * Trigger animation for reason cards on Page 3
 * (Animation is handled by CSS, this function can be extended for more complex animations)
 */
function animateReasonCards() {
    // Cards are already animated via CSS
    // This function can be extended for additional effects if needed
    console.log('Reason cards are animating!');
}

// === MUSIC PLAYER CONTROLS ===
/**
 * Toggle background music on/off
 */
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicBtn');
    
    if (musicPlaying) {
        music.pause();
        btn.textContent = '🎵 Play Music';
        musicPlaying = false;
    } else {
        music.play();
        btn.textContent = '🎵 Pause Music';
        musicPlaying = true;
    }
}

// === PAGE 4: MOVING "NO" BUTTON ===
/**
 * Make the "No" button move away when the cursor gets near it
 * This prevents clicking "No" and adds a playful element
 */
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const container = noBtn.parentElement;
    
    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    // Calculate maximum positions to keep button in view
    const maxX = containerRect.width - btnRect.width - 40;
    const maxY = containerRect.height - btnRect.height - 40;
    
    // Generate random position
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Apply absolute positioning
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    
    // Add a small shake animation
    noBtn.style.transition = 'all 0.3s ease';
}

// === PAGE 4: HANDLE "YES" BUTTON CLICK ===
/**
 * Handle when user clicks "Yes" - navigate to success page
 */
function handleYes() {
    // Add extra excitement animation before transitioning
    const yesBtn = document.getElementById('yesBtn');
    yesBtn.style.transform = 'scale(1.3)';
    
    setTimeout(() => {
        goToPage(5);
    }, 300);
}

// === PAGE 5: CONFETTI CELEBRATION EFFECT ===
/**
 * Create confetti animation for the success page
 */
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff4d7d', '#e91e63', '#ffc0cb', '#ff69b4', '#ff1493', '#db7093'];
    
    // Create 100 pieces of confetti
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            
            // Random properties
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            // Random shape (square or rectangle)
            if (Math.random() > 0.5) {
                confetti.style.width = '15px';
                confetti.style.height = '5px';
            }
            
            confettiContainer.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30); // Stagger the confetti creation
    }
    
    // Continue creating confetti for celebration effect
    setInterval(() => {
        for (let i = 0; i < 20; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }, 3000);
}

// === INITIALIZATION ===
/**
 * Initialize the application when page loads
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('💕 Romantic Valentine App Loaded!');
    
    // Start floating hearts background animation
    createFloatingHearts();
    
    // Ensure first page is active
    goToPage(1);
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});

// === ADDITIONAL HELPER FUNCTIONS ===

/**
 * Add extra sparkle effect on button hover (optional enhancement)
 */
function addSparkleEffect() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1)';
        });
    });
}

// Initialize sparkle effects
addSparkleEffect();

// === KEYBOARD NAVIGATION (Optional) ===
/**
 * Allow keyboard navigation between pages (optional feature)
 */
document.addEventListener('keydown', function(e) {
    // Arrow Right: Next page
    if (e.key === 'ArrowRight' && currentPage < 5) {
        goToPage(currentPage + 1);
    }
    // Arrow Left: Previous page
    if (e.key === 'ArrowLeft' && currentPage > 1) {
        goToPage(currentPage - 1);
    }
});

// === CONSOLE EASTER EGG ===
console.log(`
💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖
💖  VALENTINE APP v1.0     💖
💖  Made with Love ❤️      💖
💖  Hope you say YES! 😊   💖
💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖
`);
