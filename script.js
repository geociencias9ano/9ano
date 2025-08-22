// Dados
const aplicativos = [
    { nome: "Be My Eyes", descricao: "Conecta pessoas cegas a voluntários para assistência visual." },
    { nome: "Google Lookout", descricao: "Usa IA para descrever o ambiente para pessoas com deficiência visual." },
    { nome: "Hand Talk", descricao: "Traduz textos e áudios para Libras em tempo real." }
];
const transportes = [
    { tipo: "Ônibus Urbano", recurso: "Elevador para cadeirantes, assentos preferenciais", disponivel: "Na maioria das cidades" },
    { tipo: "Táxi Adaptado", recurso: "Veículos com rampa ou elevador", disponivel: "Grandes centros urbanos" },
    { tipo: "Metrô", recurso: "Plataformas elevatórias, sinalização tátil", disponivel: "Capitais e regiões metropolitanas" }
];
const midias = [
    { nome: "Facebook Acessível", url: "https://www.facebook.com" },
    { nome: "Twitter com Acessibilidade", url: "https://www.twitter.com" },
    { nome: "Instagram Adaptado", url: "https://www.instagram.com" }
];

// ==========================
// Renderização de conteúdo
// ==========================
const listaApps = document.getElementById('lista-aplicativos');
aplicativos.forEach(app => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<h3>${app.nome}</h3><p>${app.descricao}</p>`;
    listaApps.appendChild(card);
});

const tabelaTransporte = document.getElementById('tabela-transporte');
transportes.forEach(t => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${t.tipo}</td><td>${t.recurso}</td><td>${t.disponivel}</td>`;
    tabelaTransporte.appendChild(row);
});

const listaMidias = document.getElementById('lista-midias');
midias.forEach(m => {
    if (m.url.startsWith("https://")) {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${m.url}" target="_blank" rel="noopener noreferrer">${m.nome}</a>`;
        listaMidias.appendChild(li);
    }
});

// ==========================
// Feedback
// ==========================
document.getElementById('form-feedback').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('mensagem-feedback').textContent = "Obrigado pelo seu feedback!";
    this.reset();
});

// ==========================
// Contador animado
// ==========================
let visitas = localStorage.getItem('contadorVisitas');
if (!visitas) {
    visitas = 1;
} else {
    visitas = parseInt(visitas) + 1;
}
localStorage.setItem('contadorVisitas', visitas);

function animarContador(id, valorFinal) {
    let contadorElemento = document.getElementById(id);
    let valorAtual = 0;
    let incremento = Math.ceil(valorFinal / 50);
    let intervalo = setInterval(() => {
        valorAtual += incremento;
        if (valorAtual >= valorFinal) {
            valorAtual = valorFinal;
            clearInterval(intervalo);
        }
        contadorElemento.textContent = valorAtual;
    }, 30);
}
animarContador('visitas', visitas);

// ==========================
// Botão de Acessibilidade
// ==========================
(function(){
    // CSS do botão e modal
    const css = `
      :root { --azul-clarinho: #d9ecff; --azul-borda:#60a5fa; --txt:#0b2a4a; }
      .acess-btn { position: fixed; right: 16px; bottom: 16px; width:56px; height:56px; border-radius:50%; background: var(--azul-clarinho); border:2px solid var(--azul-borda); box-shadow: 0 6px 16px rgba(0,0,0,.2); display:flex; align-items:center; justify-content:center; z-index: 9999; cursor: pointer; }
      .acess-btn svg { width: 28px; height: 28px; fill: var(--txt); }
      .acess-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.45); display:none; z-index: 9998; }
      .acess-dialog { position: fixed; left: 50%; transform: translateX(-50%); bottom: 0; width: 90%; max-width: 500px; background: #fff; border-top-left-radius: 18px; border-top-right-radius: 18px; box-shadow: 0 -6px 20px rgba(0,0,0,.25); padding: 16px; display:none; z-index: 10000; }
      .acess-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:10px; }
      .acess-header h2 { font-size:18px; margin:0; color:var(--txt); }
      .acess-close { background: none; border: none; cursor: pointer; }
      .acess-body { font-size:15px; color:var(--txt); max-height: 60vh; overflow-y:auto; }
      .acess-body audio { width: 100%; margin:10px 0; }
      .acess-body ul { margin:10px 0; padding-left: 18px; }
    `;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // Botão
    const fab = document.createElement('button');
    fab.className = 'acess-btn';
    fab.setAttribute('aria-label', 'Abrir acessibilidade');
    fab.innerHTML = `
      <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.5 6.5v6.9c0 .6.6 1 1.2.7l5.8-3.5c.5-.3.5-1.1 0-1.4l-5.8-3.4c-.6-.4-1.2.1-1.2.7z"/></svg>
    `;
    document.body.appendChild(fab);

    // Overlay e Modal
    const overlay = document.createElement('div');
    overlay.className = 'acess-overlay';
    const dialog = document.createElement('div');
    dialog.className = 'acess-dialog';
    dialog.innerHTML = `
      <div class="acess-header">
        <h2>Acessibilidade</h2>
        <button class="acess-close" aria-label="Fechar">?</button>
      </div>
      <div class="acess-body">
        <p>Bem-vindo(a)! Este site é pensado para ser acessível a todos.</p>
        <audio controls>
          <source src="audio/acessibilidade.mp3" type="audio/mpeg">
          Seu navegador não suporta áudio.
        </audio>
        <h3>O que você encontra aqui:</h3>
        <ul>
          <li>Conteúdo de Geociências do 9º Ano</li>
          <li>Imagens com descrição (texto alternativo)</li>
          <li>Navegação simples para celular e PC</li>
          <li>Foco visível para navegação por teclado</li>
        </ul>
        <p><strong>Transcrição do áudio:</strong> Este site apresenta conteúdos sobre acessibilidade, geociências e inclusão social.</p>
      </div>
    `;
    document.body.appendChild(overlay);
    document.body.appendChild(dialog);

    // Eventos
    fab.addEventListener('click', ()=>{ overlay.style.display='block'; dialog.style.display='block'; });
    overlay.addEventListener('click', ()=>{ overlay.style.display='none'; dialog.style.display='none'; });
    dialog.querySelector('.acess-close').addEventListener('click', ()=>{ overlay.style.display='none'; dialog.style.display='none'; });
})();
