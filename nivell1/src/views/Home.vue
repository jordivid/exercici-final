<template>
  <div class="container" id="homeContainer">
    <div class="row d-flex justify-content-center mt-4">
      <div class="col-sm-8 col-md-5 col-xl-4 mt-2">
        <div class="info-box mb-2">
          <h3>Usuaris consultats</h3>
          <p v-if="usuaris.length == 0">De moment cap ni un</p>
          <table class="w-100 table" v-else>
            <tr v-for="usuari of usuaris" :key="usuari.id">
              <td class="text-left w-75">{{usuari.name}}</td>
              <td class="text-right w-25">{{usuari.visits}}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-sm-8 col-md-5 col-xl-4 mt-2">
        <div class="info-box mb-2">
          <h3>Albums consultats</h3>
          <p v-if="albums.length == 0">De moment cap ni un</p>
          <table class="w-100 table" v-else>
            <tr v-for="album of albums" :key="album.id">
              <td class="text-left w-75">{{album.title}}</td>
              <td class="text-right w-25">{{album.visits}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./../scripts/home.js"></script>

<style src="./../styles/home.css"></style>
