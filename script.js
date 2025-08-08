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

// Renderização de conteúdo
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

// Feedback
document.getElementById('form-feedback').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('mensagem-feedback').textContent = "Obrigado pelo seu feedback!";
    this.reset();
});

// Contador animado
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
