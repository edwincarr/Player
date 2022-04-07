'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Songs', [
        {userId:3, title: '16', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/16BABYKEEM.mp3', imageUrl: 'https://m.media-amazon.com/images/I/71WLJTsNfoL._SS500_.jpg'},
        {userId:4, title: 'All Falls Down', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/AllFallsDown.mp4', imageUrl: 'https://i.scdn.co/image/ab67616d0000b27325b055377757b3cdd6f26b78'},
        {userId:5, title: 'Always Forever', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/always-foreverCULTS.mp3', imageUrl: 'https://images.genius.com/7a90f61d0dad5698f5a50b85ad3266f2.999x999x1.jpg'},
        {userId:6, title: 'American Boy', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/american-boyESTELLE.mp3', imageUrl: 'https://www.rhino.com/sites/g/files/g2000012691/files/styles/article_image/public/shine.jpg?itok=9Vfb7uFs'},
        {userId:7, title: 'chum', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/chumEARLSWEAT.mp3', imageUrl: 'https://images.genius.com/c5a84e1fffc69e59a2cae6e1e07f2f13.720x720x1.png'},
        {userId:8, title: 'Dark Red', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/dark-redSTEVELACY.mp3', imageUrl: 'https://c-cl.cdn.smule.com/rs-s-sf-1/arr/91/d9/c310465e-8519-4e3f-b967-e21c60c8d8b6_1024.jpg'},
        {userId:9, title: 'Duvet', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/duvetBOA.mp3', imageUrl: 'https://images.genius.com/f9ddbd7f038b942cd6fc1023a7ca8477.600x600x1.jpg'},
        {userId:10, title: 'Nights', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Frank+Ocean+-+Nights.mp3', imageUrl: 'https://images.genius.com/626ddf4c88de200d9487bb42449d1ae3.1000x1000x1.png'},
        {userId:10, title: 'only you (UNRELEASED)', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Frank_Ocean_-_Only_You_(getmp3.pro).mp3', imageUrl: 'https://i1.sndcdn.com/artworks-000234788458-lmyjxr-t500x500.jpg'},
        {userId:11, title: 'gary come home', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Gary_Come_Home_FULL_SONG_(getmp3.pro).mp3', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273707b35382a393b23ea36fd97'},
        {userId:12, title: 'get lucky', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/get-luckyDAFT.mp3', imageUrl: 'https://i1.sndcdn.com/artworks-000046504318-u37zm1-t500x500.jpg'},
        {userId:13, title: 'get you', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/get-youDANIELCEASER.mp3', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/52/Daniel_Caesar_Get_You.jpg'},
        {userId:14, title: 'Feel Good Inc', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Gorillaz_-_Feel_Good_Inc_Official_(getmp3.pro).mp3', imageUrl: 'https://i1.sndcdn.com/artworks-000221242333-v8kzzn-t500x500.jpg'},
        {userId:15, title: 'Howls Moving Castle Theme', url:"https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Howl's+Moving+Castle+%5BOST+-+Theme+Song%5D.mp3", imageUrl: 'https://cdn.vox-cdn.com/thumbor/hHzi56bzWh3TaLYx7mHlRHe8UCk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20007566/GHI_HowlsMovingCastle_Select1.jpg'},
        {userId:16, title: 'i dont want to cry', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/i-dont-want-to-cryAFTER-HOURS.mp3', imageUrl: 'https://e.snmc.io/i/1200/s/171963f8de0329d60bd6c9c4a1ded381/8289040'},
        {userId:11, title: 'Im a goofy goober', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Im_a_Goofy_Goober_-_The_SpongeBob_(getmp3.pro).mp3', imageUrl: 'http://pm1.narvii.com/6414/ddcce35c9df455d3b79c3dc118765e78298ab09f_00.jpg'},
        {userId:10, title: 'oceans', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Jay-Z_-_Oceans_Feat_Frank_Ocean_(getmp3.pro).mp3', imageUrl: 'https://i1.sndcdn.com/artworks-CWKrL9Ms4mFQ-0-t500x500.jpg'},
        {userId:17, title: 'run', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Joji_-_Run_(getmp3.pro).mp3', imageUrl: 'https://cdna.artstation.com/p/assets/images/images/032/616/692/large/roland-c.jpg?1606955631'},
        {userId:4, title: 'Stronger', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Kanye_West_-_Stronger_(getmp3.pro).mp3', imageUrl: 'https://images.genius.com/b9d6cf24ceb76fa5d8ebf02569e16e2f.1000x1000x1.png'},
        {userId:18, title: 'les', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/lesCHILDISH.mp3', imageUrl: 'https://m.media-amazon.com/images/I/81ma0aEwYcL._SL1211_.jpg'},
        {userId:19, title: 'MONTERO', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Lil_Nas_X_-_MONTERO_Call_Me_By_You_(getmp3.pro).mp3', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e6/Montero_%28Call_Me_by_Your_Name%29.png'},
        {userId:20, title: 'Agitations tropicales', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/LImpratrice_AGITATIONS_TROPICAL_(getmp3.pro).mp3', imageUrl: 'https://i1.sndcdn.com/artworks-000132492181-f2giwc-t500x500.jpg'},
        {userId:21, title: 'Love Yourz', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Love_Yourz_(getmp3.pro).mp3', imageUrl: 'https://miro.medium.com/max/1200/0*pnTPMu3UkwDUbd5r.jpg'},
        {userId:22, title: 'Daylight', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Matt_and_Kim_-_Daylight_Official_(getmp3.pro).mp3', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273acbe616ad7ba01c2f335dd0a'},
        {userId:18, title: 'me and your mama', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/me-and-your-mamaCHILDISH.mp3', imageUrl: 'https://e.snmc.io/i/1200/s/addc4d03f170b9599c138f2ae72e5224/6308659'},
        {userId:23, title: 'Money Trees', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Money_Trees_(getmp3.pro).mp3', imageUrl: 'https://images.genius.com/c129d5d114d2cd2303d72e073746a5db.1000x1000x1.jpg'},
        {userId:24, title: 'Promiscuous', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Nelly_Furtado_-_Promiscuous_Offici_(getmp3.pro).mp3', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/55/Loose_%28Nelly_Furtado_album_-_cover_art%29.png'},
        {userId:21, title: 'No Role Modelz', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/No+Role+Modelz.mp4', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2a/2014ForestHillsDrive.jpg'},
        {userId:10, title: 'Novacane (Explicit)', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Novacane_Explicit_(getmp3.pro).mp3', imageUrl: 'https://www.muzplay.net/sites/default/files/images_2012_05/frank_ocean-nostalgia_ultra.jpeg'},
        {userId:25, title: 'Passionfruit', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Passionfruit_(getmp3.pro).mp3', imageUrl: 'https://i1.sndcdn.com/artworks-000383534739-k04zep-t500x500.jpg'},
        {userId:26, title: 'New Magic Wand', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Tyler_the_Creator_-_New_magic_wand_(getmp3.pro).mp3', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg'},
        {userId:10, title: 'Thinkin Bout You', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Thinkin+Bout+You.mp3', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Frank-Ocean-Thinkin-Bout-You-2012.png'},
        {userId:27, title: 'The Real Slim Shady', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/the-real-slim-shady.mp3', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/69/Eminem_-_The_Real_Slim_Shady_CD_cover.jpg'},
        {userId:28, title: 'Fragile', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Tatsuro_Yamashita_-_Fragile_(getmp3.pro).mp3', imageUrl: 'https://i.ytimg.com/vi/nRbKOFJ2rag/hqdefault.jpg'},
        {userId:10, title: 'swim good', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Swim_Good_(getmp3.pro).mp3', imageUrl: 'https://i1.sndcdn.com/artworks-GSesiAJDzczydxwl-DimbjQ-t500x500.jpg'},
        {userId:29, title: 'sundress', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/sundressASAP.mp3', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e5/ASAP_Rocky_%E2%80%93_Sundress.png'},
        {userId:11, title: 'Without You', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Sponge+bob+_Without+You_.mp3', imageUrl: 'http://images.genius.com/034f5f6094b0eba31d4fee6c1dc8001e.500x500x1.jpg'},
        {userId:30, title: 'September', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/september.mp3', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/95/BestofEarthWind%26Fire.jpg'},
        {userId:8, title: 'RYD', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Ryd.mp3', imageUrl: 'https://m.media-amazon.com/images/I/91JqqKEIxHL._SS500_.jpg'},
        {userId:18, title: 'Redbone', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Redbone_(getmp3.pro).mp3', imageUrl: 'https://e.snmc.io/i/1200/s/addc4d03f170b9599c138f2ae72e5224/6308659'},
        {userId:31, title: 'Free Room', url:'https://music-hosting-edwin.s3.us-east-2.amazonaws.com/Ravyn+Lenae+-+Free+Room+feat.+Appleby+%5BOfficial+Video%5D.mp3', imageUrl: 'https://i1.sndcdn.com/artworks-Mc9Xs14waEhT-0-t500x500.jpg'},

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Songs', null, {});
  }
};
