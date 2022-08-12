/**
 * 1. Render songs => OK
 * 2. Scroll top => OK
 * 3. Play / pause / seek => OK
 * 4. CD rotate => OK
 * 5. Next / prev => OK
 * 6. Random => OK
 * 7. Next / Repeat when ended => OK
 * 8. Active song => OK
 * 9. Scroll active song into view => OK
 * 10.Play song when click => OK
 * 11.Control volume => OK
 * 12.Animation disk and dashboard => OK
 * 13.Background image animation => OK
 * 14.Control hide after 5s
 * 15.Disk hide when scroll max and show when scroll min
 */
const $ = document.querySelector.bind(document)    
const $$ = document.querySelectorAll.bind(document) 

const PLAYER_MUSIC_STORAGE = "storage"

const list = $('.list')
const body = $('body')
const nameDisk = $('.disk_img__name')
const imgDisk = $('.disk_img__disk')
const soundBeat = $('.sound-beat')
const audio = $('#audio') 
const relayBtn = $('#relay')
const prevBtn = $('#prev')
const pauseBtn = $('#pause')
const playBtn = $('#play')
const nextBtn = $('#next')
const shuffleBtn = $('#shuffle')
const input = $('#input')
const vol = $('#input-vol')
const spanCurrentTime = $('.time-current')
const spanDurationTime = $('.time-duration')
const spanVol = $('.vol')
const iconVoice = $('.voice')
const iconUnVoice = $('.unvoice')
const dashboard = $('.dashboard')
const backgroundImg = $('.disk_img')
const songName = $('.disk_img__name')
const songNameDetail = $('.disk_img__name__detail')
const colorTimer = $$('.timer')
const selectSong = $('.select-song')
const option = $('#type')

const app = {
    songsNightcore: [
        {   
            name: 'Abcdefu',
            singer: 'Ericovich',
            path: './assets/songs/Englishmusic/Nightcore/Abcdefu.mp3',
            image: './assets/images/English/Nightcore/Abcdefu.jpg'
        },
        {   
            name: 'Crazy',
            singer: 'Ericovich',
            path: './assets/songs/Englishmusic/Nightcore/Crazy.mp3',
            image: './assets/images/English/Nightcore/Crazy.jpg'
        },
        {   
            name: 'Highscore',
            singer: 'Ericovich',
            path: './assets/songs/Englishmusic/Nightcore/Highscore.mp3',
            image: './assets/images/English/Nightcore/Highscore.jpg'
        },
        {   
            name: 'Ignite',
            singer: 'Ericovich',
            path: './assets/songs/Englishmusic/Nightcore/Ignite.mp3',
            image: './assets/images/English/Nightcore/Ignite.jpg'
        },
        {   
            name: 'Linked',
            singer: 'Ericovich',
            path: './assets/songs/Englishmusic/Nightcore/Linked.mp3',
            image: './assets/images/English/Nightcore/Linked.jpg'
        },
        {   
            name: 'Lostsky',
            singer: 'Ericovich',
            path: './assets/songs/Englishmusic/Nightcore/Lostsky.mp3',
            image: './assets/images/English/Nightcore/Lostsky.jpg'
        },
        {   
            name: 'Onmyown',
            singer: 'Ericovich',
            path: './assets/songs/Englishmusic/Nightcore/Onmyown.mp3',
            image: './assets/images/English/Nightcore/Onmyown.jpg'
        },
        {   
            name: 'Playdate',
            singer: 'Ericovich',
            path: './assets/songs/Englishmusic/Nightcore/Playdate.mp3',
            image: './assets/images/English/Nightcore/Playdate.jpg'
        },
        {   
            name: 'Prettygirl',
            singer: 'Ericovich',
            path: './assets/songs/Englishmusic/Nightcore/Prettygirl.mp3',
            image: './assets/images/English/Nightcore/Prettygirl.jpg'
        },
        {   
            name: 'Savagelove',
            singer: 'Ericovich',
            path: './assets/songs/Englishmusic/Nightcore/Savagelove.mp3',
            image: './assets/images/English/Nightcore/Savagelove.jpg'
        },
        {   
            name: 'Solo',
            singer: 'Ericovich',
            path: './assets/songs/Englishmusic/Nightcore/Solo.mp3',
            image: './assets/images/English/Nightcore/Solo.jpg'
        },
        {   
            name: 'Theriver',
            singer: 'Ericovich',
            path: './assets/songs/Englishmusic/Nightcore/Theriver.mp3',
            image: './assets/images/English/Nightcore/Theriver.jpg'
        },
        {   
            name: 'Thisfeeling',
            singer: 'Ericovich',
            path: './assets/songs/Englishmusic/Nightcore/Thisfeeling.mp3',
            image: './assets/images/English/Nightcore/Thisfeeling.jpg'
        },
        
    ],
    songsYoasobi: [
        {   
            name: 'あの夢をなぞって',
            singer: 'Yoasobi',
            nameRomaji: 'Ano Yume wo Nazotte',
            path: './assets/songs/Japanmusic/Yoasobi/Ano_yume_wo_nazotte.mp3',
            image: './assets/images/Japan/Yoasobi/Ano_yume_wo_nazotte.jpg'
        },
        {   
            name: 'アンコール',
            singer: 'Yoasobi',
            nameRomaji: 'Encore',
            path: './assets/songs/Japanmusic/Yoasobi/Encore.mp3',
            image: './assets/images/Japan/Yoasobi/Encore.jpg'
        },
        {   
            name: '群青',
            singer: 'Yoasobi',
            nameRomaji: 'Gunjou',
            path: './assets/songs/Japanmusic/Yoasobi/Gunjou.mp3',
            image: './assets/images/Japan/Yoasobi/Gunjou.jpg'
        },
        {   
            name: 'ハルジオン',
            singer: 'Yoasobi',
            nameRomaji: 'Halzion',
            path: './assets/songs/Japanmusic/Yoasobi/Halzion.mp3',
            image: './assets/images/Japan/Yoasobi/Halzion.jpg'
        },
        {   
            name: '怪物',
            singer: 'Yoasobi',
            nameRomaji: 'Kaibutsu',
            path: './assets/songs/Japanmusic/Yoasobi/Kaibutsu.mp3',
            image: './assets/images/Japan/Yoasobi/Kaibutsu.jpg'
        },
        {   
            name: '三原色',
            singer: 'Yoasobi',
            nameRomaji: 'Sangenshoku',
            path: './assets/songs/Japanmusic/Yoasobi/Sangenshoku.mp3',
            image: './assets/images/Japan/Yoasobi/Sangenshoku.jpg'
        },
        {   
            name: 'たぶん',
            singer: 'Yoasobi',
            nameRomaji: 'Tabun',
            path: './assets/songs/Japanmusic/Yoasobi/Tabun.mp3',
            image: './assets/images/Japan/Yoasobi/Tabun.jpg'
        },
        {   
            name: 'ツバメ',
            singer: 'Yoasobi',
            nameRomaji: 'Tsubame',
            path: './assets/songs/Japanmusic/Yoasobi/Tsubame.mp3',
            image: './assets/images/Japan/Yoasobi/Tsubame.jpg'
        },
        {   
            name: '優しい彗星',
            singer: 'Yoasobi',
            nameRomaji: 'Yasashisuisei',
            path: './assets/songs/Japanmusic/Yoasobi/Yasashisuisei.mp3',
            image: './assets/images/Japan/Yoasobi/Yasashisuisei.jpg'
        },
        {   
            name: '夜に駆ける',
            singer: 'Yoasobi',
            nameRomaji: 'Yoru ni kakeru',
            path: './assets/songs/Japanmusic/Yoasobi/Yoru_ni_kakeru.mp3',
            image: './assets/images/Japan/Yoasobi/Yoru_ni_kakeru.jpg'
        },
    ],
    songsJapanOthers: [
        {   
            name: '天ノ弱',
            singer: 'Akie秋絵',
            nameRomaji: 'Ama no jaku',
            path: './assets/songs/Japanmusic/Others/Ama_no_jaku.mp3',
            image: './assets/images/Japan/Others/Ama_no_jaku.jpg'
        },
        {   
            name: 'ずるいよ…',
            singer: 'Chihiro',
            nameRomaji: 'Zurui yo . . .',
            path: './assets/songs/Japanmusic/Others/Chihiro.mp3',
            image: './assets/images/Japan/Others/Chihiro.jpg'
        },
        {   
            name: 'Chocolate Groove',
            singer: 'Kana Hanazawa',
            nameRomaji: '',
            path: './assets/songs/Japanmusic/Others/ChocolateGroove.mp3',
            image: './assets/images/Japan/Others/ChocolateGroove.jpg'
        },
        {   
            name: '誰よりも',
            singer: 'Sayuri Sugawara, KG',
            nameRomaji: 'Dare Yori Mo',
            path: './assets/songs/Japanmusic/Others/Dare_Yori_mo.mp3',
            image: './assets/images/Japan/Others/Dare_Yori_mo.jpg'
        },
        {   
            name: ' 春を告げる',
            singer: 'Yama',
            nameRomaji: 'Haru wo tsugeru',
            path: './assets/songs/Japanmusic/Others/Haru_wo_tsugeru.mp3',
            image: './assets/images/Japan/Others/Haru_wo_tsugeru.jpg'
        },
        {   
            name: '彼女は旅に出る',
            singer: 'Sana',
            nameRomaji: 'Kanojo wa tabi ni deru',
            path: './assets/songs/Japanmusic/Others/Kanojo_wa_tabi_ni_deru.mp3',
            image: './assets/images/Japan/Others/Kanojo_wa_tabi_ni_deru.jpg'
        },
        {   
            name: 'カサネテク',
            singer: '中村千尋',
            nameRomaji: 'Kasaneteku',
            path: './assets/songs/Japanmusic/Others/Kasaneteku.mp3',
            image: './assets/images/Japan/Others/Kasaneteku.jpg'
        },
        {   
            name: '君だったら',
            singer: 'Happy Birthday',
            nameRomaji: 'Kimidattara',
            path: './assets/songs/Japanmusic/Others/Kimidattara.mp3',
            image: './assets/images/Japan/Others/Kimidattara.jpg'
        },
        {   
            name: '孤独死',
            singer: 'Mihka',
            nameRomaji: 'Kodokushi',
            path: './assets/songs/Japanmusic/Others/Kodokushi.mp3',
            image: './assets/images/Japan/Others/Kodokushi.jpg'
        },
        {   
            name: '心做し',
            singer: 'Cyoucyo P',
            nameRomaji: 'Kokoronashi',
            path: './assets/songs/Japanmusic/Others/Kokoronashi.mp3',
            image: './assets/images/Japan/Others/Kokoronashi.jpg'
        },
        {   
            name: 'Tokyo',
            singer: 'Leat’eq',
            nameRomaji: 'Tokyo',
            path: './assets/songs/Japanmusic/Others/Leateq.mp3',
            image: './assets/images/Japan/Others/Leateq.jpg'
        },
        {   
            name: 'ロストアンブレラ',
            singer: '稲葉曇',
            nameRomaji: 'Lost umbrella',
            path: './assets/songs/Japanmusic/Others/Lostumbrella.mp3',
            image: './assets/images/Japan/Others/Lostumbrella.jpg'
        },
        {   
            name: ' 恋愛裁判',
            singer: '初音ミク',
            nameRomaji: 'Renaisaiban',
            path: './assets/songs/Japanmusic/Others/Renaisaiban.mp3',
            image: './assets/images/Japan/Others/Renaisaiban.jpg'
        },
        {   
            name: 'ただ声一つ',
            singer: 'ロクデナシ',
            nameRomaji: 'Rokudenashi',
            path: './assets/songs/Japanmusic/Others/Rokudenashi.mp3',
            image: './assets/images/Japan/Others/Rokudenashi.jpg'
        },
        {   
            name: '千本桜',
            singer: '初音ミク',
            nameRomaji: 'Senbonsakura',
            path: './assets/songs/Japanmusic/Others/Senbonsakura.mp3',
            image: './assets/images/Japan/Others/Senbonsakura.jpg'
        },
        {   
            name: 'Summertime',
            singer: '麦吉_Maggie, 盖盖Nyan',
            nameRomaji: 'Summertime',
            path: './assets/songs/Japanmusic/Others/Summertime.mp3',
            image: './assets/images/Japan/Others/Summertime.jpg'
        },
        {   
            name: '帝国少女',
            singer: 'R Sound Design',
            nameRomaji: 'Teikokushoujo',
            path: './assets/songs/Japanmusic/Others/Teikokushoujo.mp3',
            image: './assets/images/Japan/Others/Teikokushoujo.jpg'
        },
        {   
            name: 'Sweet Groove',
            singer: '???',
            nameRomaji: 'Sweet Groove',
            path: './assets/songs/Japanmusic/Others/Thenewsweetgroove.mp3',
            image: './assets/images/Japan/Others/Thenewsweetgroove.jpg'
        },

        
    ],
    // Current song
    currentIndex: 0,
    isPlaying: false,
    isShuffle: false,
    isRelay: false,
    isDowning: false,
    // currentList: this.isPlaying,
    volume: 30,
    config: JSON.parse(localStorage.getItem(PLAYER_MUSIC_STORAGE)) || {},
    arr: [],

    // Select song fuc
    selectList: function() {
        switch(this.config.type) {
            case 'songsNightcore': 
                return this.songsNightcore
            case 'songsYoasobi':
                return this.songsYoasobi
            case 'songsJapanOther':
                return this.songsJapanOthers
            case 'songsJapan':
            return [...this.songsJapanOthers, ...this.songsYoasobi]
            default:
                return this.songsNightcore
        }
    },

    // Render func
    render: function() {
        const items = this.selectList().map(function(item, index) {
            return `
            <div class="list_item" data-id="${index}">
                <div class="list_item__img" style="background-image: url(${item.image})" alt=""></div>
                <div class="list_item__details">
                    <h2>${item.name}</h2>
                    <span class="list_item__singer">${item.singer}</span>
                    <span>${item.nameRomaji? '-'+ item.nameRomaji: ''}</span>
                </div>
                <i class="fa-solid fa-ellipsis option"></i>
            </div>
            `
        })

        list.innerHTML = items.join('')
    },
    
    // Set config
    setConfig: function(key, value) {
        this.config[key] = value
        localStorage.setItem(PLAYER_MUSIC_STORAGE, JSON.stringify(this.config))
    },

    // Load config
    loadConfig: function() {
        this.isShuffle = this.config.isShuffle || false
        this.isRelay = this.config.isRelay  || false
        this.volume = this.config.volume    || 20
        this.arr.push(this.currentIndex)
    },

    // Scroll func
    scroll: function() {
        document.onscroll = function(e) {
            const sizeImg = 220 - e.path[1].scrollY/2 
            imgDisk.style.width = sizeImg > 0? sizeImg + 'px': 0
            imgDisk.style.height = sizeImg > 0? sizeImg + 'px': 0
        }
    },

    // Avoid replay song
    avoidRelaySong: function() {
        if(this.isShuffle) {
            if(this.arr.includes(this.currentIndex)) {
                this.currentIndex = Math.floor(Math.random()*this.selectList().length)
                this.avoidRelaySong()
            }else {
                this.arr.push(this.currentIndex)
                console.log(this.arr)
                if(this.arr.length === this.selectList().length) {
                    this.currentIndex = Math.floor(Math.random()*this.selectList().length)
                    this.arr = []
                    this.arr.push(this.currentIndex)
                }
            }
        }
    },

    // Load current song func
    loadCurrentSong: function() {
        const _this = this

        // Load active song
        $$('.list_item').forEach(function(item) {
            if(+item.dataset.id === _this.currentIndex) {
                item.classList.add('active')
            }else {
                item.classList.remove('active')
            }   
        })
        
        // Load data song
        const item = this.selectList()[this.currentIndex]
        nameDisk.innerText = item.name
        audio.src = item.path
        document.querySelector('title').textContent = item.name;
        songName.innerText = item.name
        imgDisk.style.backgroundImage = `url(${item.image})`

        // Scroll into view
        if(this.currentIndex <= 3) {
            setTimeout(() => {
                $('.list_item.active').scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                })
            }, 300)
        }else {
            if(this.isShuffle) {
                setTimeout(() => {
                    $('.list_item.active').scrollIntoView({
                        behavior: 'smooth',
                        block: 'end',
                    })
                }, 300)
            }else {
                setTimeout(() => {
                    $('.list_item.active').scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    })
                }, 300)  
            }
        }

        // Duration span
        const timeout = setTimeout(() => {
            if(audio.duration) {
                var minutes = Math.floor(audio.duration / 60)
                var seconds = Math.floor(audio.duration - 60*minutes)
                spanDurationTime.innerText = `0${minutes}.${seconds <10? '0'+ seconds: seconds}`
            }
        }, 300)
        },
    
    // Event func
    event: function() {
        const _this = this

        // CD rotate
        const rotate = imgDisk.animate([{ transform: 'rotate(360deg)'}], { duration: 10000, iterations: Infinity})
        const soundBeats = soundBeat.animate([
            { transform: 'scale(1)'},
            { transform: 'scale(1.02)'},
            { transform: 'scale(1.04)'},
            { transform: 'scale(1.02)'},
            { transform: 'scale(1.04)'},
            { transform: 'scale(1.06)'},
            { transform: 'scale(1.04)'},
            { transform: 'scale(1.02)'},
        ], { duration: 900, iterations: Infinity})

        // BackgroundImg
        const beat = backgroundImg.animate([
            { transform: 'scale(1)'},
            { transform: 'scale(1.02)'},
            { transform: 'scale(1.04)'},
            { transform: 'scale(1.02)'},
            { transform: 'scale(1.04)'},
            { transform: 'scale(1.06)'},
            { transform: 'scale(1.04)'},
            { transform: 'scale(1.02)'},
        ], { duration: 900, iterations: Infinity})

        // Dashboard Animation
        const dashboardAnimation = dashboard.animate([
            { transform: 'scale(1)'},
            { transform: 'scale(1.01)'},
            { transform: 'scale(1.02)'},
            { transform: 'scale(1.01)'},
            { transform: 'scale(1.02)'},
            { transform: 'scale(1.03)'},
            { transform: 'scale(1.02)'},
            { transform: 'scale(1)'},
            ], { duration: 900, iterations: Infinity})

        rotate.cancel()
        soundBeats.cancel()
        dashboardAnimation.cancel()
        beat.cancel()
        // Scroll show/hide
        if(window.innerWidth > 800) {
            window.onscroll = function() {
                if(document.documentElement.scrollTop < 260) {
                    dashboard.classList.remove('active')
                    dashboard.style.borderBottomRightRadius = 0
                    dashboard.style.borderBottomLeftRadius = 0
                    dashboard.style.backgroundImage = ''
                    dashboardAnimation.cancel()
    
                    imgDisk.style.backgroundImage = `url(${_this.selectList()[_this.currentIndex].image})`
                    backgroundImg.style.backgroundImage = 'url("./assets/images/customimg/soundwave.png")'
    
                    colorTimer.forEach(item => {
                        item.style.color = 'black'
                        item.style.textShadow = ''
                    })
    
                    if(_this.isPlaying) {
                        beat.play()
                        rotate.play()
                    }else {
                        beat.pause()
                        rotate.pause() 
                    }
    
                }else {
                    rotate.pause()
                    beat.pause()
                    imgDisk.style.backgroundImage = ''
                    backgroundImg.style.backgroundImage = ''
                    
                    dashboard.classList.add('active')
                    dashboard.style.borderRadius = 20 + 'px'
                    dashboard.style.backgroundImage = `url(${_this.selectList()[_this.currentIndex].image})`
    
                    colorTimer.forEach(item => {
                        item.style.color = 'white'
                        item.style.textShadow = '0 0 8px black';
    
                    })
    
                    if(_this.isPlaying) {
                        dashboardAnimation.play()
                    }else {
                        dashboardAnimation.cancel()
                    }                
                }
            }
        }        

        // Real play
        audio.onplay = function() {
            _this.isPlaying = true
            
            if(document.documentElement.scrollTop < 260) {
                rotate.play()
                soundBeats.play()
                beat.play()
            }else {
                dashboardAnimation.play()
            }

            playBtn.classList.add('hide')
            pauseBtn.classList.remove('hide')
        }

        // Real pause
        audio.onpause = function() {
            _this.isPlaying = false

            rotate.pause()
            soundBeats.pause()
            dashboardAnimation.cancel()
            beat.cancel()
            
            pauseBtn.classList.add('hide')
            playBtn.classList.remove('hide')
        }

        // Click play btn
        playBtn.onclick = function() {
            if(!_this.isPlaying) {
                audio.play()
            }
        }

        // Click pause btn
        pauseBtn.onclick = function() {
            if(_this.isPlaying) {
                audio.pause()
            }
        }

        // Click seek input
        input.onchange = function(e) {
            audio.currentTime = (e.target.value/100) * audio.duration
        }

        input.onmousedown = function() {
            _this.isDowning = true
        }

        input.onmouseup = function() {
            _this.isDowning = false
        }
        

        // Update input
        audio.ontimeupdate = function(e) {
            if(!_this.isDowning) {
                if(audio.duration) {
                    var minutes = Math.floor(audio.currentTime / 60)
                    var seconds = Math.floor(audio.currentTime - 60*minutes)
                    spanCurrentTime.innerText = `0${minutes}.${seconds <10? '0'+ seconds: seconds}`
                    input.value = (audio.currentTime*100)/audio.duration
                }
            }
        }

        // Audio volume
        vol.onchange = function(e) {
            audio.volume = e.target.value/100
            _this.setConfig('volume', e.target.value)
            spanVol.innerText = Math.floor(e.target.value) + '%'

            if(audio.volume > 0) {
                iconVoice.classList.remove('hide')
                iconUnVoice.classList.add('hide')
                
            }else {
                iconVoice.classList.add('hide')
                iconUnVoice.classList.remove('hide')
            }
        }
 
        // Prev btn
        prevBtn.onclick = function() {
            if(_this.isShuffle) {
                _this.avoidRelaySong()
                _this.loadCurrentSong()
                audio.play()
                return
            }

            if(_this.currentIndex === 0) {
                _this.currentIndex = _this.selectList().length - 1
            } else {
                _this.currentIndex--
            }
            _this.loadCurrentSong()
            audio.play()
        }

        // Next btn
        nextBtn.onclick = function() {
            if(_this.isShuffle) {
                _this.avoidRelaySong()
                _this.loadCurrentSong()
                audio.play()
                return
            }

            if(_this.currentIndex >= _this.selectList().length - 1) {
                _this.currentIndex = 0
            } else {
                _this.currentIndex++
            }

            _this.loadCurrentSong()
            audio.play()
        }

        // Next when song ended
        audio.onended = function() {
            // When click relay
            if(_this.isRelay) {
                _this.loadCurrentSong()
                audio.play()
                return
            }

            // When click shuffle
            if(_this.isShuffle) {
                _this.avoidRelaySong()
                _this.loadCurrentSong()
                audio.play()
                return
            }

            // When do nothing
            if(_this.currentIndex >= _this.selectList().length - 1) {
                _this.currentIndex = 0
            } else {
                _this.currentIndex++
            }

            _this.loadCurrentSong()
            audio.play()
        }

        // Repeat song when ended 
        relayBtn.onclick = function() {
            _this.isRelay = !_this.isRelay
            _this.setConfig('isRelay', _this.isRelay)
            this.classList.toggle('active', _this.isRelay)
        }

        // Shuffle btn
        shuffleBtn.onclick = function() {
            if(!_this.isShuffle && !_this.arr.includes(_this.currentIndex)) {
                _this.arr.push(_this.currentIndex)
            }
            _this.isShuffle = !_this.isShuffle
            _this.setConfig('isShuffle', _this.isShuffle)
            this.classList.toggle('active', _this.isShuffle)
        }
        
        // Click song
        list.onclick = function(e) {
            const songNode = e.target.closest('.list_item:not(.active)')
            if(songNode && !e.target.closest('.option')) {
                if(songNode) {
                    _this.currentIndex = +songNode.dataset.id
                    _this.loadCurrentSong()
                    audio.play()
                }else {
                    console.log('custom')
                }
            }else {
                // audio.load()
                // audio.play()
            }
        }

        // Select type song
        selectSong.onclick = function() {
            option.classList.toggle('hide')
        }

        // Change list music
        option.onchange = function(e) {
            _this.setConfig('type', e.target.value)
            _this.currentList = e.target.value
            location.reload()
        }

        // Click option
        $('.option').onclick = function() {
            console.log(1)
        }
    },

    // Update UI
    updateUI: function() {
        relayBtn.classList.toggle('active', this.isRelay)
        shuffleBtn.classList.toggle('active', this.isShuffle)
        audio.volume = this.volume/100
        vol.value = this.volume
        spanVol.innerText = this.volume + '%'
        if(document.documentElement.scrollTop <= 260) {
            backgroundImg.style.backgroundImage = 'url("./assets/images/customimg/soundwave.png")'
        }

        iconVoice.classList.toggle('hide', !(!!audio.volume))
        iconUnVoice.classList.toggle('hide', (!!audio.volume))
    },


    // Show when hover func
    showWhenHover: function() {
        const _this = this
        dashboard.onmouseover = function() {
            this.classList.remove('active')
        }
        
        dashboard.onmouseout = function() {
            if(document.documentElement.scrollTop !== 0) {
                this.classList.add('active')
            }
        }
    },

    // Start func
    start: function() {
        // Load local storage
        this.loadConfig()

        // Update UI
        this.updateUI()

        // Call render func
        this.render()

        // Call scroll func
        if(window.innerWidth > 800) {
            this.scroll()
        }

        // Call load current song
        this.loadCurrentSong()

        // Call play/pause/seek func
        this.event() 
        
        // Show when hover func
        this.showWhenHover()

    }
}

app.currentList = option.value

app.start()
