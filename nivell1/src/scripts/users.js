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
            alert(this.GetUser(id).visits);
        }
    }
}