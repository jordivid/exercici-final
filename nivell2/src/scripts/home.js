import { mapGetters } from 'vuex';

export default {
    name: 'Home',
    computed: {
        ...mapGetters(['GetAlbums', 'GetAlbum', 'GetVisitedAlbums', 'GetPhoto', 'GetUsers', 'GetUser', 'GetVisitedUsers'])
    },
    filters: {
        Majuscules(valor) {
            return valor.toUpperCase();
        }
    }
}
