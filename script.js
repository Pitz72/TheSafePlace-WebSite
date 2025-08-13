document.addEventListener('DOMContentLoaded', () => {
    const ctaTextElement = document.getElementById('cta-text');

    // Controlla se l'elemento esiste per evitare errori
    if (ctaTextElement) {
        const textToType = 'run safe_place.exe';
        let charIndex = 0;

        function type() {
            if (charIndex < textToType.length) {
                ctaTextElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                // Velocità di digitazione (in millisecondi)
                setTimeout(type, 120);
            }
        }

        // Inizia a digitare dopo un breve ritardo per un effetto più naturale
        setTimeout(type, 1000);
    }
});
