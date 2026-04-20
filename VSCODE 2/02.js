const dados = {
  // Restaurantes:
  palh: { nome: "Palheiros", cat: "Restaurante", local: "Apodi - RN", insta: "https://instagram.com/palheirosrestaurante", zap: "https://wa.me/5584994040800", loca: "https://maps.google.com/?cid=6112973312867157753&entry=gps&g_st=aw" },
  espe: { nome: "Espeto de Ouro", cat: "Churrascaria", local: "Apodi - RN", insta: "https://instagram.com/espetodeouro", zap: "https://wa.me/5584996060600", loca: "https://maps.google.com/?cid=430885642499483640&entry=gps&g_st=aw" },
  novo: { nome: "Novo Sabor", cat: "Petiscaria", local: "Apodi - RN", insta: "https://instagram.com/petiscaria_novo_sabor_", zap: "https://wa.me/5584994208328", loca: "" },
  aabb: { nome: "AABB", cat: "Restaurante", local: "Apodi - RN", insta: "https://instagram.com/aabbapodi", zap: "https://wa.me/5584996340129", loca: "https://maps.google.com/?cid=13606427193244036249&entry=gps&g_st=aw" },
  lamp: { nome: "Lamparina", cat: "Pizzaria", local: "Apodi - RN", insta: "https://instagram.com/pizzaria_lamparina", zap: "https://wa.me/5584933332925", loca: "https://maps.app.goo.gl/42h5pPZNM7WsLEEC8" },
  espi: { nome: "Espetinho Praxedes", cat: "Espetinho", local: "Apodi - RN", insta: "https://instagram.com/espetinhopraxedes", zap: "https://wa.me/55849", loca: "https://maps.app.goo.gl/u3nWQcjSMaRXNU7w7" },
  case: { nome: "Gostinho Caseiro", cat: "Comida caseira", local: "Apodi - RN", insta: "https://instagram.com/gostinho_caseiroo", zap: "https://wa.me/5584991480186", loca: "" },
  para: { nome: "Paraíba Salgados Apodi", cat: "Salgados", local: "Apodi - RN", insta: "https://instagram.com/paraiba_salgados_apodi", zap: "https://wa.me/5584996469958", loca: "" },
  dssa: { nome: "DS Salgados", cat: "Salgados", local: "Apodi - RN", insta: "https://instagram.com/delivery_salgadosbolos", zap: "https://wa.me/55849494343813", loca: "" },
  chur: { nome: "Churrascaria Apodi", cat: "Churrascaria", local: "Apodi - RN", insta: "https://instagram.com/churrascariaapodi", zap: "https://wa.me/5584999663385", loca: "" },
  mati: { nome: "Pastelaria Matias", cat: "Pastelaria", local: "Apodi - RN", insta: "https://instagram.com/pastelaria_matias", zap: "https://wa.me/5584994242757", loca: "" },
  reil: { nome: "Rei do Lanche", cat: "Lanchonete", local: "Apodi - RN", insta: "https://instagram.com/oreidolanchepizzariaoficial", zap: "https://wa.me/5584991915772", loca: "https://maps.google.com/?cid=10914834443010279695&entry=gps&g_st=aw" },
  dgus: { nome: "Dgust", cat: "Restaurante", local: "Apodi - RN", insta: "https://instagram.com/dgustapodi", zap: "https://wa.me/5584991547056", loca: "" },

  // Supermercados:
  mont: { nome: "Rede Oeste Monteiro", cat: "Supermercado", local: "Apodi - RN", insta: "https://www.instagram.com/redeoestemonteiro", zap: "", loca: "" },
  sert: { nome: "Sertanejo Atacarejo", cat: "Atacarejo", local: "Apodi - RN", insta: "https://www.instagram.com/sertanejoatacarejo", zap: "", loca: "" },
  nona: { nome: "Nonato Atacarejo", cat: "Atacarejo", local: "Apodi - RN", insta: "https://www.instagram.com/nonatoatacarejo", zap: "", loca: "" },
  quei: { nome: "Queiroz Apodi", cat: "Supermercado", local: "Apodi - RN", insta: "https://www.instagram.com/queirozdeapodi", zap: "", loca: "" },
  bete: { nome: "Supermercado Betel", cat: "Supermercado", local: "Apodi - RN", insta: "https://www.instagram.com/betelsupermercadoapodi", zap: "", loca: "" },
  verd: { nome: "Casa da Verdura Apodi", cat: "Hortifruti", local: "Apodi - RN", insta: "https://www.instagram.com/casadaverdura.apodi", zap: "", loca: "" },
  bompre: { nome: "Bom Preço Apodi", cat: "Supermercado", local: "Apodi - RN", insta: "https://www.instagram.com/bom_preco_apodi", zap: "", loca: "" },
  laje: { nome: "Supermercado Lajedo", cat: "Supermercado", local: "Apodi - RN", insta: "https://www.instagram.com/lajedosupermercado", zap: "", loca: "" },

  // Serviços:
  cici: { nome: "Cicinho", cat: "Consertos & Peças", local: "Apodi - RN", insta: "https://www.instagram.com/cicinho_consertosepecas", zap: "", loca: "" },
  wpap: { nome: "WP Apodi", cat: "Serviços", local: "Apodi - RN", insta: "https://www.instagram.com/wp.apodi", zap: "", loca: "" },
  nich: { nome: "Nicho Solar", cat: "Energia Solar", local: "Apodi - RN", insta: "https://www.instagram.com/nicho_solar", zap: "", loca: "" },
  simp: { nome: "Simplifique Smarthome", cat: "Automação", local: "Apodi - RN", insta: "https://www.instagram.com/simplifique_smarthome", zap: "", loca: "" },
  mtec: { nome: "Mtech", cat: "Energia Solar", local: "Apodi - RN", insta: "https://www.instagram.com/mtech_energiasolar", zap: "", loca: "" },
  igor: { nome: "Lava Jato do Igor", cat: "Lava Jato", local: "Apodi - RN", insta: "https://www.instagram.com/lava_jato_do_igor_", zap: "", loca: "" },
  emer: { nome: "Emerson Detailer", cat: "Detailing", local: "Apodi - RN", insta: "https://www.instagram.com/emerson.detailer", zap: "https://wa.me/5584996651484", loca: "Solidade 2 - Apodi" },
  onte: { nome: "OnTech Apodi", cat: "Tecnologia", local: "Apodi - RN", insta: "https://www.instagram.com/ontechapodi", zap: "", loca: "" },
  jc:   { nome: "JC Equipadora", cat: "Equipamentos", local: "Apodi - RN", insta: "https://www.instagram.com/jc.equipadora", zap: "", loca: "" },

  // Material de Construção:
  cons: { nome: "Construflor", cat: "Construção", local: "Apodi - RN", insta: "https://www.instagram.com/construflor_", zap: "", loca: "" },
  graf: { nome: "Gráfica Torres", cat: "Gráfica", local: "Apodi - RN", insta: "https://www.instagram.com/grafica_torres", zap: "", loca: "" },
  vale: { nome: "Construtora do Vale Apodi", cat: "Construtora", local: "Apodi - RN", insta: "https://www.instagram.com/construtoradovaleapodi", zap: "", loca: "" },
  melo: { nome: "RedeContMelo Apodi", cat: "Materiais", local: "Apodi - RN", insta: "https://www.instagram.com/redecontmeloapodi", zap: "", loca: "" },
};


function abrir(id) {
  const item = dados[id];
  if (!item) return;

  document.getElementById("conteudo").innerHTML = `
    <h2>${item.nome}</h2>
    <div class="sidebar-loc">📍 ${item.local} · ${item.cat}</div>
    <div class="sidebar-links">
      ${item.insta ? `
        <a href="${item.insta}" target="_blank" rel="noopener" class="sidebar-link link-insta">
          <span class="link-icon">📸</span>
          <span>Ver no Instagram</span>
        </a>` : ''}
      ${item.zap ? `
        <a href="${item.zap}" target="_blank" rel="noopener" class="sidebar-link link-zap">
          <span class="link-icon">💬</span>
          <span>Chamar no WhatsApp</span>
        </a>` : `<div class="sidebar-missing">💬 WhatsApp não informado</div>`}
      ${item.loca ? `
        <a href="${item.loca}" target="_blank" rel="noopener" class="sidebar-link link-map">
          <span class="link-icon">🗺️</span>
          <span>Ver localização</span>
        </a>` : `<div class="sidebar-missing">🗺️ Localização não informada</div>`}
    </div>
  `;

  document.getElementById("sidebar").classList.add("ativo");
  document.getElementById("sidebar-overlay").classList.add("ativo");
  document.body.style.overflow = "hidden";
}

function fechar() {
  document.getElementById("sidebar").classList.remove("ativo");
  document.getElementById("sidebar-overlay").classList.remove("ativo");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fechar();
});

// ===== FILTRO =====
function filtrar() {
  const input = document.getElementById("pesquisa").value.toLowerCase().trim();
  const cards = document.querySelectorAll(".biz-card");
  const grids = document.querySelectorAll(".biz-grid");

  if (!input) {
    cards.forEach(c => c.classList.remove("hidden"));
    grids.forEach(g => {
      const empty = g.querySelector(".empty-state");
      if (empty) empty.remove();
    });
    return;
  }

  const matchingIds = Object.keys(dados).filter(id => {
    const item = dados[id];
    return (item.nome + item.cat + item.local).toLowerCase().includes(input);
  });

  cards.forEach(card => {
    const onclick = card.getAttribute("onclick") || "";
    const match = onclick.match(/abrir\('([^']+)'\)/);
    if (match) {
      card.classList.toggle("hidden", !matchingIds.includes(match[1]));
    }
  });

  grids.forEach(grid => {
    const existing = grid.querySelector(".empty-state");
    const visible = [...grid.querySelectorAll(".biz-card")].some(c => !c.classList.contains("hidden"));
    if (!visible && !existing) {
      const msg = document.createElement("div");
      msg.className = "empty-state";
      msg.textContent = "Nenhum resultado encontrado.";
      grid.appendChild(msg);
    } else if (visible && existing) {
      existing.remove();
    }
  });
}


function highlightActiveSection() {
  const sections = ["restaurantes", "supermercados", "servicos", "construcao"];
  const navLinks = document.querySelectorAll(".nav-link");
  let activeId = sections[0];

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
      activeId = id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.section === activeId);
  });
}

window.addEventListener("scroll", highlightActiveSection, { passive: true });


window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });


document.querySelectorAll(".nav-link, .nav-link-mobile, .cat-card").forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    const target = document.getElementById(href.substring(1));
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    
    document.getElementById("mobileMenu").classList.remove("open");
  });
});


document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("open");
});

// ===== CATÁLOGO IA =====
const catalogoDados = [
  { id:'palh', nome:'Palheiros', cat:'Restaurante', tags:['almoço','refeição','comida','restaurante','prato feito','frango','carne','comida caseira'], insta:'https://instagram.com/palheirosrestaurante', zap:'https://wa.me/5584994040800', loca:'https://maps.google.com/?cid=6112973312867157753' },
  { id:'espe', nome:'Espeto de Ouro', cat:'Churrascaria', tags:['espeto','churrasco','carne','assado','churrascaria','frango','linguiça'], insta:'https://instagram.com/espetodeouro', zap:'https://wa.me/5584996060600', loca:'https://maps.google.com/?cid=430885642499483640' },
  { id:'novo', nome:'Novo Sabor', cat:'Petiscaria', tags:['petisco','tira-gosto','cerveja','porção','aperitivo','frango','camarão'], insta:'https://instagram.com/petiscaria_novo_sabor_', zap:'https://wa.me/5584994208328', loca:'' },
  { id:'aabb', nome:'AABB', cat:'Restaurante', tags:['restaurante','almoço','refeição','buffet','jantar','comida','eventos'], insta:'https://instagram.com/aabbapodi', zap:'https://wa.me/5584996340129', loca:'https://maps.google.com/?cid=13606427193244036249' },
  { id:'lamp', nome:'Lamparina', cat:'Pizzaria', tags:['pizza','pizzaria','massa','queijo','italiana','mozzarella','calabresa'], insta:'https://instagram.com/pizzaria_lamparina', zap:'https://wa.me/5584933332925', loca:'https://maps.app.goo.gl/42h5pPZNM7WsLEEC8' },
  { id:'espi', nome:'Espetinho Praxedes', cat:'Espetinho', tags:['espetinho','espeto','carne','frango','linguiça','assado'], insta:'https://instagram.com/espetinhopraxedes', zap:'', loca:'https://maps.app.goo.gl/u3nWQcjSMaRXNU7w7' },
  { id:'case', nome:'Gostinho Caseiro', cat:'Comida Caseira', tags:['comida caseira','marmita','feijão','arroz','frango','carne','almoço','simples'], insta:'https://instagram.com/gostinho_caseiroo', zap:'https://wa.me/5584991480186', loca:'' },
  { id:'para', nome:'Paraíba Salgados', cat:'Salgados', tags:['salgado','coxinha','risole','esfirra','lanche rápido','salgadinho'], insta:'https://instagram.com/paraiba_salgados_apodi', zap:'https://wa.me/5584996469958', loca:'' },
  { id:'dssa', nome:'DS Salgados', cat:'Salgados & Bolos', tags:['salgado','bolo','coxinha','festa','doce','sobremesa','encomenda'], insta:'https://instagram.com/delivery_salgadosbolos', zap:'https://wa.me/55849494343813', loca:'' },
  { id:'chur', nome:'Churrascaria Apodi', cat:'Churrascaria', tags:['churrasco','carne','assado','picanha','costela','frango','espeto'], insta:'https://instagram.com/churrascariaapodi', zap:'https://wa.me/5584999663385', loca:'' },
  { id:'mati', nome:'Pastelaria Matias', cat:'Pastelaria', tags:['pastel','pastelaria','frito','queijo','carne','frango','salgado'], insta:'https://instagram.com/pastelaria_matias', zap:'https://wa.me/5584994242757', loca:'' },
  { id:'reil', nome:'Rei do Lanche', cat:'Lanchonete', tags:['lanche','hamburguer','hot dog','sanduíche','batata','rápido','x-burguer'], insta:'https://instagram.com/oreidolanchepizzariaoficial', zap:'https://wa.me/5584991915772', loca:'https://maps.google.com/?cid=10914834443010279695' },
  { id:'dgus', nome:'Dgust', cat:'Restaurante', tags:['restaurante','almoço','refeição','comida','prato','jantar'], insta:'https://instagram.com/dgustapodi', zap:'https://wa.me/5584991547056', loca:'' },
];

function catalogoPreencher(texto) {
  document.getElementById('cat-input').value = texto;
  document.getElementById('cat-input').focus();
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('cat-input');
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); catalogoBuscar(); }
    });
  }
});

function catMostrar(id) { document.getElementById(id).classList.add('show'); }
function catEsconder(id) { document.getElementById(id).classList.remove('show'); }

function catIniciais(nome) {
  return nome.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase();
}

async function catalogoBuscar() {
  const input = document.getElementById('cat-input');
  const query = input.value.trim();
  if (!query) return;

  const btn = document.getElementById('cat-btn');
  btn.disabled = true;

  catEsconder('cat-answer');
  catEsconder('cat-empty');
  catEsconder('cat-error');
  document.getElementById('cat-grid').innerHTML = '';
  catMostrar('cat-loading');

  const prompt = `Você é o assistente do GAC (Guia Apodi Connect), guia de restaurantes de Apodi-RN, Brasil.

O usuário disse: "${query}"

Restaurantes disponíveis:
${catalogoDados.map(r => `- ${r.nome} (${r.cat}): ${r.tags.slice(0,5).join(', ')}`).join('\n')}

Selecione os mais relevantes e responda em JSON puro (sem markdown, sem backtick):
{
  "resumo": "frase curta e animada com a recomendação (máx 2 linhas, mencione os nomes)",
  "restaurantes": [
    { "id": "id_do_restaurante", "motivo": "frase curta do porquê" }
  ]
}

IDs válidos: palh, espe, novo, aabb, lamp, espi, case, para, dssa, chur, mati, reil, dgus
Se nenhum combinar, retorne restaurantes: []`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 800,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await res.json();
    const raw = data.content?.find(b => b.type === 'text')?.text || '{}';
    const parsed = JSON.parse(raw.replace(/```json|```/g, '').trim());

    catEsconder('cat-loading');

    if (parsed.resumo) {
      document.getElementById('cat-answer-text').innerHTML = parsed.resumo.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      catMostrar('cat-answer');
    }

    const recs = parsed.restaurantes || [];
    if (recs.length > 0) {
      const grid = document.getElementById('cat-grid');
      recs.forEach((rec, i) => {
        const r = catalogoDados.find(x => x.id === rec.id);
        if (!r) return;
        const card = document.createElement('div');
        card.className = 'cat-card';
        card.style.animationDelay = `${i * 0.08}s`;
        card.innerHTML = `
          <div class="cat-initials">${catIniciais(r.nome)}</div>
          <div class="cat-nome">${r.nome}</div>
          <div class="cat-motivo">${rec.motivo}</div>
          <div class="cat-links">
            ${r.insta ? `<a href="${r.insta}" target="_blank" class="cat-link insta">📸 Insta</a>` : ''}
            ${r.zap  ? `<a href="${r.zap}"  target="_blank" class="cat-link zap">💬 Zap</a>` : ''}
            ${r.loca ? `<a href="${r.loca}" target="_blank" class="cat-link">🗺️ Mapa</a>` : ''}
          </div>`;
        grid.appendChild(card);
      });
    } else {
      catMostrar('cat-empty');
    }

  } catch(err) {
    catEsconder('cat-loading');
    catMostrar('cat-error');
  }

  btn.disabled = false;
  input.value = '';
}