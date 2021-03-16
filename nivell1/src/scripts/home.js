import { mapGetters } from 'vuex';

export default {
    name: 'Home',
    computed: {
        ...mapGetters(['GetAlbums', 'GetAlbum', 'GetVisitedAlbums', 'GetUsers', 'GetUser', 'GetVisitedUsers'])
    }
}