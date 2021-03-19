import store from "./../store";
import { mapGetters } from 'vuex';
import $ from 'jquery';

export default {
    created() {
        this.$store.dispatch("RetrieveUsers");
        this.$store.dispatch("RetrieveAlbums");
    },
    data() {
        return {
            search: ""
        }
    },
    computed: {
        ...mapGetters(['GetUserByName'])
    },
    methods: {
        SearchUser() {
            let user;

            if(this.search == "") return;
            
            user = this.GetUserByName(this.search);
            // if(user == null) {
            //     $("#missatge").modal();
            // } else {
            //     this.$store.commit("IncUserVisits", user.id);
            //     this.$router.push(
            //         {
            //             name: "UserDetails",
            //             params: {
            //                 idUser: user.id
            //             }
            //         });
            // }

            if(user == null) {
                $("#missatge").modal();
            } else {
                if(this.$route.name == "UserDetails") {
                    /*
                        Si es selecciona un usuari amb el cercador i ja estem
                        a la ruta de consulta de detalls d'usuari, per tal que
                        Vue no doni problemes amb la ruta duplicada s'empra una
                        ruta pont que ens reenviarà cap aquí.
                    */
                    if(this.$route.params.idUser != user.id) {
                        this.$store.commit("IncUserVisits", user.id);
                        this.$router.push(
                        {
                            name: "ChangeUser",
                            params: {
                                idUser: user.id
                            }
                        });
                    }
                } else {
                    /*
                        Selecció d'un usuari des de la llista d'usuaris o des del
                        cercador en una ruta que no és la de consulta de detalls.
                    */
                    this.$store.commit("IncUserVisits", user.id);
                    this.$router.push(
                    {
                        name: "UserDetails",
                        params: {
                            idUser: user.id
                        }
                    });
                }
            }


            
        }
    },
    modules: [
        store
    ]
}