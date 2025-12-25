// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Active navigation link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Form submission with Web3Forms
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    const submitBtn = document.getElementById('submit-btn');
    const formMessage = document.getElementById('form-message');

    // Check for success parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        formMessage.textContent = '✅ Votre demande a été envoyée avec succès ! Nous vous répondrons sous 24h.';
        formMessage.className = 'form-message success';

        // Remove success parameter from URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validation des champs
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const nameInput = document.getElementById('name');

        // Validation email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            formMessage.innerHTML = '❌ Veuillez entrer une adresse email valide.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
            emailInput.focus();
            emailInput.style.borderColor = '#dc2626';
            return;
        }

        // Validation domaine email (domaines valides uniquement)
        const validDomains = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.fr', 'yahoo.com',
                             'orange.fr', 'free.fr', 'laposte.net', 'wanadoo.fr', 'sfr.fr',
                             'icloud.com', 'live.fr', 'live.com', 'msn.com', 'outlook.fr'];
        const emailDomain = emailInput.value.toLowerCase().split('@')[1];

        if (!validDomains.includes(emailDomain)) {
            formMessage.innerHTML = `❌ L'adresse email "${emailInput.value}" n'est pas valide. Veuillez utiliser une adresse email reconnue (Gmail, Outlook, Orange, Free, etc.).`;
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
            emailInput.focus();
            emailInput.style.borderColor = '#dc2626';
            return;
        } else {
            emailInput.style.borderColor = '';
        }

        // Validation téléphone (si rempli)
        if (phoneInput.value) {
            const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
            if (!phoneRegex.test(phoneInput.value.replace(/\s/g, ''))) {
                formMessage.innerHTML = '❌ Veuillez entrer un numéro de téléphone français valide (ex: 06 12 34 56 78).';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                phoneInput.focus();
                phoneInput.style.borderColor = '#dc2626';
                return;
            } else {
                phoneInput.style.borderColor = '';
            }
        }

        // Validation nom
        if (nameInput.value.trim().length < 2) {
            formMessage.innerHTML = '❌ Veuillez entrer votre nom complet.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
            nameInput.focus();
            nameInput.style.borderColor = '#dc2626';
            return;
        } else {
            nameInput.style.borderColor = '';
        }

        // Add loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        formMessage.style.display = 'none';

        const formData = new FormData(contactForm);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (response.ok && data.success) {
                formMessage.innerHTML = `
                    <div style="font-size: 4rem; margin-bottom: 1rem; animation: bounceIn 0.8s ease;">✅</div>
                    <div style="font-size: 1.5rem; font-weight: 900; margin-bottom: 1rem; color: #16a34a;">
                        Votre devis a bien été pris en compte !
                    </div>
                    <div style="font-size: 1rem; font-weight: 400; line-height: 1.6;">
                        Nous avons bien reçu votre demande de devis pour votre location.<br>
                        <strong>Vous recevrez une réponse personnalisée sous 24-48h</strong> avec :<br>
                        • Un devis détaillé adapté à vos besoins<br>
                        • Un planning de réalisation
                    </div>
                    <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(37, 99, 235, 0.1); border-radius: 12px; border-left: 4px solid #2563eb;">
                        <strong>📱 Besoin urgent ?</strong><br>
                        Contactez-nous au <a href="tel:+33643697006" style="color: #2563eb; text-decoration: none; font-weight: 700;">06 43 69 70 06</a>
                    </div>
                `;
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                contactForm.reset();

                // Scroll to message
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Confetti effect
                createConfetti();
            } else {
                throw new Error(data.message || 'Une erreur est survenue');
            }
        } catch (error) {
            formMessage.textContent = '❌ Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
}

// Confetti animation
function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#f59e0b', '#f093fb', '#f5576c'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        document.body.appendChild(confetti);

        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 10}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        animation.onfinish = () => confetti.remove();
    }
}

// Counter animation
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
};

// Animate counters when visible
const counters = document.querySelectorAll('.stat-number');
let countersAnimated = false;

const animateCounters = () => {
    if (countersAnimated) return;

    const firstCounter = counters[0];
    if (firstCounter) {
        const rect = firstCounter.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            countersAnimated = true;
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.target);
                animateCounter(counter, target);
            });
        }
    }
};

window.addEventListener('scroll', animateCounters);
animateCounters();
