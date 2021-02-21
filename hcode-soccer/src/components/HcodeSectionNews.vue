<template>
        <section>
            <div class="container">
                <HcodeSectionNewsIndividual 
                    v-for="notice in news"
                    :key = "notice.id"
                    :img-name="notice.img"
                    :img-info = "notice.imgInfo"
                    :news-date="notice.date"
                >
                    <template #title>
                        <h2>{{ notice.title }}</h2>
                    </template>
                        <p>{{ notice.content | truncate(200) }}</p>
                </HcodeSectionNewsIndividual>

            </div>
        </section>
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual';

export default {
    components:{
        HcodeSectionNewsIndividual
    },
    data() {
        return {
            news: []
        }
    },
    created() {
        this.news = [{
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
}
</script>

<style scoped>
section{
    padding: 50px 0;
    margin-top: 25px;
    background-color: #f37520;
}
</style>