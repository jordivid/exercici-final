<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-md navbar-dark">
        <div class="navbar-brand"><img src="./assets/Wolfenstein-5-icon.png" alt="Logo" width="40" height="auto"></div>

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
    </header>
    <main>
      <router-view class="animate__animated animate__zoomIn"/>
    </main>
    <footer class="d-flex justify-content-between align-items-center">
      <div class="ml-3">Jordi Vidaña</div>
      <div class="mr-3">Projecte fi de curs Vue</div>
    </footer>
  </div>
</template>

<script src="./scripts/app.js"></script>

<style src="./styles/app.css"></style>
