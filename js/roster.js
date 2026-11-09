/* Roster ItalBasket Master 2026 — dati condivisi da home e pagina Squadra */
window.ROSTER = {
  players: [
    {n:0,  first:"Andrea",     last:"Sciarabba", role:"Ala grande",  photo:"sciarabba", full:"img/players/full/sciarabba.jpg"},
    {n:6,  first:"Christian",  last:"Bagioni",   role:"Play",        photo:"bagioni",   full:"img/players/full/bagioni.jpg"},
    {n:7,  first:"Leonardo",   last:"Busca",     role:"Play",        photo:"busca",     full:"img/players/full/busca.jpg"},
    {n:9,  first:"Mirko",      last:"Calanchi",  role:"Ala piccola", photo:"calanchi",  full:"img/players/full/calanchi.jpg"},
    {n:10, first:"Maurizio",   last:"Giusti",    role:"Guardia",     photo:"giusti",    full:"img/players/full/giusti.jpg"},
    {n:11, first:"Gianni",     last:"Muzzoni",   role:"Ala grande",  photo:"muzzoni",   full:"img/players/full/muzzoni.jpg"},
    {n:13, first:"Diego",      last:"Angemi",    role:"Play",        photo:"angemi",    full:"img/players/full/angemi.jpg"},
    {n:14, first:"Stefano",    last:"Zudetich",  role:"Ala grande",  photo:"zudetich",  full:"img/players/full/zudetich.jpg"},
    {n:33, first:"Michele",    last:"Bacocco",   role:"Guardia",     photo:"bacocco",   full:"img/players/full/bacocco.jpg"},
    {n:41, first:"Roberto",    last:"Chiacig",   role:"Pivot",       photo:"chiacig",   full:"img/players/full/chiacig.jpg"},
    {n:72, first:"Francesco",  last:"Pieroni",   role:"Ala grande",  photo:"pieroni",   full:"img/players/full/pieroni.jpg"},
    {n:74, first:"Ruben",      last:"Polselli",  role:"Pivot",       photo:"polselli",  full:"img/players/full/polselli.jpg"},
    {n:88, first:"Mario",      last:"Innocente", role:"Ala piccola", photo:"innocente", full:"img/roster/marioinnocente.jpg"}
  ],
  staff: [
    {n:"", first:"Fausto",     last:"Bernardelli", role:"Coach",                photo:"bernardelli", full:"img/players/full/bernardelli.jpg"},
    {n:"", first:"Berardino",  last:"Sorgente",    role:"Assistant coach",      photo:"sorgente",    full:"img/players/full/sorgente.jpg"},
    {n:"", first:"Duccio",     last:"Scarselli",   role:"Assistant coach",      photo:"scarselli",   full:"img/players/full/scarselli.jpg"},
    {n:"", first:"Maurizio",   last:"Mazzieri",    role:"General manager",      photo:"mazzieri",    full:"img/players/full/mazzieri.jpg"},
    {n:"", first:"Andrea",     last:"Mazzotti",    role:"Responsabile media",   photo:"mazzotti",    full:"img/players/full/mazzotti.jpg"},
    {n:"", first:"Francesca",  last:"Miccoli",     role:"Social media manager", photo:"miccoli",     full:"img/players/full/miccoli.jpg"},
    {n:"", first:"Mascia",     last:"Vollero",     role:"Public relations manager", photo:"vollero", full:"img/players/full/vollero.jpg"},
    {n:"", first:"Alessandro", last:"Adamidis",    role:"Fisioterapista",       photo:"adamidis",    full:"img/players/full/adamidis.jpg"}
  ]
};
window.pcard = function(p, staff){
  var num = staff ? '' : '<span class="pc-num" aria-hidden="true">'+p.n+'</span>';
  var ph = p.photo ? '<img src="img/players/'+p.photo+'.webp" alt="" loading="lazy">'
                   : '<span class="pc-empty"><img src="img/logo-tight.svg" alt=""><small>Foto in arrivo</small></span>';
  var meta = staff ? p.role : '#'+p.n+' <i>|</i> '+p.role;
  return '<button class="pcard'+(staff?' is-staff':'')+'" data-full="'+(p.full||'')+'" aria-label="'+p.first+' '+p.last+', '+p.role+(staff?'':', numero '+p.n)+(p.full?'. Apri la foto':'')+'">'
    + '<span class="pc-ph">'+num+ph+'</span>'
    + '<span class="pc-info"><span class="pc-first">'+p.first+'</span><span class="pc-last">'+p.last+'</span><span class="pc-meta">'+meta+'</span></span>'
    + '</button>';
};
