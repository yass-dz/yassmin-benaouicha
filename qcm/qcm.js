// script.js

// Définition des réponses correctes
const correctAnswers = {
    q1: '1916',
    q2: 'Bayerische Motoren Werke',
    q3: 'Munich',
    q4: 'BMW i4',
    q5: 'BMW Motorrad',
    q6: 'Sheer Driving Pleasure',
    q7: ['BMW M3', 'BMW M5'],
    q8: 'Bleu ciel',
    q9: 'Série 2 Active Tourer',
    q10: 'BMW 3/15'
};

// Bouton "Correction" - Calcul du score
document.getElementById('btnCorrection').addEventListener('click', () => {
    let score = 0;

    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        if (Array.isArray(correctAnswer)) {
            // Gestion des réponses multiples
            const selectedOptions = Array.from(document.querySelectorAll(`input[name="${question}"]:checked`))
                                         .map(option => option.value);
            if (correctAnswer.every(answer => selectedOptions.includes(answer)) &&
                selectedOptions.length === correctAnswer.length) {
                score++;
            }
        } else {
            // Gestion des réponses simples
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            if (selectedOption && selectedOption.value === correctAnswer) {
                score++;
            }
        }
    }

    alert(`Votre score est : ${score}/${Object.keys(correctAnswers).length}`);
});


// Bouton "Corrigé" - Affichage des réponses correctes
document.getElementById('btnCorrige').addEventListener('click', () => {
    const corriges = `
        <h1>Corrigé du QCM BMW</h1>
        <ul>
            <li>1. En quelle année BMW a-t-elle été fondée ? <strong>1916</strong></li>
            <li>2. Que signifie l'acronyme BMW ? <strong>Bayerische Motoren Werke</strong></li>
            <li>3. Dans quelle ville se trouve le siège social de BMW ? <strong>Munich</strong></li>
            <li>4. Quel est le modèle 100% électrique phare de BMW ? <strong>BMW i4</strong></li>
            <li>5. Quelle division de BMW fabrique des motos ? <strong>BMW Motorrad</strong></li>
            <li>6. Quel est le slogan actuel de BMW ? <strong>Sheer Driving Pleasure</strong></li>
            <li>7. Quels modèles appartiennent à la gamme M de BMW ? <strong>Bmw M3, Bmw M5</strong></li>
            <li>8. Quelle est la couleur de fond du logo BMW ? <strong>Bleu ciel</strong></li>
            <li>9. Quelle série de BMW est destinée aux familles ? <strong>Série 2 Active Tourer</strong></li>
            <li>10. Quel est le premier modèle de voiture produit par BMW ? <strong>BMW 3/15</strong></li>
        </ul>
        <button onclick="window.close()">Fermer</button>
    `;

    const corrigesWindow = window.open('', '', 'width=600,height=400');
    corrigesWindow.document.write(corriges);
});

// Bouton "Effacer" - Réinitialisation automatique (aucun JS nécessaire)
