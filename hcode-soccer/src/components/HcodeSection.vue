<template>
    <div>
        <div class="container">
            <div class="row mt-5">
                <h3>Você está vendo notícias do: {{ championship }}</h3>
            </div>
        </div>

        <component :is="currentComponent"></component>


        <div class="container">
            <div class="row my-club mt-5">
                <div class="col-6">
                    <h2>Seu Clube é: {{ myClub }}</h2>
                </div>
                <div class="col-6">
                    <HcodeInput v-model="myClub"/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import HcodeSectionBanner from './HcodeSectionBanner';
import HcodeInput from './HcodeInput';
import { mapGetters } from 'vuex'

export default{
    components:{
        HcodeSectionBanner,
        HcodeSectionNews: () => import('./HcodeSectionNews'),
        HcodeInput
    },
    data() {
        return {

        }
    },
    props:{
        currentComponent: String
    },
    computed:{
        ...mapGetters({
            championship: 'getChampionship',
            myClub: 'getClubName'
        }),

        /*
        championship(){
            return this.$store.getters.getChampionship
        }
        ...mapState(['championship']),
        ...mapState({ 
            myClub: 'clubName',
        })
        */
    }
}
</script>

<style scoped>

</style>