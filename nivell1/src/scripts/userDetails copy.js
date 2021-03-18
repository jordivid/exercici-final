import { mapGetters } from 'vuex';
import env from './../scripts/env';
import axios from 'axios';

export default {
    data() {
        return {
            name: String,
            usuari: new Map()
        }
    },
    filters: {
        Majuscules(valor) {
            return valor.toUpperCase();
        }
    },
    computed: {
        ...mapGetters(['GetUser'])
    },
    async created() {
        let user = this.GetUser(this.$route.params.idUser);
        const userMap = new Map();
        if(user == undefined) {
            this.$router.push("/users");

            const response = await axios.get(env.baseURL + "/users");
            for(let usuari of response.data) {
                usuari.visits = 0;
                userMap.set(usuari.id, usuari);
            }
            this.$store.commit("SetUsers", userMap);
            // user = this.GetUser(this.$route.params.idUser);
            // user = this.$store.state.users.get(this.$route.params.idUser);
            user = userMap.get(this.$route.params.idUser);
        }
        this.initialize(user);
        // this.name = user.name;
        // this.usuari = new Map();
        // this.usuari.set("E-mail", user.email);
        // this.usuari.set("Telèfon", user.phone);
        // this.usuari.set("Web", user.website);
        // this.usuari.set("Carrer", user.address.street);
        // this.usuari.set("Apartament", user.address.suite);
        // this.usuari.set("CP", user.address.zipcode);
        // this.usuari.set("Ciutat", user.address.city);
    },
    methods: {
        initialize(user) {
            this.name = user.name;
            this.usuari = new Map();
            this.usuari.set("E-mail", user.email);
            this.usuari.set("Telèfon", user.phone);
            this.usuari.set("Web", user.website);
            this.usuari.set("Carrer", user.address.street);
            this.usuari.set("Apartament", user.address.suite);
            this.usuari.set("CP", user.address.zipcode);
            this.usuari.set("Ciutat", user.address.city);
        }
    }
}