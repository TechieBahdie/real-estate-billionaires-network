const catalogueItems = [
  'https://wa.me/p/5475375179225534/2348164589460',
  'https://wa.me/p/24572464099011039/2348164589460',
  'https://wa.me/p/8141968239210196/2348164589460',
  'https://wa.me/p/5848565498521186/2348164589460',
  'https://wa.me/p/8540540402637554/2348164589460',
  'https://wa.me/p/5513144972110679/2348164589460',
  'https://wa.me/p/5605269216187251/2348164589460',
  'https://wa.me/p/5053914351377392/2348164589460',
  'https://wa.me/p/5583878388368358/2348164589460',
  'https://wa.me/p/5105302456242932/2348164589460',
  'https://wa.me/p/8533326540040984/2348164589460',
  'https://wa.me/p/5724035897659911/2348164589460',
  'https://wa.me/p/5355519224546639/2348164589460'
];
const images = [
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600590949399-9e2b9c8b7f0a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80'
];
const grid = document.getElementById('property-grid');
catalogueItems.forEach((url, index) => {
  const card = document.createElement('article');
  card.className = 'property-card';
  const category = index % 3 === 0 ? 'Land enquiry' : index % 3 === 1 ? 'Residential enquiry' : 'Catalogue listing';
  card.innerHTML = `<div class="property-image" style="background-image:url('${images[index % images.length]}')"><span class="property-tag">${category}</span></div><div class="property-body"><h3>Catalogue listing ${String(index + 1).padStart(2, '0')}</h3><p>Open the original WhatsApp catalogue item to view its details and confirm current availability with the business.</p><a href="${url}" target="_blank" rel="noopener">View catalogue item <span>↗</span></a></div>`;
  grid.appendChild(card);
});
document.getElementById('year').textContent = new Date().getFullYear();
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Hello Real Estate Billionaires Network. My name is ${data.get('name')}. I am interested in: ${data.get('interest')}. Preferred location: ${data.get('location') || 'Not specified'}. Message: ${data.get('message') || 'Please share available options.'}`;
  window.open(`https://wa.me/2348164589460?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
