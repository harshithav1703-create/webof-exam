const PRODUCTS = {
  compass: {
    label: 'Navigation Instrument',
    title: 'Magnetic Compass',
    desc: 'A magnetic compass used to find direction (North, South, East, West). Essential for navigation, fieldwork, and survival.',
    features: [
      'Accurate to ±0.5° directional tolerance',
      'Orienteering for map alignment with terrain',
      'Liquid-damped needle for stable readings',
      'Durable scratch-resistant mineral crystal lens',
      'Luminous dial markings for low-light use',
      'Compact, portable, weatherproof casing'
    ],
    specs: [
      ['Diameter', '65 mm'], ['Weight', '42 g'],
      ['Accuracy', '±0.5°'], ['Housing', 'ABS Polymer'], ['Needle', 'Liquid Damped'],
    ],
    svgFront: `
      <circle cx="50" cy="50" r="38" stroke="#00c8ff" stroke-width="1.5"/>
      <circle cx="50" cy="50" r="28" stroke="#0066ff" stroke-width="0.8" stroke-dasharray="4 2"/>
      <circle cx="50" cy="50" r="5" fill="rgba(0,200,255,0.3)" stroke="#00c8ff" stroke-width="1"/>
      <line x1="50" y1="22" x2="50" y2="12" stroke="#00c8ff" stroke-width="1.5"/>
      <line x1="50" y1="78" x2="50" y2="88" stroke="#0066ff" stroke-width="1"/>
      <line x1="22" y1="50" x2="12" y2="50" stroke="#0066ff" stroke-width="1"/>
      <line x1="78" y1="50" x2="88" y2="50" stroke="#0066ff" stroke-width="1"/>
      <polygon points="50,20 47,50 50,55 53,50" fill="rgba(255,50,50,0.9)"/>
      <polygon points="50,80 47,50 50,45 53,50" fill="rgba(200,220,255,0.7)"/>
      <circle cx="50" cy="16" r="2.5" fill="#00c8ff"/>
      <text x="50" y="10" text-anchor="middle" font-size="7" fill="#00c8ff" font-family="Rajdhani,sans-serif" font-weight="700">N</text>
      <text x="50" y="96" text-anchor="middle" font-size="7" fill="#0066ff" font-family="Rajdhani,sans-serif">S</text>
      <text x="14" y="53" text-anchor="middle" font-size="6" fill="#0066ff" font-family="Rajdhani,sans-serif">W</text>
      <text x="87" y="53" text-anchor="middle" font-size="6" fill="#0066ff" font-family="Rajdhani,sans-serif">E</text>
    `,
    svgBack: `
      <circle cx="50" cy="50" r="38" stroke="#0066ff" stroke-width="1.2"/>
      <circle cx="50" cy="50" r="20" stroke="rgba(0,200,255,0.25)" stroke-width="0.7" stroke-dasharray="2 3"/>
      <circle cx="50" cy="50" r="5" fill="rgba(0,102,255,0.3)" stroke="#0066ff"/>
    `,
    thumbSvgs: [
      `<circle cx="50" cy="50" r="35" stroke="#00c8ff" stroke-width="1.5"/><polygon points="50,22 47,50 50,55 53,50" fill="rgba(255,50,50,0.9)"/><polygon points="50,78 47,50 50,45 53,50" fill="rgba(200,220,255,0.7)"/>`,
      `<circle cx="50" cy="50" r="35" stroke="#0066ff" stroke-width="1"/><line x1="50" y1="15" x2="50" y2="85" stroke="rgba(0,200,255,0.3)" stroke-width="0.7"/><line x1="15" y1="50" x2="85" y2="50" stroke="rgba(0,200,255,0.3)" stroke-width="0.7"/>`,
      `<circle cx="50" cy="50" r="38" stroke="#0066ff" stroke-width="1.5"/><circle cx="50" cy="50" r="10" fill="rgba(0,200,255,0.15)" stroke="#00c8ff"/><circle cx="50" cy="50" r="4" fill="rgba(0,200,255,0.5)"/>`
    ]
  },

  microscope: {
    label: 'Optical Instrument',
    title: 'Microscope Film Viewer',
    desc: 'A Microscope — used to view film strips or analyse microscopic specimens with precision.',
    features: [
      'Focusable coarse and fine adjustments',
      '3 switchable objective lens magnifications',
      'Wide-field eyepiece for clear viewing',
      'Integrated LED stage illumination',
      'Mechanical XY stage for precise positioning',
      'Everything is intuitive, adjustable, and science-based'
    ],
    specs: [
      ['Magnification', '40×–400×'], ['Eyepiece', '10× WF'],
      ['Objectives', '4×, 10×, 40×'], ['Illumination', 'LED Stage'], ['Stage', '120×90 mm'],
    ],
    svgFront: `
      <rect x="38" y="10" width="24" height="55" rx="4" stroke="#00c8ff" stroke-width="1.2" fill="rgba(0,100,255,0.08)"/>
      <rect x="43" y="6" width="14" height="10" rx="3" stroke="#00c8ff" stroke-width="1"/>
      <circle cx="50" cy="72" r="7" stroke="#0066ff" stroke-width="1.2" fill="rgba(0,60,200,0.15)"/>
      <circle cx="50" cy="72" r="3" fill="rgba(0,200,255,0.3)" stroke="#00c8ff" stroke-width="0.8"/>
      <rect x="28" y="60" width="44" height="6" rx="2" stroke="#0066ff" stroke-width="1"/>
      <line x1="38" y1="40" x2="28" y2="60" stroke="#00c8ff" stroke-width="1.5"/>
      <rect x="24" y="82" width="52" height="8" rx="3" stroke="#0066ff" stroke-width="1.2" fill="rgba(0,50,150,0.1)"/>
      <circle cx="36" cy="40" r="5" stroke="#0066ff" stroke-width="1"/>
      <circle cx="36" cy="40" r="2" fill="rgba(0,200,255,0.4)"/>
    `,
    svgBack: `
      <rect x="38" y="10" width="24" height="55" rx="4" stroke="#0066ff" stroke-width="1.2"/>
      <circle cx="50" cy="72" r="7" stroke="#0066ff" stroke-width="1.2"/>
      <rect x="24" y="82" width="52" height="8" rx="3" stroke="#0066ff" stroke-width="1"/>
    `,
    thumbSvgs: [
      `<rect x="38" y="10" width="24" height="55" rx="4" stroke="#00c8ff" stroke-width="1.5"/><circle cx="50" cy="72" r="7" stroke="#00c8ff" stroke-width="1.2"/>`,
      `<rect x="24" y="82" width="52" height="8" rx="3" stroke="#0066ff" stroke-width="1.2"/><circle cx="36" cy="40" r="6" stroke="#00c8ff" stroke-width="1"/>`,
      `<circle cx="50" cy="72" r="10" stroke="#0066ff" stroke-width="1"/><circle cx="50" cy="72" r="5" fill="rgba(0,200,255,0.3)" stroke="#00c8ff" stroke-width="0.8"/>`
    ]
  },

  lantern: {
    label: 'Solar Energy Device',
    title: 'Solar Lantern',
    desc: 'A solar-powered lantern that harnesses energy from sunlight. Ideal for outdoor and emergency use.',
    features: [
      'High-efficiency monocrystalline solar panel top',
      'Brightness adjustable with 3 lighting levels',
      'LED lifespan of 50,000+ hours',
      'USB charging for mobile devices',
      'Waterproof IP65 rating — suitable for outdoors',
      'Weighs only 320 g — lightweight for camping'
    ],
    specs: [
      ['Power Source', 'Solar + USB'], ['Battery', '2000 mAh Li-ion'],
      ['Light Output', '200 Lumens'], ['Charge Time', '6–8 hrs (solar)'], ['IP Rating', 'IP65'],
    ],
    svgFront: `
      <rect x="32" y="28" width="36" height="50" rx="6" stroke="#00c8ff" stroke-width="1.2" fill="rgba(0,100,255,0.08)"/>
      <rect x="30" y="14" width="40" height="14" rx="3" stroke="#00c8ff" stroke-width="1.2" fill="rgba(0,60,200,0.15)"/>
      <line x1="40" y1="14" x2="40" y2="28" stroke="rgba(0,200,255,0.3)" stroke-width="0.7"/>
      <line x1="50" y1="14" x2="50" y2="28" stroke="rgba(0,200,255,0.3)" stroke-width="0.7"/>
      <line x1="60" y1="14" x2="60" y2="28" stroke="rgba(0,200,255,0.3)" stroke-width="0.7"/>
      <line x1="30" y1="21" x2="70" y2="21" stroke="rgba(0,200,255,0.3)" stroke-width="0.7"/>
      <path d="M42 14 Q50 4 58 14" stroke="#0066ff" stroke-width="1.2" fill="none"/>
      <circle cx="50" cy="53" r="14" stroke="rgba(255,220,0,0.5)" stroke-width="0.8" stroke-dasharray="3 2"/>
      <circle cx="50" cy="53" r="8" fill="rgba(255,200,0,0.2)" stroke="rgba(255,220,0,0.8)" stroke-width="1"/>
      <rect x="30" y="78" width="40" height="7" rx="3" stroke="#0066ff" stroke-width="1" fill="rgba(0,50,150,0.1)"/>
    `,
    svgBack: `
      <rect x="32" y="28" width="36" height="50" rx="6" stroke="#0066ff" stroke-width="1.2"/>
      <rect x="30" y="14" width="40" height="14" rx="3" stroke="#0066ff" stroke-width="1"/>
      <circle cx="50" cy="53" r="10" fill="rgba(255,200,0,0.1)" stroke="rgba(255,200,0,0.5)" stroke-width="0.8"/>
      <rect x="30" y="78" width="40" height="7" rx="3" stroke="#0066ff" stroke-width="1"/>
    `,
    thumbSvgs: [
      `<rect x="30" y="14" width="40" height="14" rx="3" stroke="#00c8ff" stroke-width="1.2"/><line x1="40" y1="14" x2="40" y2="28" stroke="rgba(0,200,255,0.5)" stroke-width="0.7"/><line x1="50" y1="14" x2="50" y2="28" stroke="rgba(0,200,255,0.5)" stroke-width="0.7"/><line x1="60" y1="14" x2="60" y2="28" stroke="rgba(0,200,255,0.5)" stroke-width="0.7"/>`,
      `<circle cx="50" cy="50" r="15" fill="rgba(255,200,0,0.15)" stroke="rgba(255,220,0,0.7)" stroke-width="1"/><circle cx="50" cy="50" r="8" fill="rgba(255,200,0,0.3)" stroke="rgba(255,220,0,0.9)" stroke-width="1"/>`,
      `<rect x="32" y="28" width="36" height="50" rx="6" stroke="#0066ff" stroke-width="1.5"/><rect x="30" y="78" width="40" height="7" rx="3" stroke="#0066ff" stroke-width="1"/>`
    ]
  }
};

/* ── Page switcher ── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function showHome() { showPage('page-home'); }

/* ── Product detail builder ── */
function showDetail(productId) {
  const p = PRODUCTS[productId];
  if (!p) return;

  document.getElementById('detail-text-content').innerHTML = `
    <div class="detail-product-label">${p.label}</div>
    <h1 class="detail-title">${p.title}</h1>
    <p class="detail-desc">${p.desc}</p>
    <ul class="detail-features">
      ${p.features.map(f => `<li>${f}</li>`).join('')}
    </ul>
    <div class="detail-specs">
      <h4>SPECIFICATIONS</h4>
      ${p.specs.map(([k,v]) => `<div class="spec-row">
        <span class="spec-key">${k}</span>
        <span class="spec-val">${v}</span>
      </div>`).join('')}
    </div>
    <div class="detail-actions">
      <button class="btn-cart">Add to Collection</button>
      <button class="btn-wish">♡</button>
    </div>
  `;

  document.getElementById('detail-spin-main').innerHTML = `
    <div class="card-face-f" style="position:absolute;inset:0;border-radius:14px;
      backface-visibility:hidden;-webkit-backface-visibility:hidden;
      background:linear-gradient(135deg,#0d2255,#1a4fa0);
      border:1px solid rgba(100,160,255,0.25);
      display:flex;align-items:center;justify-content:center;overflow:hidden;">
      <div class="scan-grid-overlay"></div>
      <div class="scan-corners" style="position:absolute;inset:0;"><span class="c2"></span></div>
      <svg style="width:65%;height:65%;z-index:1;" viewBox="0 0 100 100" fill="none">${p.svgFront}</svg>
    </div>
    <div class="card-face-b" style="position:absolute;inset:0;border-radius:14px;
      backface-visibility:hidden;-webkit-backface-visibility:hidden;
      background:linear-gradient(135deg,#112244,#0d3070);
      border:1px solid rgba(0,200,255,0.2);
      display:flex;align-items:center;justify-content:center;overflow:hidden;
      transform:rotateY(180deg);">
      <div class="scan-grid-overlay"></div>
      <div class="scan-corners" style="position:absolute;inset:0;"><span class="c2"></span></div>
      <svg style="width:65%;height:65%;z-index:1;" viewBox="0 0 100 100" fill="none">${p.svgBack}</svg>
    </div>
  `;

  document.getElementById('detail-thumbs').innerHTML = p.thumbSvgs.map(svg => `
    <div class="detail-thumb">
      <div class="thumb-spin" style="position:relative;width:65%;aspect-ratio:1;transform-style:preserve-3d;">
        <div class="tf">
          <div class="scan-grid-overlay"></div>
          <svg style="width:70%;height:70%;" viewBox="0 0 100 100" fill="none">${svg}</svg>
        </div>
        <div class="tb">
          <div class="scan-grid-overlay"></div>
          <svg style="width:70%;height:70%;" viewBox="0 0 100 100" fill="none">${p.svgBack}</svg>
        </div>
      </div>
    </div>
  `).join('');

  showPage('page-detail');
}

/* ── Mouse tilt on detail card ── */
const detailCard = document.getElementById('detail-main-card');
detailCard.addEventListener('mousemove', e => {
  const r = detailCard.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width  - 0.5;
  const y = (e.clientY - r.top)  / r.height - 0.5;
  const spin = document.getElementById('detail-spin-main');
  if (spin) spin.style.transform = `rotateY(${x*25}deg) rotateX(${-y*15}deg)`;
});
detailCard.addEventListener('mouseleave', () => {
  const spin = document.getElementById('detail-spin-main');
  if (spin) spin.style.transform = '';
});