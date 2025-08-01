// Animação cards
window.onload = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = "opacity 0.5s ease";
      card.style.opacity = 1;
    }, i * 200);
  });
};

// Conteúdos completos dos resumos
const fullSummaries = {
  windows: `
    <p><strong>Windows</strong> é um sistema operacional criado pela Microsoft, lançado pela primeira vez em 1985. Ele oferece uma interface gráfica amigável, permitindo interação com o computador por janelas, ícones e menus.</p>
    <p><strong>Características:</strong> interface gráfica (GUI), compatibilidade ampla, multitarefa, atualizações frequentes, integração com nuvem.</p>
    <p><strong>Versões conhecidas:</strong> Windows 95, XP, 7, 10, 11.</p>
    <p><strong>Vantagens:</strong> fácil de usar, suporte amplo, atualizações automáticas.</p>
    <p><strong>Desvantagens:</strong> vulnerável a vírus, licença paga, consumo de recursos.</p>
  `,
  macos: `
    <p><strong>macOS</strong> é o sistema operacional da Apple para computadores Mac. Conhecido por sua interface elegante, estabilidade e integração com o ecossistema Apple.</p>
    <p><strong>Características:</strong> interface refinada, desempenho estável, integração com iPhone/iPad, base Unix, atualizações gratuitas.</p>
    <p><strong>Versões populares:</strong> macOS X, Sierra, Mojave, Catalina, Big Sur, Monterey, Ventura.</p>
    <p><strong>Vantagens:</strong> interface consistente, seguro, performance otimizada, apps integrados.</p>
    <p><strong>Desvantagens:</strong> só para hardware Apple, software/acessórios caros, menos jogos/programas.</p>
  `,
  linux: `
    <p><strong>Linux</strong> é um sistema operacional livre e de código aberto criado por Linus Torvalds em 1991. É conhecido por sua segurança, estabilidade e flexibilidade.</p>
    <p><strong>Características:</strong> código aberto, alta segurança, multitarefa, personalizável, base Unix.</p>
    <p><strong>Distribuições populares:</strong> Ubuntu, Debian, Fedora, Mint, Arch Linux, Kali Linux.</p>
    <p><strong>Vantagens:</strong> gratuito, seguro, personalizável, roda em máquinas antigas, comunidade ativa.</p>
    <p><strong>Desvantagens:</strong> exige conhecimento técnico, menos softwares comerciais, compatibilidade limitada com jogos.</p>
  `,
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModal");

// Abrir modal e preencher conteúdo
document.querySelectorAll(".btn-details").forEach((btn) => {
  btn.addEventListener("click", () => {
    const os = btn.getAttribute("data-os");
    modalTitle.textContent = os.charAt(0).toUpperCase() + os.slice(1);
    modalBody.innerHTML = fullSummaries[os] || "<p>Resumo não disponível.</p>";
    modal.style.display = "block";
  });
});

// Fechar modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar modal clicando fora do conteúdo
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
