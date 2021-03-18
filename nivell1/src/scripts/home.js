import { mapGetters } from 'vuex';

export default {
    name: 'Home',
    data() {
        return {
            usuaris: [],
            albums: []
        }
    },
    computed: {
        ...mapGetters(['GetAlbums', 'GetAlbum', 'GetVisitedAlbums', 'GetPhoto', 'GetUsers', 'GetUser', 'GetVisitedUsers'])
    },
    created() {
        this.updateUsers(this.GetUsers);

        this.updateAlbums(this.GetAlbums);
    },
    methods: {
        updateUsers(value) {
            const users = value;
            this.usuaris = [];

            for(let user of users) {
                if(user.visits > 0) {
                    this.usuaris.push(user);
                }
            }
        },
        updateAlbums(value) {
            const albumes = [];
            let album;
            let alb;
            for(let valor of value) {
                alb = this.GetAlbum(valor.id);
                if(alb.visits) {
                    album = {};
                    album.id = alb.id;
                    album.title = this.GetPhoto(alb.photos[0]).title;
                    album.visits = alb.visits;
                    albumes.push(album);
                }
            }
            this.albums = albumes;
        }
    }
}