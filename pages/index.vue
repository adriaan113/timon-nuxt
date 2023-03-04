<template>
  <div class="wrapper">
    <Header/>
    <mq-layout mq="md+">
      <Work/>
    </mq-layout>
    <mq-layout :mq="['xs','sm']">
      <Mobile/>
      <Info/>
    </mq-layout>
  </div>

</template>

<script>
import Work from '../components/Work.vue'
import Mobile from '../components/Mobile.vue'
import Info from '../components/Info.vue'

export default {
  components: { Mobile,  Work, Info },
  name: 'IndexPage'
}
</script>

<style lang="scss">
  // .wrapper{
  //   display: flex;
  //   flex-direction: column;
  //   font-family: "neue-haas-grotesk-display", sans-serif;
  //   font-weight: 600;
  //   font-style: normal;
  //   @media(max-width: 768px){
  //   font-family: "neue-haas-grotesk-display", sans-serif;
  //   font-weight: 500;
  //   font-style: normal;
  //   }
  // }
</style>
