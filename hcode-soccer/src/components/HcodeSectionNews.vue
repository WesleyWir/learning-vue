<template>
        <section>
            <div class="container">
                <HcodeSectionNewsIndividual />
                <HcodeSectionNewsIndividual />
                <HcodeSectionNewsIndividual />
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