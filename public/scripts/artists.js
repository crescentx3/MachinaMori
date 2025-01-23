const artists = [
  {
    name: "Witches With Glitches",
    songs: "//TRACK ???,  Atomize",
    bio: "Coming Soon",
    profile: "/assets/profiles/witcheswithglitches.jpg",
    twitter: "https://twitter.com/WitchwithGlitch",
    youtube: "https://youtube.com/@WitcheswithGlitches",
    bluesky: "https://bsky.app/profile/witchwithglitch.bsky.social",
  },
  {
    name: "Vuvuzela",
    songs: "//TRACK ???, 8 Billion Shapeshifters",
    bio: "Coming Soon",
    profile: "/assets/profiles/vuvuzela.jpg",
    twitter: "https://twitter.com/yametoketteba ",
    youtube: "https://youtube.com/@vuvuzela6539",
    bluesky: "",
  },
  {
    name: "TOKiMADE",
    songs: "//TRACK ???, ????",
    bio: "Coming Soon",
    profile: "/assets/profiles/tokimade.jpg",
    twitter: "https://twitter.com/tokimade",
    youtube: "https://youtube.com/@tokimade",
    bluesky: "https://bsky.app/profile/tokimade.bsky.social",
  },
  {
    name: "Staircatte",
    songs: "//TRACK ???, ????",
    bio: "Coming Soon",
    profile: "/assets/profiles/staircatte.jpg",
    twitter: "https://twitter.com/staircatte",
    youtube: "https://youtube.com/@staircatte",
    bluesky: "https://bsky.app/profile/staircatte.bsky.social",
  },
  {
    name: "MonochroMenace",
    songs: "//TRACK EX, GIMMICK GIRL",
    bio: "Coming Soon",
    profile: "/assets/profiles/monochromenace.jpg",
    twitter: "https://twitter.com/MonochroMenace",
    youtube: "https://youtube.com/@MonochroMenace",
    bluesky: "https://bsky.app/profile/monochromenace.bsky.social",
  },
  {
    name: "Maiku Tachibana",
    songs: "//TRACK ???, The Ruminations of Adachi Rei",
    bio: "Coming Soon",
    profile: "/assets/profiles/maiku.jpg",
    twitter: "https://twitter.com/MaikuTachibana",
    youtube: "https://youtube.com/@MaikuTachibana",
    bluesky: "https://bsky.app/profile/maikutachibana.bsky.social",
  },
  {
    name: "Mage-P",
    songs: "//TRACK ???, ????",
    bio: "Coming Soon",
    profile: "/assets/profiles/magep.jpg",
    twitter: "https://twitter.com/okaymagep",
    youtube: "https://youtube.com/@Mage-P",
    bluesky: "https://bsky.app/profile/okaymagep.bsky.social",
  },
  {
    name: "Keyesgen",
    songs: "//TRACK ???, ????",
    bio: "Coming Soon",
    profile: "/assets/profiles/keyesgen.jpg",
    twitter: "",
    youtube: "https://youtube.com/@keyesgen",
    bluesky: "https://bsky.app/profile/keyesgen.com",
  },
  {
    name: "Jamie Paige",
    songs: "//TRACK ???, Dance Delightful",
    bio: "Coming Soon",
    profile: "/assets/profiles/jamiep.jpg",
    twitter: "https://twitter.com/pamiejaige",
    youtube: "https://youtube.com/JamiePaigeIRL",
    bluesky: "https://bsky.app/profile/jamies.page",
  },
  {
    name: "HYPNOPOSSUM",
    songs: "//TRACK ???, Furor Machinae",
    bio: "Coming Soon",
    profile: "/assets/profiles/hypnopossum.jpg",
    twitter: "https://twitter.com/HYPN0POSSUM",
    youtube: "https://youtube.com/@HYPNOPOSSUM",
    bluesky: "https://bsky.app/profile/hypnopossum.bsky.social",
  },
  {
    name: "electrovoid",
    songs: "//TRACK ???, SMILE OF ABSOLUTE DERANGEMENT",
    bio: "Coming Soon",
    profile: "/assets/profiles/electrovoid.jpg",
    twitter: "https://twitter.com/electrovoiid",
    youtube: "https://youtube.com/@electrovoiid",
    bluesky: "https://bsky.app/profile/electrovoid.bsky.social",
  },
  {
    name: "Eggtan",
    songs: "//Track ???, ????",
    bio: "Coming Soon",
    profile: "/assets/profiles/eggtan.png",
    twitter: "https://twitter.com/eggt4n",
    youtube: "https://youtube.com/@eggtan3965",
    bluesky: "https://bsky.app/profile/eggtan.bsky.social",
  },
  {
    name: "Dav-P",
    songs: "//Track ???, ????",
    bio: "Coming Soon",
    profile: "/assets/profiles/davp.png",
    twitter: "https://twitter.com/DavPOFFICIAL",
    youtube: "https://youtube.com/@DavPMUSIC",
    bluesky: "",
  },
  {
    name: "beat_shobon",
    songs: "Track ???, ????",
    bio: "Coming Soon",
    profile: "/assets/profiles/shobon.png",
    twitter: "https://twitter.com/beat_shobon",
    youtube: "https://youtube.com/@beat_shobon",
    bluesky: "https://bsky.app/profile/beat-shobon.bsky.social",
  },
  {
    name: "0TS",
    songs: "Track ???, Positive Result",
    bio: "Coming Soon",
    profile: "/assets/profiles/0ts.jpg",
    twitter: "https://twitter.com/0TSXL",
    youtube: "https://youtube.com/@0TSXL",
    bluesky: "https://bsky.app/profile/0ts.bsky.social",
  },
  {
    name: "",
    songs: "",
    bio: "Coming Soon",
    profile: "/assets/profiles/.jpg",
    twitter: "https://twitter.com/",
    youtube: "https://youtube.com/",
    bluesky: "https://bsky.app/profile/",
  }
];

const container = document.getElementById("artists-container");

artists.forEach((artist, index) => {
  const isLeftLayout = index % 2 === 0;

  const socialsHTML = [];
  
  if (artist.twitter) {
    socialsHTML.push(`
      <a href="${artist.twitter}" target="_blank">
        <button class="sm xitter">
          <img src="/assets/xitter-icon.png">
        </button>
      </a>
    `);
  }
  
  if (artist.bluesky) {
    socialsHTML.push(`
      <a href="${artist.bluesky}" target="_blank">
        <button class="sm bluesky">
          <img src="/assets/bluesky-icon.png">
        </button>
      </a>
    `);
  }
  
  if (artist.youtube) {
    socialsHTML.push(`
      <a href="${artist.youtube}" target="_blank">
        <button class="sm youtube">
          <img src="/assets/youtube-icon.png">
        </button>
      </a>
    `);
  }

  const smallSideHTML = `
    <div class="small_side">
      <img src="${artist.profile}" alt="${artist.name}" class="artist-logo">
      <div class="socials">
        ${socialsHTML.join('')}
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

  const artistHTML = `
    <div class="artist ${isLeftLayout ? "" : "r"}">
      ${isLeftLayout ? smallSideHTML + bigSideHTML : bigSideHTML + smallSideHTML}
    </div>
  `;

  container.insertAdjacentHTML("beforeend", artistHTML);
});
