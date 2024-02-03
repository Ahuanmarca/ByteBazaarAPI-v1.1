import mongoose from 'mongoose';
import genresData from './genresData.js';

const { ObjectId } = mongoose.Types;
const genresMap = Object.fromEntries(genresData.map((g) => [g.name, g._id]));

const gameTitlesData = [
  {
    _id: new ObjectId('65be7fb98709074a53fa39df'),
    title: 'Elden Ring',
    description: 'Description of Elden Ring',
    image:
      'https://cdn-products.eneba.com/resized-products/qx8Tbt_P4s0CUWhUi0zXERfNW1s7_qGS5WbBO_uVudI_350x200_1x-0.jpeg',
    genresId: ['action', 'role'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39e0'),
    title: 'Tetris Ultimate',
    description: 'Description of Tetris Ultimate',
    image:
      'https://cdn-products.eneba.com/resized-products/L0APp2CHj5v7AP9tk6yhbPtcwRx6VCQn_fSPQTQYi-o_350x200_1x-0.jpg',
    genresId: ['arcadian'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39e1'),
    title: 'Arkanoid',
    description: 'Description of Arkanoid',
    image:
      'https://cdn-products.eneba.com/resized-products/GtoRFKMR3jzaR8qiz_eG9mL-mEHW7fQNeuqJp75BkKk_350x200_1x-0.jpg',
    genresId: ['arcadian'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39e2'),
    title: 'Yu-Gi-Oh! Legacy of the Duelist',
    description: 'Description of Yu-Gi-Oh! Legacy of the Duelist',
    image:
      'https://cdn-products.eneba.com/resized-products/BKcUU_jn3umrqcNAjdLN2XKlJQz1LIJ17PIg4_CbLq0_350x200_1x-0.jpeg',
    genresId: ['strategy'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39e3'),
    title: 'Euro Truck Simulator',
    description: 'Description of Euro Truck Simulator',
    image:
      'https://cdn-products.eneba.com/resized-products/V8fK6Td_350x200_1x-0.jpg',
    genresId: ['simulation'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39e4'),
    title: 'Just Dance 2020',
    description: 'Description of Just Dance 2020',
    image:
      'https://cdn-products.eneba.com/resized-products/imjg0r_AhQKvzqja593AOogFVlh0suUL17GkpyrgPSU_350x200_1x-0.jpeg',
    genresId: ['musicalGames'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39e5'),
    title: 'Guitar Hero 2',
    description: 'Description of Guitar Hero 2',
    image:
      'https://cdn-products.eneba.com/resized-products/OOuJkEWLefqciodYzDvKV4Zhr6ZtB9BnBWt1JvlDJl4_350x200_1x-0.jpg',
    genresId: ['musicalGames'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39e6'),
    title: 'Donkey Konga',
    description: 'Description of Donkey Konga',
    image:
      'https://cdn-products.eneba.com/resized-products/PmyfX-f05JUsRUbSNYYujLPuR1GGsdTdm0SVXSAUoMM_350x200_1x-0.jpg',
    genresId: ['musicalGames'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39e7'),
    title: 'It takes two',
    description: 'Description of It takes two',
    image:
      'https://cdn-products.eneba.com/resized-products/5JzUnzfcLd7T0_XHcaam5ry7LSjd4NamuBdAARtpLiA_350x200_1x-0.jpeg',
    genresId: ['platforms', 'graphicAdventure'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39e8'),
    title: "Baldur's Gate 3",
    description: "Description of Baldur's Gate 3",
    image:
      'https://cdn-products.eneba.com/resized-products/KawDyHCR648cl4vrgkKEXbP1idCGK7ETqxux3HCNhak_350x200_1x-0.png',
    genresId: ['role'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39e9'),
    title: 'Alan Wake 2',
    description: 'Description of Alan Wake 2',
    image:
      'https://cdn-products.eneba.com/resized-products/mJhJs3BCgiAFzibBeEpgS6hkio5LtmlYytQjY6HVgsU_350x200_1x-0.jpg',
    genresId: ['terror'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39ea'),
    title: 'Phasmophobia',
    description: 'Description of Phasmophobia',
    image:
      'https://cdn-products.eneba.com/resized-products/4743TLCwvzrj27Sw1PvdE9J0Ql97q88rJt1bdq6HZH8_350x200_1x-0.jpeg',
    genresId: ['terror'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39eb'),
    title: 'Amnesia Collection',
    description: 'Description of Amnesia Collection',
    image:
      'https://cdn-products.eneba.com/resized-products/Tkv6kyuVWY5-8dFKhB4ncgnbUIgSgEwGt2onOPu059Y_350x200_1x-0.jpeg',
    genresId: ['terror'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39ec'),
    title: 'Metal Gear Solid 3: Snake Eater',
    description: 'Description of Metal Gear Solid 3: Snake Eater',
    image:
      'https://cdn-products.eneba.com/resized-products/uWOYiyAj93tVkfuWQuU5-mwNptnzxcXwaFPmZ32Z9RU_350x200_1x-0.jpg',
    genresId: ['stealth'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39ed'),
    title: 'Detroit Become Human',
    description: 'Description of Detroit Become Human',
    image:
      'https://cdn-products.eneba.com/resized-products/OHwigC91bAhgTtrpogp-KSOfj9XDDBpfzrZ63FCgZ1Y_350x200_1x-0.jpg',
    genresId: ['graphicAdventure'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39ee'),
    title: 'The Talos Principle 2',
    description: 'Description of The Talos Principle 2',
    image:
      'https://cdn-products.eneba.com/resized-products/6zoGNZELjLf-Ev-tKMfvwam2t3TK_I_JwqkHSzSFsVw_350x200_1x-0.f7261913-c25a-40e0-8157-d26430af9919',
    genresId: ['puzzle'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39ef'),
    title: 'Grand Theft Auto V',
    description: 'Description of Grand Theft Auto V',
    image:
      'https://cdn-products.eneba.com/resized-products/s29Db6ZBVLneuD0t66qnYRamvGDP3p8chLz-3IomxcU_350x200_1x-0.jpeg',
    genresId: ['sandbox'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39f0'),
    title: 'God of War Ragnarök',
    description: 'Description of God of War Ragnarök',
    image:
      'https://cdn-products.eneba.com/resized-products/VA6S3zPgTNY5Uj_hdsXdedSZsG8akHdjVI4JQItBQ-4_350x200_1x-0.jpg',
    genresId: ['adventure', 'action'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39f1'),
    title: 'Resident Evil 4 Remake',
    description: 'Description of Resident Evil 4 Remake',
    image:
      'https://cdn-products.eneba.com/resized-products/mbdzVjhxlJfG2WqRf7cttkJkii7oQcj3cgadtVKLKsM_350x200_1x-0.jpg',
    genresId: ['adventure', 'action'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39f2'),
    title: 'Mario + Rabbids: Sparks of Hope',
    description: 'Description of Mario + Rabbids: Sparks of Hope',
    image:
      'https://cdn-products.eneba.com/resized-products/RbtIHUcSvAnGs88VC5YxpLGdJthS0gh6kSxcgo38t7E_350x200_1x-0.jpg',
    genresId: ['strategy'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39f3'),
    title: 'Microsoft Flight Simulator X',
    description: 'Description of Microsoft Flight Simulator X',
    image:
      'https://cdn-products.eneba.com/resized-products/ecf4803f2831d05ba13c15782b4367ab_350x200_1x-0.jpg',
    genresId: ['simulation'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39f4'),
    title: 'FIFA Manager 13',
    description: 'Description of FIFA Manager 13',
    image:
      'https://cdn-products.eneba.com/resized-products/AK2qBHI_350x200_1x-0.jpg',
    genresId: ['simulation', 'sports'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39f5'),
    title: 'Duck Hunt',
    description: 'Description of Duck Hunt',
    image:
      'https://cdn-products.eneba.com/resized-products/xnFh5QX9L9Iu4iu_1EaKW1YJUoZU9EiafgCZwMPO8MI_350x200_1x-0.jpg',
    genresId: ['arcadian', 'shooter'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39f6'),
    title: 'Street Fighter 6',
    description: 'Description of Street Fighter 6',
    image:
      'https://cdn-products.eneba.com/resized-products/0Yqz9S8KwkSLT52LfEYV3MnoJ2rlEHM9dVHC1tzIB48_350x200_1x-0.jpg',
    genresId: ['fight'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39f7'),
    title: 'Mortal Kombat 11',
    description: 'Description of Mortal Kombat 11',
    image:
      'https://cdn-products.eneba.com/resized-products/lWww24aHAc4baWySSkvzla7Cz_5dIwrE7Hnp33QWtS4_350x200_1x-0.jpeg',
    genresId: ['fight'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39f8'),
    title: 'Crash Team Racing Nitro-Fueled',
    description: 'Description of Crash Team Racing Nitro-Fueled',
    image:
      'https://cdn-products.eneba.com/resized-products/hxcdnFGCtATvEGAMwksbXXVm-WAUSNyoFcCHobEix5g_350x200_1x-0.jpeg',
    genresId: ['racing'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39f9'),
    title: 'Doom Eternal',
    description: 'Description of Doom Eternal',
    image:
      'https://cdn-products.eneba.com/resized-products/AIrD_MeuGcn_DfiRGSXfBtwwatA8ORcugbF_o-bLIxI_350x200_1x-0.jpg',
    genresId: ['shooter'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39fa'),
    title: "Assassin's Creed Odyssey",
    description: "Description of Assassin's Creed Odyssey",
    image:
      'https://cdn-products.eneba.com/resized-products/4a7PVbHwGEajQm6qNGOd7wGAfvHcaMdOqhrmwdOat8I_350x200_1x-0.jpeg',
    genresId: ['stealth'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39fb'),
    title: 'The Walking Dead: The Telltale',
    description: 'Description of The Walking Dead: The Telltale',
    image:
      'https://cdn-products.eneba.com/resized-products/cmhNK7beNGXajVY5c_7YJv4EC68E-tLtBqbmBgffpSY_350x200_1x-0.jpeg',
    genresId: ['graphicAdventure'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39fc'),
    title: 'The Talos Principle',
    description: 'Description of The Talos Principle',
    image:
      'https://cdn-products.eneba.com/resized-products/2KA-5qdyaMb-OaR_FGqE92jvIIraaphvsq8eXxZizys_350x200_1x-0.jpg',
    genresId: ['puzzle'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39fd'),
    title: 'Portal 2',
    description: 'Description of Portal 2',
    image:
      'https://cdn-products.eneba.com/resized-products/w6kusdugzlssi3yqcbwl_350x200_1x-0.jpg',
    genresId: ['puzzle'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39fe'),
    title: 'Little Nightmares I & II',
    description: 'Description of Little Nightmares I & II',
    image:
      'https://cdn-products.eneba.com/resized-products/H2IQSb8Pus656_Wz2spdGQg2wNg3izlAGaSzpKFCQ7g_350x200_1x-0.png',
    genresId: ['puzzle'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa39ff'),
    title: 'Red Dead Redemption 2',
    description: 'Description of Red Dead Redemption 2',
    image:
      'https://cdn-products.eneba.com/resized-products/_7wUozXpyFnXkvmSjx3oUA0EF0H7PQ8T8TLgEab-GrI_350x200_1x-0.jpeg',
    genresId: ['sandbox'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a00'),
    title: 'Resident Evil 2 Remake',
    description: 'Description of Resident Evil 2 Remake',
    image:
      'https://cdn-products.eneba.com/resized-products/FnTAm87OZrjCfroZMLASD2YN4cqqqrAEgWV2k2URIWs_350x200_1x-0.jpeg',
    genresId: ['adventure'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a01'),
    title: 'Space Invaders',
    description: 'Description of Space Invaders',
    image:
      'https://cdn-products.eneba.com/resized-products/kzgiNt4ORCfLiWyHo6TGz07h5T1B7IYIKu6cD5vvDPI_350x200_1x-0.jpg',
    genresId: ['arcadian'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a02'),
    title: "Tony Hawk's Pro Skater 1+2",
    description: "Description of Tony Hawk's Pro Skater 1+2",
    image:
      'https://cdn-products.eneba.com/resized-products/VGu0kVDuITcgv-ggRcDGkKH1dwFcxzFDIYPyNEPMoAQ_350x200_1x-0.jpeg',
    genresId: ['sports'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a03'),
    title: 'Rocket League',
    description: 'Description of Rocket League',
    image:
      'https://cdn-products.eneba.com/resized-products/edkpgyqgfsxyiby9pyj5_350x200_1x-0.jpg',
    genresId: ['sports'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a04'),
    title: 'Total War: Warhammer 3',
    description: 'Description of Total War: Warhammer 3',
    image:
      'https://cdn-products.eneba.com/resized-products/QYpGmKSfn08Z8ehyfKEwqCQU4aJicUuRnaHCShfWGdA_350x200_1x-0.jpeg',
    genresId: ['strategy'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a05'),
    title: 'Monopoly',
    description: 'Description of Monopoly',
    image:
      'https://cdn-products.eneba.com/resized-products/MtyH1tqwvWAmwv7vare5PaTlnPmbCjRXIDcviqOpyIA_350x200_1x-0.jpg',
    genresId: ['tableGames', 'strategy'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a06'),
    title: 'Hanna Montana Music Jam',
    description: 'Description of Hanna Montana Music Jam',
    image:
      'https://cdn-products.eneba.com/resized-products/V-_xiH_t_VcZ1Egx4mRD4PWPJCHdvB4BUw3qsK9Ldno_350x200_1x-0.jpg',
    genresId: ['musicalGames'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a07'),
    title: 'Super Smash Bros Melee',
    description: 'Description of Super Smash Bros Melee',
    image:
      'https://cdn-products.eneba.com/resized-products/8vdOmchp87bqMdxxoEHSaSc92B7UOE9e8-EOk1fFKE0_350x200_1x-0.jpg',
    genresId: ['fight'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a08'),
    title: 'Need for Speed: Underground 2',
    description: 'Description of Need for Speed: Underground 2',
    image:
      'https://cdn-products.eneba.com/resized-products/IOv_GXU202TFHOUW8hy9eNjppO9efatM9aQ5t-8caXY_350x200_1x-0.jpg',
    genresId: ['racing'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a09'),
    title: 'Ori and the Will of the Wisps',
    description: 'Description of Ori and the Will of the Wisps',
    image:
      'https://cdn-products.eneba.com/resized-products/W0y0HPJyoFmo-TeR93IuZ1Hz1Lj1aSGEbowzFPIobzY_350x200_1x-0.jpeg',
    genresId: ['platforms'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a0a'),
    title: 'Ori and the Blind Forest',
    description: 'Description of Ori and the Blind Forest',
    image:
      'https://cdn-products.eneba.com/resized-products/n624hqsqxfwqjn4hxvfq_350x200_1x-0.jpg',
    genresId: ['platforms'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a0b'),
    title: 'Cuphead',
    description: 'Description of Cuphead',
    image:
      'https://cdn-products.eneba.com/resized-products/pqwacvshVCcSftLaBSJzCDmHuEQflPduykaJ0UqVB_Y_350x200_1x-0.jpg',
    genresId: ['platforms'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a0c'),
    title: 'Final Fantasy X',
    description: 'Description of Final Fantasy X',
    image:
      'https://cdn-products.eneba.com/resized-products/nouUF9PtW6SHAWEn5q1yI4mlUgiKkwdViPpAYRWC4RA_350x200_1x-0.jpg',
    genresId: ['role'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a0d'),
    title: 'Quake',
    description: 'Description of Quake',
    image:
      'https://cdn-products.eneba.com/resized-products/6bT-M4AF0A4J_RFGFuYwhjwvssGIdvf6cbZ76KHw4nk_350x200_1x-0.jpg',
    genresId: ['shooter'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a0e'),
    title: 'Splinter Cell: Chaos Theory',
    description: 'Description of Splinter Cell: Chaos Theory',
    image:
      'https://cdn-products.eneba.com/resized-products/Kai0sgURLMY8P4RdQHAwieZq-8z8OKp40lv7biBfpwQ_350x200_1x-0.jpeg',
    genresId: ['stealth'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a0f'),
    title: 'Twelve Minutes',
    description: 'Description of Twelve Minutes',
    image:
      'https://cdn-products.eneba.com/resized-products/n4azEc6h-SpyHHGevXfGxBnTY8whDtHIaDlH3TwMPTw_350x200_1x-0.jpg',
    genresId: ['graphicAdventure'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a10'),
    title: 'Minecraft',
    description: 'Description of Minecraft',
    image:
      'https://cdn-products.eneba.com/resized-products/qvIiHG8kuIcNh7vSyETr9Jg8Cg9--VDr6GPwcnXs6aQ_350x200_1x-0.0dc5fbc5-a1cc-4b10-a986-2c2dd899ee66',
    genresId: ['sandbox'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a11'),
    title: 'Terraria',
    description: 'Description of Terraria',
    image:
      'https://cdn-products.eneba.com/resized-products/rxwue7h3qpaymbx3cczd_350x200_1x-0.jpg',
    genresId: ['sandbox'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a12'),
    title: 'Sekiro',
    description: 'Description of Sekiro',
    image:
      'https://cdn-products.eneba.com/resized-products/ISgxWrW54C8AX-kdRMqFMbqv1QR4TNeUVoc3G2-5Mo4_350x200_1x-0.jpeg',
    genresId: ['action'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a13'),
    title: 'Metroid Prime Remastered',
    description: 'Description of Metroid Prime Remastered',
    image:
      'https://cdn-products.eneba.com/resized-products/aFsUzY3kZePowVvdXAjlbZMi8bJjrPkcEzUd3_VLZDQ_350x200_1x-0.jpg',
    genresId: ['adventure'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a14'),
    title: 'PAC-MAN 256',
    description: 'Description of PAC-MAN 256',
    image:
      'https://cdn-products.eneba.com/resized-products/YLwP0jbkMrspCZRB9EOeO3fqcIsifMUp_TOIKCPY0BM_350x200_1x-0.jpeg',
    genresId: ['arcadian'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a15'),
    title: 'Golf it!',
    description: 'Description of Golf it!',
    image:
      'https://cdn-products.eneba.com/resized-products/YPGio_tjOX-P_SjF2AmpqKk2pABFQsjIj2NJhtGss-c_350x200_1x-0.jpeg',
    genresId: ['sports'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a16'),
    title: 'Age of Empires 4',
    description: 'Description of Age of Empires 4',
    image:
      'https://cdn-products.eneba.com/resized-products/c5PkIgV96lfS1S0EbBWi-ugI0uASws_R06Wl8Y3_R74_350x200_1x-0.jpeg',
    genresId: ['strategy'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a17'),
    title: 'Goat Simulator',
    description: 'Description of Goat Simulator',
    image:
      'https://cdn-products.eneba.com/resized-products/722_350x200_1x-0.jpg',
    genresId: ['simulation'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a18'),
    title: 'Tekken',
    description: 'Description of Tekken',
    image:
      'https://cdn-products.eneba.com/resized-products/UcRIwm7v5eBcTKjBtPdmVIljnuIgzxh-DZXyZA5NCt4_350x200_1x-0.jpg',
    genresId: ['fight'].map((g) => genresMap[g]),
  },
  {
    _id: new ObjectId('65be7fb98709074a53fa3a19'),
    title: 'F1 2012',
    description: 'Description of F1 2012',
    image:
      'https://cdn-products.eneba.com/resized-products/CfK8q1h_350x200_1x-0.jpg',
    genresId: ['racing'].map((g) => genresMap[g]),
  },
];

export default gameTitlesData;
