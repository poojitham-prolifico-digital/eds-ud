export default function decorate(block) {
  [...block.children].forEach((item) => {
    const labelEl = item.querySelector('[data-label]') || item.querySelector('p');
    const urlEl = item.querySelector('[data-url]') || item.querySelector('a');

    if (!labelEl || !urlEl) return;

    const label = labelEl.textContent.trim();
    const url = urlEl.getAttribute('href');

    const link = document.createElement('a');
    link.href = url;
    link.textContent = label;
    item.innerHTML = '';
    item.appendChild(link);
  });
}
