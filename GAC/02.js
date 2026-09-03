const dados = {
  // Restaurantes
  palh: { nome:'Palheiros', cat:'Restaurante', local:'Apodi - RN', insta:'https://instagram.com/palheirosrestaurante', zap:'https://wa.me/5584994040800', loca:'https://maps.google.com/?cid=6112973312867157753&entry=gps&g_st=aw' },
  espe: { nome:'Espeto de Ouro', cat:'Churrascaria', local:'Apodi - RN', insta:'https://instagram.com/espetodeouro', zap:'https://wa.me/5584996060600', loca:'https://maps.google.com/?cid=430885642499483640&entry=gps&g_st=aw' },
  novo: { nome:'Novo Sabor', cat:'Petiscaria', local:'Apodi - RN', insta:'https://instagram.com/petiscaria_novo_sabor_', zap:'https://wa.me/5584994208328', loca:'https://maps.app.goo.gl/B8JZZrUDGoBg14V38' },
  aabb: { nome:'AABB', cat:'Restaurante', local:'Apodi - RN', insta:'https://instagram.com/aabbapodi', zap:'https://wa.me/5584996340129', loca:'https://maps.google.com/?cid=13606427193244036249&entry=gps&g_st=aw' },
  lamp: { nome:'Lamparina', cat:'Pizzaria', local:'Apodi - RN', insta:'https://instagram.com/pizzaria_lamparina', zap:'https://wa.me/5584933332925', loca:'https://maps.app.goo.gl/42h5pPZNM7WsLEEC8' },
  espi: { nome:'Espetinho Praxedes', cat:'Espetinho', local:'Apodi - RN', insta:'https://instagram.com/espetinhopraxedes', zap:'https://wa.me/55849', loca:'https://maps.app.goo.gl/u3nWQcjSMaRXNU7w7' },
  case: { nome:'Gostinho Caseiro', cat:'Comida Caseira', local:'Apodi - RN', insta:'https://instagram.com/gostinho_caseiroo', zap:'https://wa.me/5584991480186', loca:'https://maps.app.goo.gl/8EAksg9SKks87mf28' },
  para: { nome:'Paraíba Salgados', cat:'Salgados', local:'Apodi - RN', insta:'https://instagram.com/paraiba_salgados_apodi', zap:'https://wa.me/5584996469958', loca:'' },
  dssa: { nome:'DS Salgados', cat:'Salgados & Bolos', local:'Apodi - RN', insta:'https://instagram.com/delivery_salgadosbolos', zap:'https://wa.me/55849494343813', loca:'' },
  chur: { nome:'Churrascaria Apodi', cat:'Churrascaria', local:'Apodi - RN', insta:'https://instagram.com/churrascariaapodi', zap:'https://wa.me/5584999663385', loca:'' },
  mati: { nome:'Pastelaria Matias', cat:'Pastelaria', local:'Apodi - RN', insta:'https://instagram.com/pastelaria_matias', zap:'https://wa.me/5584994242757', loca:'' },
  reil: { nome:'Rei do Lanche', cat:'Lanchonete', local:'Apodi - RN', insta:'https://instagram.com/oreidolanchepizzariaoficial', zap:'https://wa.me/5584991915772', loca:'https://maps.google.com/?cid=10914834443010279695&entry=gps&g_st=aw' },
  dgus: { nome:'Dgust', cat:'Restaurante', local:'Apodi - RN', insta:'https://instagram.com/dgustapodi', zap:'https://wa.me/5584991547056', loca:'' },
  quio: { nome:'Quiosque BB', cat:'Restaurante', local:'Apodi - RN', insta:'https://instagram.com/quiosquebembom', zap:'https://wa.me/5584994924323', loca:'' },
  toco: { nome:'TôComFome', cat:'Restaurante', local:'Apodi - RN', insta:'https://instagram.com/tocomfomeapodi', zap:'https://wa.me/55849', loca:'' },
  chef: { nome:'O Chef', cat:'Restaurante', local:'Apodi - RN', insta:'https://instagram.com/ochefmarmitaria_', zap:'https://wa.me/55849', loca:'' },
  card: { nome:'Churrascaria Cardoso', cat:'Churrascaria', local:'Apodi - RN', insta:'https://instagram.com/churrascariacardoso', zap:'https://wa.me/55849', loca:'' },
  flix: { nome:'Açaí Flix', cat:'Açaí', local:'Apodi - RN', insta:'https://instagram.com/acaiflix_burguer', zap:'https://wa.me/55849', loca:'' },
  impe: { nome:'Império Açaí', cat:'Açaí', local:'Apodi - RN', insta:'https://instagram.com/imperio_acai', zap:'https://wa.me/55849', loca:'' },
  mari: { nome:'Açaí da Maria', cat:'Açaí', local:'Apodi - RN', insta:'https://instagram.com/acaidamariaa_', zap:'https://wa.me/55849', loca:'' },
  poin: { nome:'Point do Açaí', cat:'Açaí', local:'Apodi - RN', insta:'https://instagram.com/pointdoacaiapodi', zap:'https://wa.me/55849', loca:'' },
  kane: { nome:'Kanecão', cat:'Restaurante', local:'Apodi - RN', insta:'https://instagram.com/kanecaoapodi', zap:'https://wa.me/55849', loca:'' },
  dall: { nome:'Dallas Grill', cat:'Churrascaria', local:'Apodi - RN', insta:'https://instagram.com/dallasgrillapodi', zap:'https://wa.me/55849', loca:'' },
  cusc: { nome:'Cuscuzeira Nogueira', cat:'Restaurante', local:'Apodi - RN', insta:'https://www.instagram.com/cuscuzerianogueira', zap:'https://wa.me/55849', loca:'' },
  prim: { nome:'Churrascaria Primavera', cat:'Churrascaria', local:'Apodi - RN', insta:'https://instagram.com/churrascaria_primavera', zap:'https://wa.me/55849', loca:'' },
  sush: { nome:'SushinCaza', cat:'Restaurante', local:'Apodi - RN', insta:'https://instagram.com/sushincaza', zap:'https://wa.me/55849', loca:'' },
  bute: { nome:'Kurrupius', cat:'Restaurante', local:'Apodi - RN', insta:'https://instagram.com/buteco_kurrupius', zap:'https://wa.me/55849', loca:'' },
  past: { nome:'Casa do Pastel', cat:'Pastelaria', local:'Apodi - RN', insta:'https://instagram.com/casa.do.pastel2', zap:'https://wa.me/55849', loca:'' },
  boms: { nome:'Bom Sabor', cat:'Pizzaria', local:'Apodi - RN', insta:'https://instagram.com/pizzaria_bom_sabor_2025', zap:'https://wa.me/55849', loca:'' },
  bras: { nome:'Espetinho na Brasa', cat:'Espetinho', local:'Apodi - RN', insta:'https://instagram.com/espetinhonabrasa8', zap:'https://wa.me/55849', loca:'' },
  favo: { nome:'Favorita', cat:'Pizzaria', local:'Apodi - RN', insta:'https://instagram.com/_pizzariafavorita', zap:'https://wa.me/5584997059178', loca:'https://maps.google.com/?cid=5437069981054668234&entry=gps&g_st=aw' },

  // Supermercados
  mont: { nome:'Rede Oeste Monteiro', cat:'Supermercado', local:'Apodi - RN', insta:'https://www.instagram.com/redeoestemonteiro', zap:'', loca:'' },
  sert: { nome:'Sertanejo Atacarejo', cat:'Atacarejo', local:'Apodi - RN', insta:'https://www.instagram.com/sertanejoatacarejo', zap:'', loca:'' },
  nona: { nome:'Nonato Atacarejo', cat:'Atacarejo', local:'Apodi - RN', insta:'https://www.instagram.com/nonatoatacarejo', zap:'', loca:'' },
  quei: { nome:'Queiroz Apodi', cat:'Supermercado', local:'Apodi - RN', insta:'https://www.instagram.com/queirozdeapodi', zap:'', loca:'' },
  bete: { nome:'Supermercado Betel', cat:'Supermercado', local:'Apodi - RN', insta:'https://www.instagram.com/betelsupermercadoapodi', zap:'', loca:'' },
  verd: { nome:'Casa da Verdura', cat:'Hortifruti', local:'Apodi - RN', insta:'https://www.instagram.com/casadaverdura.apodi', zap:'', loca:'' },
  bompre: { nome:'Bom Preço Apodi', cat:'Supermercado', local:'Apodi - RN', insta:'https://www.instagram.com/bom_preco_apodi', zap:'', loca:'' },
  laje: { nome:'Supermercado Lajedo', cat:'Supermercado', local:'Apodi - RN', insta:'https://www.instagram.com/lajedosupermercado', zap:'', loca:'' },

  // Serviços
  cici: { nome:'Cicinho', cat:'Consertos & Peças', local:'Apodi - RN', insta:'https://www.instagram.com/cicinho_consertosepecas', zap:'', loca:'' },
  wpap: { nome:'WP Apodi', cat:'Serviços', local:'Apodi - RN', insta:'https://www.instagram.com/wp.apodi', zap:'', loca:'' },
  nich: { nome:'Nicho Solar', cat:'Energia Solar', local:'Apodi - RN', insta:'https://www.instagram.com/nicho_solar', zap:'', loca:'' },
  simp: { nome:'Simplifique Smarthome', cat:'Automação', local:'Apodi - RN', insta:'https://www.instagram.com/simplifique_smarthome', zap:'', loca:'' },
  mtec: { nome:'Mtech', cat:'Energia Solar', local:'Apodi - RN', insta:'https://www.instagram.com/mtech_energiasolar', zap:'', loca:'' },
  igor: { nome:'Lava Jato do Igor', cat:'Lava Jato', local:'Apodi - RN', insta:'https://www.instagram.com/lava_jato_do_igor_', zap:'', loca:'' },
  emer: { nome:'Emerson Detailer', cat:'Detailing', local:'Apodi - RN', insta:'https://www.instagram.com/emerson.detailer', zap:'https://wa.me/5584996651484', loca:'Solidão 2 - Apodi' },
  onte: { nome:'OnTech Apodi', cat:'Tecnologia', local:'Apodi - RN', insta:'https://www.instagram.com/ontechapodi', zap:'', loca:'' },
  jc:   { nome:'JC Equipadora', cat:'Equipamentos', local:'Apodi - RN', insta:'https://www.instagram.com/jc.equipadora', zap:'', loca:'' },
  cear: { nome:'Ceará Autopeças', cat:'Autopeças', local:'Apodi - RN', insta:'https://www.instagram.com/cearaautopecas1', zap:'', loca:'' },
  cham: { nome:'Chamagáspoty', cat:'Gás', local:'Apodi - RN', insta:'https://www.instagram.com/chamagaspoty', zap:'', loca:'' },
  loja: { nome:'Lojão Detailer', cat:'Detailing', local:'Apodi - RN', insta:'https://www.instagram.com/lojaodetailer', zap:'', loca:'' },
  apim: { nome:'Apodi Imports', cat:'Importados', local:'Apodi - RN', insta:'https://www.instagram.com/apodiimports', zap:'', loca:'' },
  agri: { nome:'Agrícola Safra', cat:'Agrícola', local:'Apodi - RN', insta:'https://www.instagram.com/agricola_safra', zap:'', loca:'' },
  gord: { nome:'Lava Jato do Gordinho', cat:'Lava Jato', local:'Apodi - RN', insta:'https://www.instagram.com/lavajatodogordinho0', zap:'', loca:'' },
  ftur: { nome:'FTurismo Apodi', cat:'Turismo', local:'Apodi - RN', insta:'https://www.instagram.com/fturismo_apodi', zap:'', loca:'' },
  uze: { nome:'Uze Multimarcas', cat:'Multimarcas', local:'Apodi - RN', insta:'https://www.instagram.com/uze_multimarcass', zap:'', loca:'' },
  topi: { nome:'TopImpress Apodi', cat:'Impressão', local:'Apodi - RN', insta:'https://www.instagram.com/topimpressapodi', zap:'', loca:'' },
  bike: { nome:'Box Lava Bikes', cat:'Lava Bikes', local:'Apodi - RN', insta:'https://www.instagram.com/boxlavabikes', zap:'', loca:'' },
  idea: { nome:'Ideal Vidraçaria', cat:'Vidraçaria', local:'Apodi - RN', insta:'https://www.instagram.com/idealvidracariaa', zap:'', loca:'' },

  // Materiais
  cons: { nome:'Construflor', cat:'Construção', local:'Apodi - RN', insta:'https://www.instagram.com/construflor_', zap:'', loca:'' },
  graf: { nome:'Gráfica Torres', cat:'Gráfica', local:'Apodi - RN', insta:'https://www.instagram.com/grafica_torres', zap:'', loca:'' },
  vale: { nome:'Construtora do Vale', cat:'Construtora', local:'Apodi - RN', insta:'https://www.instagram.com/construtoradovaleapodi', zap:'', loca:'' },
  melo: { nome:'RedeContMelo Apodi', cat:'Materiais', local:'Apodi - RN', insta:'https://www.instagram.com/redecontmeloapodi', zap:'', loca:'' },
};


const top3Restaurantes = [
  { id: "reil", nome: "Rei do Lanche", cat: "Lanchonete", rating: 4.3, reviews_count: 257 },
  { id: "espe", nome: "Espeto de Ouro", cat: "Restaurante", rating: 4.4, reviews_count: 529 },
  { id: "palh", nome: "Palheiros", cat: "Restaurante", rating: 4.4, reviews_count: 646 }
];

function montarTop3() {
  const grid = document.querySelector("#top3-grid");
  if (!grid) return;

  const medals = ["🥇", "🥈", "🥉"];

  const lista = [...top3Restaurantes]
    .filter(r => typeof r.rating === "number")
    .sort((a, b) => {
      if (b.rating !== a.rating) return b.rating - a.rating;
      return (b.reviews_count || 0) - (a.reviews_count || 0);
    })
    .slice(0, 3);

  grid.innerHTML = lista.map((r, i) => `
    <div class="ranking-card" onclick="abrir('${r.id}')">
      <span class="ranking-medal">${medals[i]}</span>
      <h3 class="ranking-name">${r.nome}</h3>
      <p class="ranking-cat">${r.cat}</p>
      <div class="ranking-rating">
        <span class="star">★</span>
        ${r.rating.toFixed(1)}
        ${r.reviews_count ? ` (${r.reviews_count} avaliações)` : ""}
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", montarTop3);


function abrir(id) {
  const item = dados[id];
  if (!item) return;

  document.getElementById('conteudo').innerHTML = `
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

  document.getElementById('sidebar').classList.add('ativo');
  document.getElementById('sidebar-overlay').classList.add('ativo');
  document.body.style.overflow = 'hidden';
}

function fechar() {
  document.getElementById('sidebar').classList.remove('ativo');
  document.getElementById('sidebar-overlay').classList.remove('ativo');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fechar();
});


function filtrar() {
  const input = document.getElementById('pesquisa').value.toLowerCase().trim();
  const cards = document.querySelectorAll('.biz-card');
  const grids = document.querySelectorAll('.biz-grid');

  if (!input) {
    cards.forEach(c => c.classList.remove('hidden'));
    grids.forEach(g => {
      const empty = g.querySelector('.empty-state');
      if (empty) empty.remove();
    });
    return;
  }

  const matchingIds = Object.keys(dados).filter(id => {
    const item = dados[id];
    return (item.nome + item.cat + item.local).toLowerCase().includes(input);
  });

  cards.forEach(card => {
    const onclick = card.getAttribute('onclick') || '';
    const match = onclick.match(/abrir\('([^']+)'\)/);
    if (match) {
      card.classList.toggle('hidden', !matchingIds.includes(match[1]));
    }
  });

  grids.forEach(grid => {
    const existing = grid.querySelector('.empty-state');
    const visible = [...grid.querySelectorAll('.biz-card')].some(c => !c.classList.contains('hidden'));
    if (!visible && !existing) {
      const msg = document.createElement('div');
      msg.className = 'empty-state';
      msg.textContent = 'Nenhum resultado encontrado.';
      grid.appendChild(msg);
    } else if (visible && existing) {
      existing.remove();
    }
  });
}


function highlightActiveSection() {
  const sections = ['restaurantes', 'supermercados', 'servicos', 'construcao'];
  const navLinks = document.querySelectorAll('.nav-link');
  let activeId = sections[0];

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
      activeId = id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === activeId);
  });
}

window.addEventListener('scroll', highlightActiveSection, { passive: true });


window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });


document.querySelectorAll('.nav-link, .nav-link-mobile, .cat-card').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    e.preventDefault();
    const target = document.getElementById(href.substring(1));
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
    document.getElementById('mobileMenu').classList.remove('open');
  });
});


document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});


const catalogoDados = [
  { id:'palh', nome:'Palheiros', cat:'Restaurante', tags:['almoço','refeição','prato feito','comida caseira','arroz','feijão','frango assado'], insta:'https://instagram.com/palheirosrestaurante', zap:'https://wa.me/5584994040800', loca:'https://maps.google.com/?cid=6112973312867157753' },
  { id:'espe', nome:'Espeto de Ouro', cat:'Churrascaria', tags:['espeto','churrasco','churrascaria','picanha','costela','brasa','carne assada','linguiça','frango no espeto'], insta:'https://instagram.com/espetodeouro', zap:'https://wa.me/5584996060600', loca:'https://maps.google.com/?cid=430885642499483640' },
  { id:'novo', nome:'Novo Sabor', cat:'Petiscaria', tags:['petisco','tira-gosto','porção','aperitivo','camarão','batata frita','isca de frango','cerveja'], insta:'https://instagram.com/petiscaria_novo_sabor_', zap:'https://wa.me/5584994208328', loca:'' },
  { id:'aabb', nome:'AABB', cat:'Restaurante', tags:['almoço','buffet','refeição completa','prato feito','jantar','eventos'], insta:'https://instagram.com/aabbapodi', zap:'https://wa.me/5584996340129', loca:'https://maps.google.com/?cid=13606427193244036249' },
  { id:'lamp', nome:'Lamparina', cat:'Pizzaria', tags:['pizza','pizzaria','pizza calabresa','pizza mussarela','pizza frango','pizza portuguesa','brotinho','rodízio de pizza','massa'], insta:'https://instagram.com/pizzaria_lamparina', zap:'https://wa.me/5584933332925', loca:'https://maps.app.goo.gl/42h5pPZNM7WsLEEC8' },
  { id:'espi', nome:'Espetinho Praxedes', cat:'Espetinho', tags:['espetinho','espeto','churrasco','carne no palito','frango no palito','linguiça no palito','brasa'], insta:'https://instagram.com/espetinhopraxedes', zap:'', loca:'https://maps.app.goo.gl/u3nWQcjSMaRXNU7w7' },
  { id:'case', nome:'Gostinho Caseiro', cat:'Comida Caseira', tags:['comida caseira','marmita','quentinha','arroz','feijão','prato caseiro','almoço caseiro','barato'], insta:'https://instagram.com/gostinho_caseiroo', zap:'https://wa.me/5584991480186', loca:'' },
  { id:'para', nome:'Paraíba Salgados', cat:'Salgados', tags:['salgado','coxinha','risole','esfirra','salgadinho','enroladinho','quibe frito'], insta:'https://instagram.com/paraiba_salgados_apodi', zap:'https://wa.me/5584996469958', loca:'' },
  { id:'dssa', nome:'DS Salgados', cat:'Salgados & Bolos', tags:['salgado','bolo','coxinha','quibe','encomenda','festa','doce','sobremesa','salgadinho'], insta:'https://instagram.com/delivery_salgadosbolos', zap:'https://wa.me/55849494343813', loca:'' },
  { id:'chur', nome:'Churrascaria Apodi', cat:'Churrascaria', tags:['churrasco','churrascaria','picanha','costela','frango na brasa','carne assada','espeto corrido','rodízio de churrasco'], insta:'https://instagram.com/churrascariaapodi', zap:'https://wa.me/5584999663385', loca:'' },
  { id:'mati', nome:'Pastelaria Matias', cat:'Pastelaria', tags:['pastel','pastelaria','pastel de carne','pastel de frango','pastel de queijo'], insta:'https://instagram.com/pastelaria_matias', zap:'https://wa.me/5584994242757', loca:'' },
  { id:'reil', nome:'Rei do Lanche', cat:'Lanchonete', tags:['lanche','hamburguer','x-burguer','hot dog','cachorro quente','sanduíche','batata frita','delivery de lanche'], insta:'https://instagram.com/oreidolanchepizzariaoficial', zap:'https://wa.me/5584991915772', loca:'https://maps.google.com/?cid=10914834443010279695' },
  { id:'dgus', nome:'Dgust', cat:'Restaurante', tags:['almoço','jantar','refeição','prato feito','comida variada','restaurante'], insta:'https://instagram.com/dgustapodi', zap:'https://wa.me/5584991547056', loca:'' },
  { id:'sush', nome:'SushinCaza', cat:'Restaurante', tags:['sushi','comida japonesa','jantar','restaurante'], insta:'https://instagram.com/sushincaza', zap:'https://wa.me/55849', loca:'' },
  { id:'quio', nome:'Quiosque BB', cat:'Restaurante', tags:['restaurante','almoço','petisco','porção'], insta:'https://instagram.com/quiosquebembom', zap:'https://wa.me/5584994924323', loca:'' },
  { id:'toco', nome:'TôComFome', cat:'Restaurante', tags:['restaurante','almoço','prato feito','marmita'], insta:'https://instagram.com/tocomfomeapodi', zap:'https://wa.me/55849', loca:'' },
  { id:'chef', nome:'O Chef', cat:'Restaurante', tags:['marmita','marmitaria','almoço','prato feito','comida caseira'], insta:'https://instagram.com/ochefmarmitaria_', zap:'https://wa.me/55849', loca:'' },
  { id:'card', nome:'Churrascaria Cardoso', cat:'Churrascaria', tags:['churrasco','churrascaria','picanha','costela','carne assada','brasa'], insta:'https://instagram.com/churrascariacardoso', zap:'https://wa.me/55849', loca:'' },
  { id:'flix', nome:'Açaí Flix', cat:'Açaí', tags:['açaí','sorvete','sobremesa','lanche'], insta:'https://instagram.com/acaiflix_burguer', zap:'https://wa.me/55849', loca:'' },
  { id:'impe', nome:'Império Açaí', cat:'Açaí', tags:['açaí','sobremesa'], insta:'https://instagram.com/imperio_acai', zap:'https://wa.me/55849', loca:'' },
  { id:'mari', nome:'Açaí da Maria', cat:'Açaí', tags:['açaí','sobremesa'], insta:'https://instagram.com/acaidamariaa_', zap:'https://wa.me/55849', loca:'' },
  { id:'poin', nome:'Point do Açaí', cat:'Açaí', tags:['açaí','sobremesa'], insta:'https://instagram.com/pointdoacaiapodi', zap:'https://wa.me/55849', loca:'' },
  { id:'kane', nome:'Kanecão', cat:'Restaurante', tags:['restaurante','almoço','petisco','bar'], insta:'https://instagram.com/kanecaoapodi', zap:'https://wa.me/55849', loca:'' },
  { id:'dall', nome:'Dallas Grill', cat:'Churrascaria', tags:['churrasco','churrascaria','grelhados','carne assada','picanha'], insta:'https://instagram.com/dallasgrillapodi', zap:'https://wa.me/55849', loca:'' },
  { id:'cusc', nome:'Cuscuzeira Nogueira', cat:'Restaurante', tags:['cuscuz','café da manhã','restaurante','comida nordestina'], insta:'https://www.instagram.com/cuscuzerianogueira', zap:'https://wa.me/55849', loca:'' },
  { id:'prim', nome:'Churrascaria Primavera', cat:'Churrascaria', tags:['churrasco','churrascaria','picanha','costela'], insta:'https://instagram.com/churrascaria_primavera', zap:'https://wa.me/55849', loca:'' },
  { id:'bute', nome:'Kurrupius', cat:'Restaurante', tags:['buteco','petisco','porção','bar'], insta:'https://instagram.com/buteco_kurrupius', zap:'https://wa.me/55849', loca:'' },
  { id:'past', nome:'Casa do Pastel', cat:'Pastelaria', tags:['pastel','pastelaria','pastel de carne','pastel de queijo','pastel de frango'], insta:'https://instagram.com/casa.do.pastel2', zap:'https://wa.me/55849', loca:'' },
  { id:'boms', nome:'Bom Sabor', cat:'Pizzaria', tags:['pizza','pizzaria','massa','brotinho'], insta:'https://instagram.com/pizzaria_bom_sabor_2025', zap:'https://wa.me/55849', loca:'' },
  { id:'bras', nome:'Espetinho na Brasa', cat:'Espetinho', tags:['espetinho','espeto','churrasco','brasa','carne no palito'], insta:'https://instagram.com/espetinhonabrasa8', zap:'https://wa.me/55849', loca:'' },
  { id:'favo', nome:'Favorita', cat:'Pizzaria', tags:['pizza','pizzaria','massa','rodízio de pizza'], insta:'https://instagram.com/_pizzariafavorita', zap:'https://wa.me/5584997059178', loca:'https://maps.google.com/?cid=5437069981054668234&entry=gps&g_st=aw' },
];

const mapaDeTermos = {
  'pizza':        ['lamp', 'palh', 'espe', 'aabb', 'boms', 'favo'],
  'pizzaria':     ['lamp', 'boms', 'favo'],
  'massa':        ['lamp', 'boms', 'favo'],
  'brotinho':     ['lamp'],
  'rodízio':      ['lamp', 'chur', 'favo'],
  'churrasco':    ['espe', 'espi', 'chur', 'card', 'dall', 'prim', 'bras'],
  'churrascaria': ['espe', 'chur', 'card', 'dall', 'prim'],
  'picanha':      ['espe', 'chur', 'card', 'dall', 'prim'],
  'costela':      ['espe', 'chur', 'card', 'prim'],
  'brasa':        ['espe', 'espi', 'chur', 'card', 'bras'],
  'espeto':       ['espe', 'espi', 'bras'],
  'espetinho':    ['espi', 'bras'],
  'pastel':       ['mati', 'past'],
  'pastelaria':   ['mati', 'past'],
  'pastel de queijo': ['mati', 'past'],
  'pastel de carne':  ['mati', 'past'],
  'pastel de frango': ['mati', 'past'],
  'açaí':         ['flix', 'impe', 'mari', 'poin'],
  'sobremesa':    ['dssa', 'flix', 'impe', 'mari', 'poin'],
  'cuscuz':       ['cusc'],
  'café da manhã': ['cusc'],
  'marmita':      ['case', 'chef'],
  'marmitaria':   ['chef'],
  'salgado':      ['para', 'dssa'],
  'coxinha':      ['para', 'dssa'],
  'risole':       ['para'],
  'esfirra':      ['para'],
  'quibe':        ['dssa'],
  'salgadinho':   ['para', 'dssa'],
  'bolo':         ['dssa'],
  'doce':         ['dssa'],
  'festa':        ['dssa'],
  'encomenda':    ['dssa'],
  'hamburger':    ['reil'],
  'x-burguer':    ['reil'],
  'hot dog':      ['reil'],
  'cachorro quente': ['reil'],
  'sanduíche':    ['reil'],
  'petisco':      ['novo'],
  'tira-gosto':   ['novo'],
  'porção':       ['novo'],
  'aperitivo':    ['novo'],
  'camarão':      ['novo'],
  'caseiro':      ['case', 'palh'],
  'quentinha':    ['case'],
  'comida caseira': ['case', 'palh'],
  'almoço':       ['palh', 'aabb', 'case', 'dgus'],
  'buffet':       ['aabb'],
  'eventos':      ['aabb'],
  'restaurante':  ['palh', 'aabb', 'dgus', 'sush', 'quio', 'toco', 'chef', 'kane', 'cusc'],
  'buteco':       ['bute'],
  'bar':          ['bute', 'kane'],
  'refeição':     ['palh', 'aabb', 'dgus'],
  'prato feito':  ['palh', 'aabb', 'dgus', 'case'],
  'carne':        ['espe', 'chur', 'espi'],
  'frango':       ['espe', 'chur', 'espi', 'palh', 'case'],
  'arroz':        ['palh', 'case'],
  'sushi':        ['sush'],
  'comida japonesa': ['sush'],
  'hamburguer':   ['reil'],
  'lanche':       ['reil'],
  'jantar':       ['aabb', 'dgus', 'sush'],
  'feijão':       ['palh', 'case'],
};

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

function catalogoBuscar() {
  const input = document.getElementById('cat-input');
  const query = input.value.trim().toLowerCase();
  if (!query) return;

  catEsconder('cat-answer');
  catEsconder('cat-empty');
  catEsconder('cat-error');
  document.getElementById('cat-grid').innerHTML = '';
  catMostrar('cat-loading');

  setTimeout(() => {
    catEsconder('cat-loading');

    const placar = {};

    Object.keys(mapaDeTermos).forEach(termo => {
      if (query.includes(termo)) {
        mapaDeTermos[termo].forEach(id => {
          placar[id] = (placar[id] || 0) + termo.split(' ').length;
        });
      }
    });

    if (Object.keys(placar).length === 0) {
      catalogoDados.forEach(r => {
        r.tags.forEach(tag => {
          if (query.includes(tag) || tag.includes(query)) {
            placar[r.id] = (placar[r.id] || 0) + 1;
          }
        });
      });
    }

    const resultados = catalogoDados
      .filter(r => placar[r.id] > 0)
      .sort((a, b) => (placar[b.id] || 0) - (placar[a.id] || 0))
      .slice(0, 5);

    if (resultados.length === 0) {
      catMostrar('cat-empty');
      return;
    }

    const nomes = resultados.map(r => r.nome).join(', ');
    document.getElementById('cat-answer-text').innerHTML =
    `Para "<strong>${input.value.trim()}</strong>", encontrei ${resultados.length} ${resultados.length === 1 ? 'opção' : 'opções'} em Apodi: <strong>${nomes}</strong>.`;
    catMostrar('cat-answer');

    const motivosPorId = {
      'lamp': 'Especialista em pizzas, o lugar certo pra essa vontade!',
      'mati': 'Pastel de queijo, carne, frango e muito mais.',
      'espe': 'Espetos e carnes na brasa de qualidade.',
      'espi': 'Espetinhos variados direto da brasa.',
      'sush': 'O melhor da culinária japonesa, com sushi e sashimi frescos.',
      'divi': 'Hambúrgueres artesanais e lanches deliciosos para seu jantar.',
      'titi': 'Comida caseira com sabor de casa, ideal para almoço e jantar.',
      'chur': 'Churrascaria completa com cortes nobres.',
      'para': 'Salgados frescos: coxinha, risole, esfirra e mais.',
      'dssa': 'Salgados, bolos e doces, inclusive sob encomenda.',
      'reil': 'Lanches, hambúrgueres e hot dogs.',
      'novo': 'Petiscos, porções e tira-gostos.',
      'case': 'Comida caseira de verdade, marmita e quentinha.',
      'palh': 'Refeição completa com sabor de casa.',
      'aabb': 'Restaurante com buffet e refeições completas.',
      'dgus': 'Restaurante com cardápio variado.',
      'card': 'Churrascaria com cortes nobres na brasa.',
      'dall': 'Grelhados e carnes assadas de qualidade.',
      'prim': 'Churrascaria completa com cortes nobres.',
      'bras': 'Espetinhos na brasa, direto do palito.',
      'flix': 'Açaí cremoso e opções de lanche.',
      'impe': 'Açaí tradicional de Apodi.',
      'mari': 'Açaí feito com carinho, sabor de família.',
      'poin': 'Point queridinho dos amantes de açaí.',
      'cusc': 'Cuscuz e comida nordestina de verdade.',
      'past': 'Pastéis fritos na hora, recheios variados.',
      'boms': 'Pizza saborosa com boa relação custo-benefício.',
      'favo': 'Pizzaria favorita da cidade, com rodízio.',
      'kane': 'Petiscos e ambiente descontraído.',
      'bute': 'Buteco tradicional, petiscos e cerveja gelada.',
      'quio': 'Quiosque com petiscos e porções variadas.',
      'toco': 'Refeições rápidas e saborosas para o dia a dia.',
      'chef': 'Marmitas caseiras prontas para o seu almoço.',
    };

    const grid = document.getElementById('cat-grid');
    resultados.forEach((r, i) => {
      const card = document.createElement('div');
      card.className = 'cat-card';
      card.style.animationDelay = `${i * 0.08}s`;
      card.innerHTML = `
        <div class="cat-initials">${catIniciais(r.nome)}</div>
        <div class="cat-nome">${r.nome}</div>
        <div class="cat-motivo">${motivosPorId[r.id] || r.cat + ' em Apodi-RN.'}</div>
        <div class="cat-links">
          ${r.insta ? `<a href="${r.insta}" target="_blank" class="cat-link insta">📸 Insta</a>` : ''}
          ${r.zap   ? `<a href="${r.zap}"   target="_blank" class="cat-link zap">💬 Zap</a>`   : ''}
          ${r.loca  ? `<a href="${r.loca}"  target="_blank" class="cat-link">🗺️ Mapa</a>`      : ''}
        </div>`;
      grid.appendChild(card);
    });

    input.value = '';
  }, 600);
}
window.abrir = abrir;
window.fechar = fechar;

window.addEventListener('DOMContentLoaded', () => {
    const btnFechar = document.querySelector('.sidebar-close');
    if (btnFechar) btnFechar.onclick = fechar;

    const overlay = document.getElementById('sidebar-overlay');
    if (overlay) overlay.onclick = fechar;

    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});

let modoClaro = false;
let modoDaltonico = false;

function aplicarTemas() {
  const html = document.documentElement;
  const btnTheme = document.getElementById('btn-theme');
  const btnDaltonico = document.getElementById('btn-daltonico');

  if (modoClaro && modoDaltonico) {
    html.setAttribute('data-theme', 'light-daltonico');
  } else if (modoClaro) {
    html.setAttribute('data-theme', 'light');
  } else if (modoDaltonico) {
    html.setAttribute('data-theme', 'daltonico');
  } else {
    html.removeAttribute('data-theme');
  }

  if (btnTheme) {
    btnTheme.classList.toggle('active', modoClaro);
    const icon = btnTheme.querySelector('i');
    if (icon) {
      icon.className = modoClaro ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
  }

  if (btnDaltonico) {
    btnDaltonico.classList.toggle('active', modoDaltonico);
  }

  localStorage.setItem('gac_light', modoClaro);
  localStorage.setItem('gac_daltonico', modoDaltonico);
}

function alternarModoClaro() {
  modoClaro = !modoClaro;
  aplicarTemas();
}


const filters = {
  none:          '',
  protanopia:    'url(#protanopia)',
  deuteranopia:  'url(#deuteranopia)',
  tritanopia:    'url(#tritanopia)',
  achromatopsia: 'url(#achromatopsia)',
};


const labels = {
  none:          '',
  protanopia:    'Filtro ativo: Protanopia',
  deuteranopia:  'Filtro ativo: Deuteranopia',
  tritanopia:    'Filtro ativo: Tritanopia',
  achromatopsia: 'Filtro ativo: Monocromático (Preto e Branco)',
};


function toggleDropdown(e) {
  if (e) e.stopPropagation();
  const dropdown = document.getElementById('dropdown');
  if (dropdown) {
    dropdown.classList.toggle('open');
  }
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.acessibilidade-container')) {
    const dropdown = document.getElementById('dropdown');
    if (dropdown) {
      dropdown.classList.remove('open');
    }
  }
});

function setFilter(name, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  
  if (btn) {
    btn.classList.add('active');
  } else {
    const targetBtn = document.querySelector(`.filter-btn[onclick*="'${name}'"]`);
    if (targetBtn) targetBtn.classList.add('active');
  }

  document.documentElement.style.filter = filters[name] || '';

  const label = document.getElementById('filter-label');
  if (label) {
    if (name === 'none' || !labels[name]) {
      label.classList.remove('show');
    } else {
      label.textContent = labels[name];
      label.classList.add('show');
    }
  }

  localStorage.setItem('gac_daltonismo', name);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedFilter = localStorage.getItem('gac_daltonismo') || 'none';
  if (savedFilter !== 'none') {
    setFilter(savedFilter);
  }

  const savedLight = localStorage.getItem('gac_light');
  if (savedLight === 'true') {
    modoClaro = true;
    aplicarTemas();
  }
});