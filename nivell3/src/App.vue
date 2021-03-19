<template>
  <div id="app">
    <div class="content">
        <header>
          <nav class="navbar navbar-expand-md navbar-dark">
            <div class="navbar-brand"><img src="./assets/Wolfenstein-5-icon.png" alt="Logo" width="40" height="auto"></div>
            <form class="form-inline" id="formulari">
              <div class="input-group" style="width: 200px">
                <input type="text" class="form-control" placeholder="Nom usuari" v-model.trim="search" @keyup="ListUsers" @focus="ClearSearch">
                <div class="input-group-append">
                  <span id="lupa" class="input-group-text material-icons" >search</span>
                </div>
              </div>
            </form>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegacio">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-center" id="navegacio">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/users" class="nav-link">Users</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/albums" class="nav-link">Albums</router-link>
                </li>
              </ul>
            </div>
          </nav>

          <div v-if="show" id="llista" class="animate__animated animate__slideInDown">
              <p v-if="usuaris.length == 0" class="mt-3">No s'ha trobat usuaris</p>
              <ul v-else class="list-group text-left">
                <li class="list-group-item" v-for="usuari of usuaris" :key="usuari.id"
                  @click="Consulta(usuari.id)">
                  {{usuari.name | Majuscules}}
                </li>
              </ul>
          </div>

        </header>
        <main>
          <router-view class="animate__animated animate__zoomIn"/>
        </main>
    </div>
    <footer class="d-flex justify-content-between align-items-center">
      <div class="ml-3">Jordi Vidaña</div>
      <div class="mr-3">Projecte fi de curs Vue</div>
    </footer>
  </div>
</template>

<script src="./scripts/app.js"></script>

<style src="./styles/app.css"></style>
