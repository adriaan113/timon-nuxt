
<template>
    <div class="mob-header">
      <h1>timon van der hijden</h1>      
      <Info/>

      <div class="mob-client-name">
        <!-- <h2>{{name}}</h2> -->
      </div>

    </div>
</template>

<script>
import Info from './Info.vue'

export default {
  components:{Info},
  name: 'MobHeader',
  props: {
    work: Array,
  },
  data: function(){
    return{
      name: this.work
    }
  }
}
</script>

<style lang="scss">

.mob-header{
  display: flex;
  justify-content: space-between;
  background: $white;
  position: fixed;
  z-index: 2;
  bottom: 30px;
  width: 100%;
  height: 12vh;
  max-height: 140px;
  left: 0;
  h1{
    text-transform: uppercase;
    color: $black;
    font-weight: 500;
    font-size: 1.5rem;
    margin: 1.5rem 0 0 1rem;
  }
}
</style>