let w = window.innerWidth;
const speakersSection = document.querySelector('.speakers .row');
const showMoreBtn = document.querySelector('.speakers .footer a');

const speakers = [{
  image: '/images/drDon.jpg',
  name: 'name of speaker',
  subtitle: 'Lorem ipsum dolor sit amet.',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque atque dignissimos.',
},
{
  image: '/images/drDon.jpg',
  name: 'name of speaker',
  subtitle: 'Lorem ipsum dolor sit amet.',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque atque dignissimos.',
},
{
  image: '/images/drDon.jpg',
  name: 'name of speaker',
  subtitle: 'Lorem ipsum dolor sit amet.',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque atque dignissimos.',
},
{
  image: '/images/drDon.jpg',
  name: 'name of speaker',
  subtitle: 'Lorem ipsum dolor sit amet.',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque atque dignissimos.',
},
{
  image: '/images/drDon.jpg',
  name: 'name of speaker',
  subtitle: 'Lorem ipsum dolor sit amet.',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque atque dignissimos.',
},
{
  image: '/images/drDon.jpg',
  name: 'name of speaker',
  subtitle: 'Lorem ipsum dolor sit amet.',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque atque dignissimos.',
}];

let max = (w <= 768) ? 3 : speakers.length;

const showSpeakers = (max) => {
  const left = speakersSection.querySelector('.col-left');
  const right = speakersSection.querySelector('.col-right');

  if (left.hasChildNodes() && right.hasChildNodes()) {
    left.innerHTML = '';
    right.innerHTML = '';
  }

  for (let i = 0; i < max; i += 1) {
    // Adding container
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speaker', 'card', 'd-flex', 'flex-row', 'gap-3', 'align-items-center', 'p-2');

    // Adding Image
    const speakerImage = document.createElement('img');
    speakerImage.classList.add('align-self-start');
    speakerImage.src = speakers[i].image;
    speakerImage.alt = speakers[i].name;
    speakerCard.appendChild(speakerImage);

    // Adding speaker info
    const speakerInfo = document.createElement('div');
    speakerInfo.classList.add('speaker-info');

    // Adding speaker name
    const speakerName = document.createElement('h3');
    speakerName.classList.add('fw-bold', 'fs-5', 'text-capitalize');
    speakerName.innerHTML = speakers[i].name;
    speakerInfo.appendChild(speakerName);

    // Adding speaker subtitle
    const speakerSubtitle = document.createElement('h4');
    speakerSubtitle.classList.add('accent', 'fs-20', 'fst-italic', 'text-left');
    speakerSubtitle.innerHTML = speakers[i].subtitle;
    speakerInfo.appendChild(speakerSubtitle);

    // Adding speaker description
    const speakerDesc = document.createElement('p');
    speakerDesc.classList.add('fs-20', 'mb-0');
    speakerDesc.innerHTML = speakers[i].desc;
    speakerInfo.appendChild(speakerDesc);

    // Adding speaker info to speaker card
    speakerCard.appendChild(speakerInfo);

    if (i % 2 === 0) {
      left.appendChild(speakerCard);
    } else {
      right.appendChild(speakerCard);
    }
  }
};

const resize = () => {
  w = window.innerWidth;
  max = (w <= 768) ? 3 : speakers.length;
  console.log(max);
  showSpeakers(max);
};

const toggle = () => {
  if (showMoreBtn.innerHTML.toLowerCase() === 'show less') {
    max = 3;
    showMoreBtn.innerHTML = 'more speakers';
  } else {
    max = speakers.length;
    showMoreBtn.innerHTML = 'show less';
  }
  return (max);
};

window.addEventListener('load', () => { resize(); });
window.addEventListener('resize', () => { resize(); });
showMoreBtn.addEventListener('click', () => {
  showSpeakers(toggle());
});
