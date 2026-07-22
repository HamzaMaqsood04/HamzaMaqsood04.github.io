(function () {
  'use strict';

  var PHONE_WA = '923235672229';

  var services = [
    { name: 'Full House Deep Cleaning', desc: 'Rooms, kitchen, bathrooms & floors', cat: 'cleaning', emoji: '🧹', bg: '#e3f2fd' },
    { name: 'Sofa & Carpet Shampoo', desc: 'Professional fabric cleaning', cat: 'cleaning', emoji: '🛋️', bg: '#f3e5f5' },
    { name: 'Kitchen Deep Clean', desc: 'Grease, cabinets & appliances', cat: 'cleaning', emoji: '🍳', bg: '#fff3e0' },
    { name: 'Bathroom Sanitization', desc: 'Tiles, fixtures & disinfection', cat: 'cleaning', emoji: '🚿', bg: '#e0f7fa' },
    { name: 'Move-In / Move-Out Clean', desc: 'Complete home before/after shifting', cat: 'cleaning', emoji: '📦', bg: '#fce4ec' },
    { name: 'Office Cleaning', desc: 'Commercial spaces & workstations', cat: 'cleaning', emoji: '🏢', bg: '#eceff1' },
    { name: 'Window & Glass Cleaning', desc: 'Streak-free windows & mirrors', cat: 'cleaning', emoji: '🪟', bg: '#e8eaf6' },
    { name: 'Water Tank Cleaning', desc: 'Underground & overhead tank wash', cat: 'cleaning', emoji: '💧', bg: '#e0f2f1' },
    { name: 'AC General Service', desc: 'Filter, coil clean & checkup', cat: 'ac', emoji: '❄️', bg: '#e3f2fd' },
    { name: 'AC Gas Refill', desc: 'R22 / R410 gas top-up', cat: 'ac', emoji: '🌡️', bg: '#e0f7fa' },
    { name: 'AC Installation', desc: 'Split & inverter AC mounting', cat: 'ac', emoji: '🔧', bg: '#e8f5e9' },
    { name: 'AC Repair', desc: 'Compressor, PCB & cooling issues', cat: 'ac', emoji: '⚙️', bg: '#fff8e1' },
    { name: 'AC Dismantling & Shifting', desc: 'Remove, transport & reinstall', cat: 'ac', emoji: '🚚', bg: '#fbe9e7' },
    { name: 'Duct AC Service', desc: 'Central & ducted system maintenance', cat: 'ac', emoji: '🏗️', bg: '#eceff1' },
    { name: '4-Camera CCTV Package', desc: 'HD cameras + DVR + install', cat: 'cctv', emoji: '📹', bg: '#e8eaf6' },
    { name: '8-Camera CCTV Package', desc: 'Full home/office coverage', cat: 'cctv', emoji: '📷', bg: '#e3f2fd' },
    { name: 'IP Camera Setup', desc: 'WiFi cameras with mobile app', cat: 'cctv', emoji: '📱', bg: '#f3e5f5' },
    { name: 'DVR / NVR Configuration', desc: 'Recording, playback & storage', cat: 'cctv', emoji: '💾', bg: '#eceff1' },
    { name: 'Doorbell Camera', desc: 'Video doorbell with alerts', cat: 'cctv', emoji: '🔔', bg: '#fff3e0' },
    { name: 'Night Vision Cameras', desc: 'IR cameras for low-light areas', cat: 'cctv', emoji: '🌙', bg: '#1a237e', dark: true },
    { name: 'CCTV Maintenance', desc: 'Camera adjustment & cable repair', cat: 'cctv', emoji: '🔩', bg: '#e0f2f1' },
    { name: 'Remote Viewing Setup', desc: 'Phone & PC access from anywhere', cat: 'cctv', emoji: '🌐', bg: '#e8f5e9' },
  ];

  var catLabels = {
    cleaning: 'Cleaning',
    ac: 'AC Services',
    cctv: 'CCTV'
  };

  var grid = document.getElementById('serviceGrid');
  services.forEach(function (s) {
    var card = document.createElement('a');
    card.className = 'service-card';
    card.dataset.cat = s.cat;
    card.href = 'https://wa.me/' + PHONE_WA + '?text=' + encodeURIComponent('Assalam o Alaikum! I need: ' + s.name);
    card.target = '_blank';
    card.rel = 'noopener';
    var textColor = s.dark ? 'color:#fff' : '';
    card.innerHTML =
      '<div class="service-img" style="background:' + s.bg + ';' + textColor + '">' + s.emoji + '</div>' +
      '<div class="service-body">' +
        '<h3>' + s.name + '</h3>' +
        '<p>' + s.desc + '</p>' +
        '<span class="service-cat">' + catLabels[s.cat] + '</span>' +
      '</div>';
    grid.appendChild(card);
  });

  document.getElementById('filterBar').addEventListener('click', function (e) {
    if (!e.target.classList.contains('filter-btn')) return;
    document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
    e.target.classList.add('active');
    var filter = e.target.dataset.filter;
    document.querySelectorAll('.service-card').forEach(function (card) {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.cat !== filter);
    });
  });

  var slides = document.querySelectorAll('.slide');
  var dotsContainer = document.getElementById('sliderDots');
  var current = 0;
  var timer;

  slides.forEach(function (_, i) {
    var dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.addEventListener('click', function () { goTo(i); });
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
    resetTimer();
  }

  function next() { goTo(current + 1); }
  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }
  resetTimer();

  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', function () {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  navToggle.addEventListener('click', function () { nav.classList.toggle('open'); });
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { nav.classList.remove('open'); });
  });

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var inputs = e.target.querySelectorAll('input, select, textarea');
    var text = 'Assalam o Alaikum! I am ' + inputs[0].value + ' (' + inputs[1].value + '). Service: ' + inputs[2].value + '. ' + inputs[3].value;
    window.open('https://wa.me/' + PHONE_WA + '?text=' + encodeURIComponent(text), '_blank');
  });
})();
