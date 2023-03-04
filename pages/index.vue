<template>
  <div class="wrapper">

    <mq-layout mq="md+">
      <DeskHeader/>
      <Work/>
    </mq-layout>

    <mq-layout :mq="['xs','sm']">
      <Mobile/>
      <MobHeader/>
    </mq-layout>

  </div>

</template>

<script>
import DeskHeader from '../components/DeskHeader.vue'
import MobHeader from '../components/MobHeader.vue'
import Work from '../components/Work.vue'
import Mobile from '../components/Mobile.vue'
// import Info from '../components/Info.vue'

export default {
  components: { Mobile,  Work, DeskHeader, MobHeader },
  name: 'IndexPage'
}
</script>

<!-- <style lang="scss">
</style> -->
