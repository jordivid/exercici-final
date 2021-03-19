import { mapGetters } from 'vuex'; 
import ContenidorFitxes from "./../components/ContenidorFitxes.vue";

export default {
    name: "users",
    components: {
        ContenidorFitxes
    },
    computed: {
        ...mapGetters(['GetUsers', 'GetUser', 'GetVisitedUsers'])
    },
    methods: {
        Consulta(id) {
            this.$store.commit("IncUserVisits", id);
            this.$router.push(
            {
                name: "UserDetails",
                params: {
                    idUser: id
                }
            });
        }
    },
    filters: {
        Majuscules(valor) {
            return valor.toUpperCase();
        }
    }
}