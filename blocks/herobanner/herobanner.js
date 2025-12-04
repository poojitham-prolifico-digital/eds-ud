export default function decorate(block) {
  
  const backgroundEl = block.querySelector('[data-aue-prop="backgroundImage"] img');
  const titleEl = block.querySelector('[data-aue-prop="title"]');
  const descEl = block.querySelector('[data-aue-prop="description"]');
  const ctaEl = block.querySelector('[data-aue-prop="textContent_cta"]');
  const ctaTextEl = block.querySelector('[data-aue-prop="textContent_ctaText"]');


  const background = backgroundEl?.src || '';
  const title = titleEl?.innerHTML || '';
  const description = descEl?.innerHTML || '';
  const ctaLink = ctaEl?.getAttribute('href') || '';
  const ctaLabel = ctaTextEl?.innerText?.trim() || '';




  block.querySelectorAll('picture source').forEach(src => {
    src.setAttribute('srcset', background);
  });


  const img = block.querySelector('picture img');
  if (img) img.src = background;

  
  if (titleEl) titleEl.innerHTML = title;

  if (descEl) descEl.innerHTML = description;

 
  if (ctaEl) ctaEl.href = ctaLink;
  if (ctaTextEl) ctaTextEl.innerText = ctaLabel;
}
