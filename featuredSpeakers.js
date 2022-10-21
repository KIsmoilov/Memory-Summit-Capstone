const speakers = [];

const speakerOne = {
  id: 'speakerOne',
  img: './images/Rahmonov.png',
  name: 'Shohruh Rahmonov',
  title: 'The first mnemonist from Uzbekistan',
  biography: 'Shohruh Rahmonov is the author of several books on human memory. He actively participated in several memory championships and in the TV show of Russia channel called "The Increadible People".',
};

speakers.push(speakerOne);

const speakerTwo = {
  id: 'speakerTwo',
  img: './images/Khusniddin.png',
  name: 'Khusniddin Ismoilov',
  title: 'International Master of Memory',
  biography: 'Khusniddin Ismoilov achieved the title of the "International Master of Memory" in the World Memory Championships 2015. He also participated in the TV show of Russia channel called "The Increadible People".',
};

speakers.push(speakerTwo);

const speakerThree = {
  id: 'speakerThree',
  img: './images/Simon.png',
  name: 'Simon Reinhard',
  title: 'German Memory Champion',
  biography: 'Simon Reinhard achieved a former world record in speed cards in 2010, and is the 2011 German Memory Champion. He also won the 2014 and 2016 Extreme Memory Tournament.',
};

speakers.push(speakerThree);

const speakerFour = {
  id: 'speakerFour',
  img: './images/Alex.png',
  name: 'Alex Mullen',
  title: 'World Memory Champion',
  biography: 'Alex Mullen is an American memory competitor, three-time world memory champion, and physician. The first American to win the world title, he won for three consecutive years the 2015, 2016, and 2017 World Memory Championships.',
};

speakers.push(speakerFour);

const speakerFive = {
  id: 'speakerFive',
  img: './images/Boris.png',
  name: 'Boris Konrad',
  title: 'Guinness World Record holder',
  biography: 'Boris Konrad is a four time Guinness World Record holder for memory, neuroscientist and speaker. Boris has set numerous world records in memory sports and amazed millions in shows like "The Brain" and "Got Talent" in many countries.',
};

speakers.push(speakerFive);

const speakerSix = {
  id: 'speakerSix',
  img: './images/Joshua.png',
  name: 'Joshua Foer',
  title: 'U.S.A. Memory Champion',
  biography: 'Joshua Foer is a freelance journalist and author living in Brookline, Massachusetts, with a primary focus on science. He was the 2006 U.S.A. Memory Champion, which was described in his 2011 book, Moonwalking with Einstein: The Art and Science of Remembering Everything.',
};

speakers.push(speakerSix);

const speech = document.querySelector('.speech');

const speechSectionTitle = document.createElement('h3');
speechSectionTitle.innerHTML = 'Featured Speakers';
speech.appendChild(speechSectionTitle);

const hrSpeech = document.createElement('hr');
hrSpeech.className = 'hr_speech';
speech.appendChild(hrSpeech);

const containerAllSpeakers = document.createElement('div');
containerAllSpeakers.className = 'containerAllSpeakers';
speech.appendChild(containerAllSpeakers);

// Speaker One

for (let i = 0; i < speakers.length; i += 1) {
  const containerSpeakerOne = document.createElement('div');
  containerSpeakerOne.className = 'containerSpeaker';
  containerAllSpeakers.appendChild(containerSpeakerOne);

  const imgOne = document.createElement('img');
  imgOne.setAttribute('src', speakers[i].img);
  imgOne.className = 'photoSpeaker';
  imgOne.setAttribute('alt', 'The photo of the first speaker');
  containerSpeakerOne.appendChild(imgOne);

  const infoOne = document.createElement('ul');
  infoOne.className = 'info';
  containerSpeakerOne.appendChild(infoOne);

  const firstlistOne = document.createElement('li');
  firstlistOne.innerHTML = speakers[i].name;
  infoOne.appendChild(firstlistOne);

  const secondlistOne = document.createElement('li');
  secondlistOne.innerHTML = speakers[i].title;
  infoOne.appendChild(secondlistOne);

  const lineOne = document.createElement('hr');
  lineOne.className = 'hr_info';
  infoOne.appendChild(lineOne);

  const thirdlistOne = document.createElement('li');
  thirdlistOne.innerHTML = speakers[i].biography;
  infoOne.appendChild(thirdlistOne);
}

const moreBtn = document.createElement('button');
moreBtn.innerHTML = 'More <img id="angleDown" src="images/angle-arrow-down.png" alt="angleDownIcon" />';
moreBtn.id = 'moreBtn';
speech.appendChild(moreBtn);

function toggleMenu() {
  const allSpeakers = document.getElementsByClassName('containerAllSpeakers');

  for (let i = 2; i < allSpeakers[0].children.length; i += 1) {
    if (allSpeakers[0].children[i].style.display === '') {
      allSpeakers[0].children[i].style.display = 'grid';
    }
  }

  moreBtn.style.display = 'none';
}

moreBtn.addEventListener('click', toggleMenu);