const artists = [
  {
    name: "Artist 1",
    songs: "Song Names And Such",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia diam vel ornare scelerisque.",
    profile: "/assets/profiles/davp.jpg",
    twitter: "https://twitter.com/artist1",
    youtube: "https://youtube.com/artist1",
    bluesky: "https://bluesky.com/artist1",
  },
  {
    name: "Artist 2",
    songs: "Another Song List",
    bio: "Sed ullamcorper orci ut justo finibus, in tempor mauris tempus.",
    profile: "/assets/profiles/davp.jpg",
    twitter: "https://twitter.com/artist2",
    youtube: "https://youtube.com/artist2",
    bluesky: "https://bluesky.com/artist2",
  },
  {
    name: "Artist 3",
    songs: "More Songs Here",
    bio: "Aliquam viverra quis metus sed sollicitudin. Vivamus eget elit eu enim varius finibus.",
    profile: "/assets/profiles/davp.jpg",
    twitter: "https://twitter.com/artist3",
    youtube: "https://youtube.com/artist3",
    bluesky: "https://bluesky.com/artist3",
  },
  // Add more artists here...
];

const container = document.getElementById("artists-container");

artists.forEach((artist, index) => {
  // Determine layout: left if even index, right if odd index
  const isLeftLayout = index % 2 === 0;

  const smallSideHTML = `
    <div class="small_side">
      <img src="${artist.profile}" alt="${artist.name}" class="artist-logo">
      <div class="socials">
        <a href="${artist.twitter}" target="_blank">
          <button class="sm xitter">
            <img src="/assets/xitter-icon.png">
          </button>
        </a>
        <a href="${artist.bluesky}" target="_blank">
          <button class="sm bluesky">
            <img src="/assets/bluesky-icon.png">
          </button>
        </a>
        <a href="${artist.youtube}" target="_blank">
          <button class="sm youtube">
            <img src="/assets/youtube-icon.png">
          </button>
        </a>
      </div>
    </div>
  `;

  const bigSideHTML = `
    <div class="big_side">
      <p class="artist-name ${isLeftLayout ? "" : "r"}">${artist.name}</p>
      <p class="credits ${isLeftLayout ? "" : "r"}">${artist.songs}</p>
      <p class="artist-bio">${artist.bio}</p>
    </div>
  `;

  // Combine sides based on the layout
  const artistHTML = `
    <div class="artist ${isLeftLayout ? "" : "r"}">
      ${isLeftLayout ? smallSideHTML + bigSideHTML : bigSideHTML + smallSideHTML}
    </div>
  `;

  container.insertAdjacentHTML("beforeend", artistHTML);
});
