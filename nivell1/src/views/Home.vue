<template>
  <div class="container">
    <div class="row d-flex justify-content-center mt-4">
      <div class="col-sm-8 col-md-4 mt-2">
        <div class="info-box">
          <h3>Usuaris consultats</h3>
          <p v-if="GetVisitedUsers.length == 0">De moment cap ni un</p>
          {{this.GetVisitedUsers.length}}
          <!-- <table v-else>
            <tr class="text-left" v-for="user of GetVisitedUsers" :key="user.id">
              <td>{{user.name}}</td>
              <td>{{user.visits}}</td>
            </tr>
          </table> -->
        </div>
      </div>
      <div class="col-sm-8 col-md-4 mt-2">
        <div class="info-box">
          <h3>Albums consultats</h3>
          <p v-if="GetVisitedAlbums.length == 0">De moment cap ni un</p>
          <p v-else>Hi ha visites</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./../scripts/home.js"></script>
