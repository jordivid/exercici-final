import { mapGetters } from 'vuex'; 
import ContenidorFitxes from "./../components/ContenidorFitxes.vue";

export default {
    name: "albums",
    components: {
        ContenidorFitxes
    },
    computed: {
        ...mapGetters(['GetAlbums', 'GetAlbum', 'GetVisitedAlbums'])
    },
    methods: {
        Consulta(id) {
            this.$store.commit("IncAlbumVisits", id);
            this.$router.push(
                {
                    name: "AlbumDetails",
                    params: {
                        idAlbum: id
                    }
                });
        }
    }
}