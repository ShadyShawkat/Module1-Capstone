const guestsData = [
  {
    name: 'Ed Sheeran',
    imageUrl: './assets/images/feat-guest-edsheeran.png',
    imgAltText: 'Ed Sheeran image',
    description:
      'Get to see Ed Sheeran playing "Fix You" with us and much more.',
  },
  {
    name: 'Beyonce',
    imageUrl: './assets/images/feat-guest-beyonce.png',
    imgAltText: 'Beyonce image',
    description:
      'Meet Beyonce and listen to the beloved "Hymn For The Weekend"',
  },
  {
    name: 'The Weekend',
    imageUrl: './assets/images/feat-guest-theweekend.png',
    imgAltText: 'The Weekend image',
    description:
      'Watch us collab with The Weekened and listen so some of his popular songs.',
  },
  {
    name: 'Kanye West',
    imageUrl: './assets/images/feat-guest-kanyewest.png',
    imgAltText: 'Kanye West image',
    description:
      'Listen to "Homecoming" with Kanye West and meet him on stage.',
  },
];

window.addEventListener('load', () => {
  // Load more guests on "More" button click
  document
    .querySelector('.featured-guests-section__more-btn')
    .addEventListener('click', () => {
      document.querySelector(
        '.featured-guests-section__guests',
      ).style.maxHeight = '1000px';
      document.querySelector(
        '.featured-guests-section__more-btn',
      ).style.display = 'none';
      const guestsToShow = document.querySelectorAll(
        '.featured-guests-section__guests li.d-none',
      );
      [...guestsToShow].forEach((guest) => {
        guest.classList.toggle('d-none');
      });
    });

  // Load guests data dynamically on load
  const guestsListInDom = document.querySelector(
    '.featured-guests-section__guests',
  );
  guestsData.forEach((guest) => {
    const guestListItem = document.createElement('li');
    guestListItem.innerHTML = `
      <img
        class="guest-img"
        src="${guest.imageUrl}"
        alt="${guest.imgAltText}"
      />
      <div class="guest-info d-flex flex-column">
        <h3>${guest.name}</h3>
        <p class="guest-discription mt-3 mt-md-auto mt-lg-3">
          ${guest.description}
        </p>
      </div>
    `;
    guestsListInDom.appendChild(guestListItem);
  });
});
