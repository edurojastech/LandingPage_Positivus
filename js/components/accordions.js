const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  const btn = item.querySelector('.toggle');
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    items.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.toggle').textContent = '+';
      }
    });

    const isActive = item.classList.contains('active');
    item.classList.toggle('active');
    btn.textContent = isActive ? '+' : '−';
  });
});
