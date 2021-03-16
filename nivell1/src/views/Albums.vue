<template>
  <div>
    <ContenidorFitxes titol="Albums">
        <div class="fitxa" v-for="album of GetAlbums" :key="album.id">
          <h6>{{album.title}}</h6>
          <button class="btn btn-sm btn-primary mt-1" @click="Consulta(album.id)">Consultar</button>
        </div>
    </ContenidorFitxes>
  </div>
</template>

<script src="./../scripts/albums.js"></script>