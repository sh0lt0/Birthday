// ==========================================
// DATA SECTION - EDIT THIS TO CUSTOMIZE
// ==========================================

const daysData = [
    {
        day: 1,
        date: "November 1",
        image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800",
        story: "The first day of this beautiful journey. I remember how your smile lit up the entire room, making everything feel perfect and new."
    },
    {
        day: 2,
        date: "November 2",
        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",
        story: "We talked for hours about everything and nothing. Your laughter became my favorite sound in the world."
    },
    {
        day: 3,
        date: "November 3",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
        story: "That sunset walk we took together. The sky was painted in oranges and pinks, but nothing was as beautiful as the moment we shared."
    },
    {
        day: 4,
        date: "November 4",
        image: "https://images.unsplash.com/photo-1529422643029-d4585747aaf2?w=800",
        story: "You taught me that the little things matter most. Like how you remember how I take my coffee, and how that simple gesture means everything."
    },
    {
        day: 5,
        date: "November 5",
        image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800",
        story: "Every day with you feels like a new adventure. Today reminded me why I'm so grateful to have you in my life."
    },
    {
        day: 6,
        date: "November 6",
        image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800",
        story: "Your kindness knows no bounds. Today you showed me what it means to truly care for someone."
    },
    {
        day: 7,
        date: "November 7",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800",
        story: "A week of moments that I'll treasure forever. Each day with you adds another beautiful chapter to our story."
    },
    {
        day: 8,
        date: "November 8",
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800",
        story: "The way you see the world inspires me. Your perspective makes everything brighter and more beautiful."
    },
    {
        day: 9,
        date: "November 9",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
        story: "Today I realized that home isn't a place, it's wherever you are. You make everything feel safe and warm."
    },
    {
        day: 10,
        date: "November 10",
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800",
        story: "Ten days of magic. Your presence in my life is the greatest gift I could ever ask for."
    },
    {
        day: 11,
        date: "November 11",
        image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800",
        story: "The little moments we share mean more than grand gestures. Like today, when you just held my hand."
    },
    {
        day: 12,
        date: "November 12",
        image: "https://images.unsplash.com/photo-1542838686-6b1c1b434ab0?w=800",
        story: "Your strength amazes me every day. The way you face challenges with grace and courage is truly inspiring."
    },
    {
        day: 13,
        date: "November 13",
        image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800",
        story: "Lucky day 13. Nothing feels unlucky when I'm with you. You bring joy to every moment."
    },
    {
        day: 14,
        date: "November 14",
        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",
        story: "Two weeks of memories that I'll cherish forever. Each day makes me fall more in love with who you are."
    },
    {
        day: 15,
        date: "November 15",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
        story: "Tomorrow is your special day, but today I want to thank you for being exactly who you are."
    },
    {
        day: 16,
        date: "November 16 🎂",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
        story: "Happy Birthday, Tanvi! 🎉 Today we celebrate the amazing person you are. Thank you for being you, for your kindness, your laughter, and for making every day brighter. Here's to you and all the beautiful moments we'll create together. I'm so grateful to have you in my life. Happy Birthday! 💖"
    },
    {
        day: 17,
        date: "November 17",
        image: "https://images.unsplash.com/photo-1529422643029-d4585747aaf2?w=800",
        story: "The day after your birthday, but the celebration of you continues. Every day is special because of you."
    },
    {
        day: 18,
        date: "November 18",
        image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800",
        story: "Your wisdom and insight never cease to amaze me. You always know just what to say."
    },
    {
        day: 19,
        date: "November 19",
        image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800",
        story: "The way you care for others shows the beauty of your heart. You make the world a better place."
    },
    {
        day: 20,
        date: "November 20",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800",
        story: "Twenty days of memories, and each one is precious. Thank you for sharing your time with me."
    },
    {
        day: 21,
        date: "November 21",
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800",
        story: "Your dreams inspire me to dream bigger. Together, we can achieve anything we set our minds to."
    },
    {
        day: 22,
        date: "November 22",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
        story: "The comfort of knowing you're there, always supporting me, means more than words can say."
    },
    {
        day: 23,
        date: "November 23",
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800",
        story: "Your creativity and passion for life are contagious. You inspire me to be my best self."
    },
    {
        day: 24,
        date: "November 24",
        image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800",
        story: "The trust we've built is the foundation of something truly special. I treasure what we have."
    },
    {
        day: 25,
        date: "November 25",
        image: "https://images.unsplash.com/photo-1542838686-6b1c1b434ab0?w=800",
        story: "Twenty-five days of learning, growing, and loving. Each moment with you teaches me something new."
    },
    {
        day: 26,
        date: "November 26",
        image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800",
        story: "Your patience and understanding create a safe space where I can be myself completely."
    },
    {
        day: 27,
        date: "November 27",
        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",
        story: "The way you light up when talking about your passions is one of my favorite things to witness."
    },
    {
        day: 28,
        date: "November 28",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
        story: "Almost at the end of this journey, but really it's just the beginning of so many more adventures together."
    },
    {
        day: 29,
        date: "November 29",
        image: "https://images.unsplash.com/photo-1529422643029-d4585747aaf2?w=800",
        story: "Twenty-nine days of gratitude. Thank you for every laugh, every conversation, every moment."
    },
    {
        day: 30,
        date: "November 30",
        image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800",
        story: "The final day of November, but not the end of our story. Here's to many more memories together. Thank you for being you, Tanvi. 💖"
    }
];

// ==========================================
// APPLICATION CODE
// ==========================================

// Create floating hearts
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const hearts = ['💖', '💕', '💗', '💓', '✨', '⭐', '🌟'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 10) + 's';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 15000);
    }, 2000);
}

// Render day cards
function renderDays() {
    const container = document.getElementById('daysContainer');
    
    daysData.forEach((dayData) => {
        const card = document.createElement('div');
        card.className = 'day-card';
        card.innerHTML = `
            <h2 class="day-header">${dayData.date}</h2>
            <div class="day-image-container">
                <img src="${dayData.image}" alt="${dayData.date}" class="day-image">
            </div>
            <p class="day-story">${dayData.story}</p>
        `;
        container.appendChild(card);
    });
}

// Intersection Observer for fade-in animations
function initScrollAnimations() {
    const cards = document.querySelectorAll('.day-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Music toggle functionality
function initMusicToggle() {
    const musicToggle = document.getElementById('musicToggle');
    const musicPlayer = document.getElementById('backgroundMusic');
    const musicText = musicToggle.querySelector('.music-text');
    
    musicToggle.addEventListener('click', () => {
        if (musicPlayer.paused) {
            musicPlayer.play();
            musicToggle.classList.add('playing');
            musicText.textContent = 'Pause Music';
        } else {
            musicPlayer.pause();
            musicToggle.classList.remove('playing');
            musicText.textContent = 'Play Music';
        }
    });
}

// Smooth scroll
function initSmoothScroll() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    renderDays();
    initScrollAnimations();
    initMusicToggle();
    initSmoothScroll();
});