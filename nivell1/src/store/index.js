import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'; 
import env from './../scripts/env'; 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: Map,
    albums: Map,
    photos: Map
  },
  mutations: {
    SetUsers(state, mapUsers) {
      state.users = mapUsers;
    },
    SetAlbums(state, mapAlbums) {
      state.albums = mapAlbums;
    },
    SetPhotos(state, mapPhotos) {
      state.photos = mapPhotos;
    },
  },
  actions: {
    // Obtenció de la llista d'usuaris
    RetrieveUsers(context) {
      axios.get(env.baseURL + "/users")
        .then(response => {
          const userMap = new Map();
          for(let user of response.data) {
            user.visits = 0;
            userMap.set(user.id, user);
          }
          context.commit("SetUsers", userMap);
        })
        .catch(error => {
          context.commit("SetUsers", new Map());
          console.log(error);
        });
    },
    //Obtenció de la llista d'albums
    RetrieveAlbums(context) {
      axios.get(env.baseURL + "/photos")
      .then(response => {
        const albumMap = new Map();
        const photoMap = new Map();
        for(let photo of response.data) {
          photoMap.set(photo.id, photo);
          if(albumMap.has(photo.albumId)) {
            let album = albumMap.get(photo.albumId);
            let arr_photos = album.photos;
            arr_photos.push(photo.id);
            albumMap.set(photo.albumId, {visits: 0, photos: arr_photos});
          } else {
            albumMap.set(photo.albumId, {visits: 0, photos: [photo.id]});
          }
        }
        context.commit("SetAlbums", albumMap);
        context.commit("SetPhotos", photoMap);
        console.log(context.state.photos);
      })
      .catch(error => {
        context.commit("SetAlbums", new Map());
        context.commit("SetPhotos", new Map());
        console.log(error);
      });
    }
  }
})
