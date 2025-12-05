export default function decorate(block) {

  const ctaLabelEl = block.querySelector('[data-aue-prop="ctaLabel"]');
  const ctaLinkEl = block.querySelector('[data-aue-prop="ctaLink"]');

  // read actual values from UE live bindings
  const label = ctaLabelEl?.innerText?.trim() || '';
  const link = ctaLinkEl?.getAttribute('href') || '#';

  // apply values
  ctaLabelEl.innerText = label;
  ctaLinkEl.setAttribute('href', link);
}
