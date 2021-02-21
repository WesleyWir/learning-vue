<template>
  <div id="app">
    <HcodeHeader />

    <HcodeFooter />
  </div>
</template>

<script>
import HcodeHeader from './components/HcodeHeader';
import HcodeFooter from './components/HcodeFooter';

export default {
  name: 'App',
  components: {
    HcodeHeader,
    HcodeFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>
