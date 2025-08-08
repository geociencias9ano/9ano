// Lista de aplicativos
const aplicativos = [
    { nome: "Be My Eyes", descricao: "Conecta pessoas cegas a voluntários para assistência visual." },
    { nome: "Google Lookout", descricao: "Usa IA para descrever o ambiente para pessoas com deficiência visual." },
    { nome: "Hand Talk", descricao: "Traduz textos e áudios para Libras em tempo real." }
];

// Lista de transportes
const transportes = [
    { tipo: "Ônibus Urbano", recurso: "Elevador para cadeirantes, assentos preferenciais", disponivel: "Na maioria das cidades" },
    { tipo: "Táxi Adaptado", recurso: "Veículos com rampa ou elevador", disponivel: "Grandes centros urbanos" },
    { tipo: "Metrô", recurso: "Plataformas elevatórias, sinalização tátil", disponivel: "Capitais e regiões metropolitanas" }
];

// Lista de mídias sociais
const midias = [
    { nome: "Facebook Acessível", url: "https://www.facebook.com" },
    { nome: "Twitter com Acessibilidade", url: "https://www.twitter.com" },
    { nome: "Instagram Adaptado", url: "https://www.instagram.com" }
];

// Inserindo aplicativos
const listaApps = document.getElementById('lista-aplicativos');
aplicativos.forEach(app => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<h3>${app.nome}</h3><p>${app.descricao}</p>`;
    listaApps.appendChild(card);
});

// Inserindo transportes
const tabelaTransporte = document.getElementById('tabela-transporte');
transportes.forEach(t => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${t.tipo}</td><td>${t.recurso}</td><td>${t.disponivel}</td>`;
    tabelaTransporte.appendChild(row);
});

// Inserindo mídias sociais com validação de link
const listaMidias = document.getElementById('lista-midias');
midias.forEach(m => {
    if (m.url.startsWith("https://")) {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${m.url}" target="_blank" rel="noopener noreferrer">${m.nome}</a>`;
        listaMidias.appendChild(li);
    }
});
