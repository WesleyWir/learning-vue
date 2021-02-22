import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        championship: 'Campeonato Brasileiro',
        clubName: "Flamengo",
        news: [{
            id: 1,
            title: 'Começam os treinos para a nova temporada',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error soluta quibusdam quia esse iure tenetur nisi? Sint maiores reprehenderit nesciunt vel, maxime consectetur earum sequi, voluptates ab eos ullam provident? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur debitis vero dolores veniam neque, architecto ab maxime odit ut. Perferendis quaerat explicabo eos nihil cumque sed, itaque incidunt quisquam aliquid!',
            date: '2020-01-01',
            img: 'news1.jpg',
            imgInfo: 'Notícia 1'

        },{
            id: 2,
            title: 'Jogo de quarta-feira termina empatado',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error soluta quibusdam quia esse iure tenetur nisi? Sint maiores reprehenderit nesciunt vel, maxime consectetur earum sequi, voluptates ab eos ullam provident? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur debitis vero dolores veniam neque, architecto ab maxime odit ut. Perferendis quaerat explicabo eos nihil cumque sed, itaque incidunt quisquam aliquid!',
            date: '2020-01-07',
            img: 'news2.jpg',
            imgInfo: 'Notícia 2'
        }, {
            id: 3,
            title: 'A inauguração do novo estádio',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error soluta quibusdam quia esse iure tenetur nisi? Sint maiores reprehenderit nesciunt vel, maxime consectetur earum sequi, voluptates ab eos ullam provident? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur debitis vero dolores veniam neque, architecto ab maxime odit ut. Perferendis quaerat explicabo eos nihil cumque sed, itaque incidunt quisquam aliquid!',
            date: '2020-01-22',
            img: 'news3.jpg',
            imgInfo: 'Notícia 3'
        }]
    },
    getters: {
        getChampionship(state){
            return state.championship;
        },
        getClubName(state){
            return state.clubName;
        },
        getNews(state){
            return state.news;
        }
    },
    mutations:{
        setChampionship(state, newValue){
            state.championship = newValue;
        }
    },
    actions:{
        changeChampionship(context, value){
            context.commit('setChampionship', value);
        }
    }
})