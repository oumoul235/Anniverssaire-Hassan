// Création des cœurs qui tombent
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Position aléatoire
  heart.style.left = Math.random() * 100 + 'vw';
  
  // Taille aléatoire
  const size = Math.random() * 20 + 10;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  
  // Vitesse de chute aléatoire
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  
  // Opacité aléatoire
  heart.style.opacity = Math.random() * 0.7 + 0.3;
  
  document.querySelector('.hearts-container').appendChild(heart);
  
  // Suppression après l'animation
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Créer des cœurs régulièrement
setInterval(createHeart, 300);

// Créer des cœurs supplémentaires au clic
document.addEventListener('click', () => {
  for(let i = 0; i < 5; i++) {
    createHeart();
  }
});

// Animation au chargement
window.addEventListener('load', () => {
  document.querySelector('.content').style.animation = 'fadeIn 1.5s ease-out';
});