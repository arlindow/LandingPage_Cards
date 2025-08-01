// Adiciona uma animação simples no carregamento
window.onload = () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease';
      card.style.opacity = 1;
    }, i * 200);
  });
};
