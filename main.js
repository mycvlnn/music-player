// Tác giả: Lê Ngoại Ngữ

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const DEFAULT_OFFSET_TOP = 450;
const CONFIG_PLAYER = "CONFIG_PLAYER";
const KEYS = {
  CURRENT_INDEX: "currentIndex",
  IS_RANDOM: "isRandom",
  IS_LOOP: "isRepeat",
  CURRENT_TIME: "currentTime",
  IS_DARK_MODE: "isDarkMode",
};

const songList = $("#song-list");
const songName = $(".song-playing .name");
const singerName = $(".song-playing .author");
const cd = $(".cd");
const cdWidth = cd.offsetWidth;
const cdThumb = $(".cd .cd-thumb");
const audio = $("#audio");
const playBtn = $("#play");
const currentTimeNode = $(".time .current");
const totalTimeNode = $(".time .total");
const progressInput = $("#progress-input");
const forwardStepBtn = $("#forward-step");
const backwardStepBtn = $("#backward-step");
const randomBtn = $("#random");
const repeatBtn = $("#repeat");
const numberVolume = $(".volume-number span");
const inputVolumne = $("#volume-input");
const volumeType = $(".volume-type");
const inputCheckBox = $("#checkbox");

const app = {
  config: JSON.parse(localStorage.getItem(CONFIG_PLAYER)) || {},
  setConfig: function (key, value) {
    this.config[key] = value;
    localStorage.setItem(CONFIG_PLAYER, JSON.stringify(this.config));
  },
  songsRadom: [], // mảng lưu trữ những bài hát đã random
  currentIndex: 0,
  currentTime: 0,
  totalTime: 0,
  volumeNumber: 0,
  isPlay: false,
  isRepeat: false,
  isRandom: false,
  songs: [
    {
      name: "Đen - một triệu like ft.",
      singer: "Đen Vâu",
      path: "./assets/music/mot-trieu-like.mp3",
      image: "./assets/image/denvau.jpeg",
    },

    {
      name: "Sai Cách Yêu",
      singer: "Lê Bảo Bình",
      path: "./assets/music/sai_cach_yeu.mp3",
      image: "./assets/image/lebaobinh.jpg",
    },
    {
      name: "Em của ngày hôm qua",
      singer: "Sơn Tùng MTP",
      path: "./assets/music/emcuangayhomqua.mp3",
      image: "./assets/image/sontung.jpg",
    },
    {
      name: "Liên khúc Nhạc Trẻ",
      singer: "Lê Bảo Bình x Đình Dũng",
      path: "./assets/music/lebaobinh_dinhdung.mp3",
      image: "./assets/image/lebaobinh_dinhdung.jpg",
    },
    {
      name: "TONES AND I - DANCE MONKEY",
      singer: "TONES AND I",
      path: "./assets/music/dancemonkey.mp3",
      image: "./assets/image/dancemonkey.jpg",
    },
    {
      name: "Đi về nhà",
      singer: "Đen Vâu",
      path: "./assets/music/di-ve-nha.mp3",
      image: "./assets/image/denvau.jpeg",
    },
    {
      name: "I want to know",
      singer: "Zedd",
      path: "./assets/music/i_want_to_know.mp3",
      image: "./assets/image/zedd.jpg",
    },
    {
      name: "Vicetone",
      singer: "Navada",
      path: "./assets/music/vicetone.mp3",
      image: "./assets/image/vicetone.jpg",
    },
    {
      name: "Despacito",
      singer: "Luis Fonsi - Daddy Yankee",
      path: "./assets/music/despacito.mp3",
      image: "./assets/image/despacito.jpg",
    },
    {
      name: "Don't Let Me Down",
      singer: "The Chainsmokers",
      path: "./assets/music/Dont Let Me Down.mp3",
      image: "./assets/image/dont_let_me_down.png",
    },
    {
      name: "Old Town Road",
      singer: "Lil Nas X",
      path: "./assets/music/Old Town Road.mp3",
      image: "./assets/image/old_town_road.png",
    },
    {
      name: "Waiting For Love",
      singer: "Avicii",
      path: "./assets/music/Waiting For Love.mp3",
      image: "./assets/image/waiting_for_love.png",
    },
    {
      name: "The Night",
      singer: "Acivii",
      path: "./assets/music/thenight.mp3",
      image: "./assets/image/thenight.webp",
    },
    {
      name: "Bad Liar",
      singer: "Imagine Dragons",
      path: "./assets/music/badliar.mp3",
      image: "./assets/image/badliar.jpg",
    },

    {
      name: "Sing me to sleep",
      singer: "Alan Walker",
      path: "./assets/music/singmetosleep.mp3",
      image: "./assets/image/alanwalker.jpg",
    },
    {
      name: "In the end",
      singer: "Linkin Park",
      path: "./assets/music/intheend.mp3",
      image: "./assets/image/intheend.jpg",
    },
    {
      name: "TheFatThat",
      singer: "feat. Laura Brehm",
      path: "./assets/music/thefathat.mp3",
      image: "./assets/image/thefatthat.jpg",
    },
    {
      name: "Alone",
      singer: "Alan Walker",
      path: "./assets/music/alanwalker.mp3",
      image: "./assets/image/alanwalker.jpg",
    },
  ],
  loadConfig: function () {
    // Load những gì được lưu trữ bên trong local storage

    // 1. Bài hát hiện tại
    const { currentIndex, isRepeat, isRandom, currentTime, isDarkMode } =
      this.config;
    if (currentIndex) this.currentIndex = currentIndex;

    // 2. repeat
    if (isRepeat) {
      this.isRepeat = isRepeat;
      repeatBtn.classList.toggle("active", isRepeat);
    }

    // 3. random
    if (isRandom) {
      this.isRandom = isRandom;
      randomBtn.classList.toggle("active", isRandom);
    }

    // 4. currentTime
    if (currentTime) {
      audio.currentTime = currentTime;
      this.currentTime = currentTime;
    }

    // 5. darkmode
    if (isDarkMode) {
      this.handleChangeTheme(isDarkMode);
      inputCheckBox.checked = true;
    }
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: () => {
        return this.songs[this.currentIndex];
      },
    });
  },
  loadCurrentSong: function () {
    songName.textContent = this.currentSong.name;
    singerName.textContent = this.currentSong.singer;
    cdThumb.src = this.currentSong.image;
    audio.src = this.currentSong.path;
  },
  toggleWaveMusic: function () {
    // function bật hiệu ứng chạy sóng nhạc
    $$(".waves.active .wave").forEach((wave) => {
      if (this.isPlay) {
        wave.classList.add("play");
      } else {
        wave.classList.remove("play");
      }
    });
  },
  formatTime: function (seconds) {
    if (!Number.isNaN(seconds) && typeof seconds === "number") {
      if (seconds >= 3600)
        new Date(seconds * 1000).toISOString().substring(11, 19);

      return new Date(seconds * 1000).toISOString().substring(14, 19);
    }

    return "--:--";
  },
  rotateCD360Deg: () => {
    const cdAnimated = cd.animate([{ transform: "rotate(360deg)" }], {
      duration: 30000,
      iterations: Infinity,
    });
    cdAnimated.pause();

    return cdAnimated;
  },
  loadTimeAudio: function () {
    this.currentTime = audio.currentTime;
    this.totalTime = audio.duration;
    const totalTimeUpdated = this.formatTime(audio.duration);
    totalTimeNode.textContent = totalTimeUpdated;
  },
  updateCurrentTime: function () {
    const currentTimeUpdated = audio.currentTime;
    currentTimeNode.textContent = this.formatTime(currentTimeUpdated);
    this.currentTime = currentTimeUpdated;
    this.setConfig(KEYS.CURRENT_TIME, currentTimeUpdated);
  },
  updatePercentProgress: function () {
    // xử lý update % của thanh progress từ 0 - 100
    const duration = this.totalTime;
    const currentTime = this.currentTime;
    const percentProgress = Math.floor((currentTime / duration) * 100) || 0;
    progressInput.value = percentProgress;
  },
  activeItemSong: function () {
    // Hàm xử lý active item đang được play
    const prevSongItem = $(".song-item.active");
    prevSongItem.classList.remove("active");
    const currentSong = $(`#song-item-${this.currentIndex}`);
    currentSong.classList.add("active");

    // scroll to item
    const offsetTop = currentSong.offsetTop;
    const top = this.currentIndex === 0 ? 0 : offsetTop - DEFAULT_OFFSET_TOP;
    document.documentElement.scrollTo({
      top,
      left: 0,
      behavior: "smooth",
    });

    // active waves
    const prevWavesActive = $(".waves.active");
    prevWavesActive.classList.remove("active");
    const currentWavesActive = currentSong.querySelector(".waves");
    currentWavesActive.classList.add("active");
  },
  handleNextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) this.currentIndex = 0;
    this.loadCurrentSong();
  },
  handlePrevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) this.currentIndex = this.songs.length - 1;
    this.loadCurrentSong();
  },
  handleRandomSong: function () {
    let indexUpdated = this.currentIndex;
    do {
      indexUpdated = Math.floor(Math.random() * this.songs.length);
    } while (
      indexUpdated === this.currentIndex ||
      this.songsRadom.includes(indexUpdated)
    );

    this.songsRadom.push(indexUpdated);
    if (this.songsRadom.length === this.songs.length) this.songsRadom = [];
    this.currentIndex = indexUpdated;
    this.loadCurrentSong();
  },
  updateNumberVolume: function () {
    const volumeUpdated = Math.floor(audio.volume * 100);
    numberVolume.textContent = volumeUpdated;
    inputVolumne.value = volumeUpdated;
    this.volumeNumber = volumeUpdated;
  },
  handleChangeTheme: function (isDarkMode) {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    this.setConfig(KEYS.IS_DARK_MODE, isDarkMode);
  },
  handleEvent: function () {
    const cdAnimated = this.rotateCD360Deg();

    // Lắng nghe sự kiện click vào nút play
    playBtn.onclick = () => {
      if (this.isPlay) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Lắng nghe sự kiện nhạc được bật
    audio.onplay = () => {
      this.isPlay = true;
      playBtn.classList.add("active");
      this.activeItemSong();
      this.toggleWaveMusic();
      cdAnimated.play();
      this.setConfig(KEYS.CURRENT_INDEX, this.currentIndex);
    };

    // Lắng nghe sự kiện nhạc bị tắt
    audio.onpause = () => {
      this.isPlay = false;
      playBtn.classList.remove("active");
      this.toggleWaveMusic();
      cdAnimated.pause();
    };

    // Lắng nghe sự kiện load data audio khi load xong
    audio.onloadedmetadata = (e) => {
      this.loadTimeAudio();
      this.updateNumberVolume();
    };

    // Lắng nghe sự kiện update time
    audio.ontimeupdate = (e) => {
      this.updateCurrentTime();
      this.updatePercentProgress();
    };

    // lắng nghe sự kiện tua bài hát
    progressInput.oninput = (e) => {
      const currentPercent = Number(e.target.value);
      const currentTime = (currentPercent * this.totalTime) / 100;
      this.setConfig(KEYS.CURRENT_TIME, currentTime);
      audio.currentTime = currentTime;
    };

    // Next bài hát
    forwardStepBtn.onclick = (e) => {
      if (this.isRandom) {
        this.handleRandomSong();
      } else {
        this.handleNextSong();
      }
      audio.play();
    };

    // Prev bài hát
    backwardStepBtn.onclick = (e) => {
      if (this.isRandom) {
        this.handleRandomSong();
      } else {
        this.handlePrevSong();
      }
      audio.play();
    };

    // Sự kiện lặp bài hát
    repeatBtn.onclick = () => {
      const isRepeatUpdated = !this.isRepeat;
      repeatBtn.classList.toggle("active", isRepeatUpdated);
      this.isRepeat = isRepeatUpdated;
      this.setConfig(KEYS.IS_LOOP, this.isRepeat);
    };

    // Sự kiện random bài hát
    randomBtn.onclick = () => {
      const isRandomUpdated = !this.isRandom;
      randomBtn.classList.toggle("active", isRandomUpdated);
      this.isRandom = isRandomUpdated;
      this.setConfig(KEYS.IS_RANDOM, isRandomUpdated);
    };

    // lắng nghe sự kiện kết thúc nhạc
    audio.onended = () => {
      if (this.isRepeat) {
        audio.currentTime = 0;
      } else if (this.isRandom) {
        this.handleRandomSong();
      } else {
        this.handleNextSong();
      }
      audio.play();
    };

    // Lắng nghe sự kiện tăng giảm input âm lượng
    inputVolumne.oninput = (e) => {
      const value = e.target.value;
      audio.volume = Number(value) / 100;
      this.volumeNumber = Number(value);
    };

    // Lắng nghe sự kiện thay đổi volume => đổi icon
    audio.onvolumechange = () => {
      const volumnUpdated = Math.floor(audio.volume * 100);
      numberVolume.textContent = volumnUpdated;
      inputVolumne.value = volumnUpdated;

      if (volumnUpdated <= 0) {
        volumeType.setAttribute("class", "volume-type mute");
      } else if (volumnUpdated <= 50) {
        volumeType.setAttribute("class", "volume-type low");
      } else {
        volumeType.setAttribute("class", "volume-type high");
      }
    };

    // Lắng nghe sự kiện click vào cái loa toggle âm lượng
    volumeType.onclick = () => {
      const volumnUpdated = Math.floor(audio.volume * 100);

      if (volumnUpdated <= 0) {
        audio.volume = this.volumeNumber / 100;
      } else {
        audio.volume = 0;
      }
    };

    // Lắng nghe sự kiện click vào từng item
    songList.onclick = (e) => {
      const item = e.target.closest(".song-item:not(.active)");
      if (item) {
        if (item.dataset.index) {
          this.currentIndex = Number(item.dataset.index);
          this.loadCurrentSong();
          audio.play();
        }
      }
    };

    // lắng nghe sự kiện toggle input checkbox
    inputCheckBox.onchange = (e) => {
      const { checked } = e.target;
      this.handleChangeTheme(checked);
    };

    // Lắng nghe sự kiện cuộn của người dùng để xử lý zoom in and zoom out
    document.onscroll = function () {
      const offsetY = document.documentElement.scrollTop;

      const newWidthCd = cdWidth - offsetY;
      const size = newWidthCd >= 0 ? newWidthCd + "px" : 0;
      cd.style.width = size;
      cd.style.height = size;
      cd.style.opacity = newWidthCd / cdWidth;
    };
  },
  renderPlayList: function () {
    const htmls = this.songs
      .map((song, index) => {
        const active = this.currentIndex === index ? "active" : "";

        return `<div data-index=${index} id="song-item-${index}" class="song-item ${active}">
                    <img src="${song.image}" alt="${song.singer}">
                    <div class="info">
                        <h5>${song.name}</h5>
                        <p>${song.singer}</p>
                    </div>
                    <div class="music-waves">
                      <div class='waves ${active}' >
                          <div class='wave'></div>
                          <div class='wave'></div>
                          <div class='wave'></div>
                          <div class='wave'></div>
                          <div class='wave'></div>
                          <div class='wave'></div>
                          <div class='wave'></div>
                          <div class='wave'></div>
                          <div class='wave'></div>
                          <div class='wave'></div>
                      </div>
                    </div>
                </div>`;
      })
      .join("");

    songList.innerHTML = htmls;
  },

  start: function () {
    this.loadConfig();
    this.defineProperties();
    this.handleEvent();
    this.loadCurrentSong();
    this.renderPlayList();
  },
};

app.start();
