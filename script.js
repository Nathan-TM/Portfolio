// Barre de progression
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    document.getElementById('progress-bar').style.width = `${scrollPercentage}%`;
});
function toggleLegal(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', function () {
    // Fonctionnalités du menu d'accessibilité
    const toggleButton = document.getElementById('accessibility-toggle');
    const optionsMenu = document.getElementById('accessibility-options');
    
    toggleButton.addEventListener('click', function () {
        const expanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
        toggleButton.setAttribute('aria-expanded', !expanded);
        optionsMenu.setAttribute('aria-hidden', expanded);
    });

    // Augmenter la taille du texte
    document.getElementById('increase-font').addEventListener('click', function () {
        document.body.style.fontSize = '18px';
    });

    // Diminuer la taille du texte
    document.getElementById('decrease-font').addEventListener('click', function () {
        document.body.style.fontSize = '14px';
    });

    // Mode contraste élevé
    document.getElementById('high-contrast').addEventListener('click', function () {
        document.body.classList.toggle('high-contrast');
    });

    // Désactiver les animations
    document.getElementById('disable-animations').addEventListener('click', function () {
        document.body.classList.toggle('no-animations');
    });

    // Mode dyslexie
    document.getElementById('dyslexia-mode').addEventListener('click', function () {
        document.body.classList.toggle('dyslexia-mode');
    });

    // Mode daltonisme
    document.getElementById('color-blind-mode').addEventListener('click', function () {
        document.body.classList.toggle('color-blind-mode');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const nightModeToggle = document.getElementById('night-mode-toggle');

    // Vérifie si le mode nuit est déjà activé à partir du localStorage
    if (localStorage.getItem('night-mode') === 'enabled') {
        document.body.classList.add('night-mode');
    }

    // Bascule le mode nuit
    nightModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('night-mode');

        // Sauvegarde l'état du mode nuit dans localStorage
        if (document.body.classList.contains('night-mode')) {
            localStorage.setItem('night-mode', 'enabled');
        } else {
            localStorage.removeItem('night-mode');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const nightModeToggle = document.getElementById('night-mode-toggle');
    const resetButton = document.getElementById('reset-button');
    const body = document.body;
    const skillsSection = document.getElementById('skills');
    
    // Vérifie si le mode nuit est déjà activé à partir du localStorage
    if (localStorage.getItem('night-mode') === 'enabled') {
        body.classList.add('night-mode');
    }

    // Bascule le mode nuit
    nightModeToggle.addEventListener('click', function () {
        body.classList.toggle('night-mode');
        
        // Sauvegarde l'état du mode nuit dans localStorage
        if (body.classList.contains('night-mode')) {
            localStorage.setItem('night-mode', 'enabled');
        } else {
            localStorage.removeItem('night-mode');
        }
    });

    // Bouton Reset - réinitialiser les préférences
    resetButton.addEventListener('click', function () {
        // Réinitialise le mode nuit
        body.classList.remove('night-mode');
        localStorage.removeItem('night-mode');
        
        // Réinitialiser les tailles de police (si une fonction d'ajustement est utilisée)
        document.documentElement.style.fontSize = ''; // Taille de police par défaut
        
        // Ajouter la classe 'used' pour changer la couleur du bouton
        resetButton.classList.add('used');
        
        // Réinitialiser après quelques secondes
        setTimeout(function () {
            resetButton.classList.remove('used');
        }, 2000);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const disableAnimationsButton = document.getElementById('disable-animations');
    const dyslexiaModeButton = document.getElementById('dyslexia-mode');
    const colorBlindModeButton = document.getElementById('color-blind-mode');
    const nightModeButton = document.getElementById('night-mode-toggle');
    const resetButton = document.getElementById('reset-button');
    const body = document.body;

    // Mode Nuit - activer/désactiver
    nightModeButton.addEventListener('click', function () {
        body.classList.toggle('night-mode');
        nightModeButton.classList.add('active');
    });

    // Mode Dyslexie
    dyslexiaModeButton.addEventListener('click', function () {
        body.classList.toggle('dyslexia-mode');
        dyslexiaModeButton.classList.add('active');
    });

    // Mode Daltonisme
    colorBlindModeButton.addEventListener('click', function () {
        body.classList.toggle('color-blind-mode');
        colorBlindModeButton.classList.add('active');
    });

    // Augmenter la taille du texte
    increaseFontButton.addEventListener('click', function () {
        document.documentElement.style.fontSize = '1.2em';
        increaseFontButton.classList.add('active');
    });

    // Diminuer la taille du texte
    decreaseFontButton.addEventListener('click', function () {
        document.documentElement.style.fontSize = '1em';
        decreaseFontButton.classList.add('active');
    });

    // Désactiver les animations
    disableAnimationsButton.addEventListener('click', function () {
        document.body.classList.toggle('no-animations');
        disableAnimationsButton.classList.add('active');
    });

    // Bouton Réinitialiser
    resetButton.addEventListener('click', function () {
        // Réinitialiser le mode nuit et autres
        body.classList.remove('night-mode', 'dyslexia-mode', 'color-blind-mode', 'no-animations');
        document.documentElement.style.fontSize = '';
        
        // Réinitialiser les classes des boutons
        document.querySelectorAll('button').forEach(btn => {
            btn.classList.remove('active');
        });

        // Réinitialiser le bouton Reset (change de couleur)
        resetButton.classList.add('used');
        setTimeout(function () {
            resetButton.classList.remove('used');
        }, 2000);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Lorsque le bouton burger est cliqué, on ouvre ou ferme le menu
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open'); // Ouvre/ferme le menu en ajoutant/retirant la classe "open"
        menuToggle.classList.toggle('active'); // Ajoute une animation au burger
    });
});

