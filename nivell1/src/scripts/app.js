import store from "./../store";

export default {
    created() {
        this.$store.dispatch("RetrieveUsers");
        this.$store.dispatch("RetrieveAlbums");
    },
    modules: [
        store
    ]
}