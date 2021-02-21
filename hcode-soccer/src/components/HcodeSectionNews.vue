<template>
        <section>
            <div class="container">
                <HcodeSectionNewsIndividual 
                    img-name="news1.jpg"
                    img-info = "Notícia 1"
                    news-title="Começam os treinos para a nova temporada"
                    news-content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error soluta 
                    quibusdam quia esse iure tenetur nisi? Sint maiores reprehenderit nesciunt vel, maxime 
                    consectetur earum sequi, voluptates ab eos ullam provident? Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit. Consectetur debitis vero dolores veniam neque, architecto ab 
                    maxime odit ut. Perferendis quaerat explicabo eos nihil cumque sed, itaque incidunt quisquam aliquid!"
                    news-date="01/01/2020"
                />

                <HcodeSectionNewsIndividual 
                    img-name="news2.jpg"
                    img-info = "Notícia 2"
                    news-title="Jogo de quarta-feira termina empatado"
                    news-content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error soluta 
                    quibusdam quia esse iure tenetur nisi? Sint maiores reprehenderit nesciunt vel, maxime 
                    consectetur earum sequi, voluptates ab eos ullam provident? Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit. Consectetur debitis vero dolores veniam neque, architecto ab 
                    maxime odit ut. Perferendis quaerat explicabo eos nihil cumque sed, itaque incidunt quisquam aliquid!"
                    news-date="07/01/2020"
                />

                <HcodeSectionNewsIndividual 
                    img-name="news3.jpg"
                    img-info = "Notícia 3"
                    news-title="A inauguração do novo estádio"
                    news-content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error soluta 
                    quibusdam quia esse iure tenetur nisi? Sint maiores reprehenderit nesciunt vel, maxime 
                    consectetur earum sequi, voluptates ab eos ullam provident? Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit. Consectetur debitis vero dolores veniam neque, architecto ab 
                    maxime odit ut. Perferendis quaerat explicabo eos nihil cumque sed, itaque incidunt quisquam aliquid!"
                    news-date="20/01/2020"
                />
            </div>
        </section>
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual';

export default {
    components:{
        HcodeSectionNewsIndividual
    }
}
</script>

<style scoped>
section{
    padding: 50px 0;
    margin-top: 25px;
    background-color: #f37520;
}
</style>