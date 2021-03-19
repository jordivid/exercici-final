<template>
    <div class="container">
        <h3 class="mt-3 mb-3">{{photos[0].title}}</h3>
        <div class="contenidor-fotos">
            <img :src="photo.thumbnailUrl" :alt="photo.title" v-for="photo of photos" :key="photo.id">
        </div>
    </div>
</template>

<script src="./../scripts/albumDetails.js"></script>

<style src="./../styles/albumDetails.css"></style>