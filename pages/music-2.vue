<template>
  <main class="my-music-2">
    <div class="my-music-2__jacket">
      <div class="my-music-2__image-genre">
        <img :src="topArtistImage">
      <!--  <div class="my-music-2__genre">
          <p class="my-music-2__header">Géneros favoritos</p>
          <ul>
            <li>{{ topGenre }}</li>
          </ul>
        </div> -->
      </div>
      <div class="my-music-2__artists-songs">
        <div class="my-music-2__artists">
          <p class="my-music-2__header">Artistas favoritos</p>
          <ul>
            <li v-for="artist in artists.items" :key="artist.name">
              {{ artist.name }}
            </li>
          </ul>
        </div>
        <div class="my-music-2__songs">
          <p class="my-music-2__header">Canciones favoritas</p>
          <ul>
            <li v-for="track in tracks.items" :key="track.name">
              {{ track.name }}
          </li></ul>
        </div>
      </div>
    </div>
    <div class="my-music-2__share">
      <h1>Comparte tu música</h1>
      <p class="my-music-2__share--description">
        Si llevas tiempo disfrutando de temazos, ¿por qué no lo compartes?
      </p>      
    </div>
  </main>
</template>


<style scoped>
main {
    background-color: #b79cc9;
}
.my-music-2 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.my-music-2__jacket, .my-music-2__share {
    flex-basis: 33%;
    margin-right: 2rem;
}

.my-music-2__jacket {
    background-color: #000;
    color: #b79cc9;
    display: flex;
    padding: 1.5rem;
    font-size: 1.2em;
    line-height: 1.4em;
}

.my-music-2__image-genre img {
    max-width: 400px;
}

.my-music-2 ul {
    padding: 0;
    list-style-type: none;
}

.my-music-2__header {
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 0.75rem;
}

.my-music-2__songs {
    margin-top: 1.25rem;
}

.my-music-2__genre {
    margin-top: 1rem;
}

.my-music-2__genre li {
    font-size: 2em;
    font-weight: bold;
}

.my-music-2__artists-songs {
    margin-left: 1.5rem;
}


.my-music-2__share {
    color: #fff;
}
.my-music-2__share h1 {
    font-size: 6em;
}

.my-music-2__share .my-music-2__share--description {
    font-size: 1.5em;
    margin-bottom: 1rem;
}

.twitter-share-button {
    text-align: center;
}
</style>

<script>
import { setSpotifyAccessToken, getArtists, getTracks, getTopGenre } from '~/code/spotify';

export default {
    head() {
        return {
            title: 'Comparte tu música',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Comparte tus artistas y canciones favoritos de Wecodefy.',
                },
                { 
                    name: 'twitter:title',
                    content: 'Wecodefy', 
                },
                {
                    name: 'twitter:description',
                    content: 'Descubre tus artistas y canciones favoritos de Wecodefy',
                },
                {
                    name: 'twitter:image',
                    content: '~assets/images/wecodefy-logo.png',
                },
                { 
                    name: 'twitter:card', 
                    content: 'summary_large_image', 
                },
            ],
            link: [
                {
                    rel: 'canonical',
                    href: 'https://github.com/evawythien/awesome-spotify',
                },
            ],
        };
    },
    async asyncData() {
        await setSpotifyAccessToken();
  
        const { artists, topArtistImage } = await getArtists('long_term');
        const { tracks } = await getTracks('long_term');
        const topGenre = getTopGenre(artists);

        return { artists, topArtistImage, tracks, topGenre };
    }
};
</script>