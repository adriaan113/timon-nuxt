<template>
  <div class="wrapper">

    <mq-layout mq="md+">
      <DeskHeader/>
      <Desktop :work="works"/>
    </mq-layout>

    <mq-layout :mq="['xs','sm']">
      <Mobile :work="works"/>
      <MobHeader :work="works"/>
    </mq-layout>

  </div>

</template>

<script>
import DeskHeader from '../components/DeskHeader.vue'
import MobHeader from '../components/MobHeader.vue'
import Desktop from '../components/Desktop.vue'
import Mobile from '../components/Mobile.vue'

export default {
  components: { Mobile, Desktop, DeskHeader, MobHeader },
  name: 'IndexPage',
  data: function(){
    return{
      works: [],
    }
  },
  methods:{
    getWork(){
        fetch('/data/work.json')
        .then((response) => response.json())
        .then((data) => {
          for(let i =0; i<data.timon.length;i++){
            this.works.push(data.timon[i]);
          }
        })
      },
  },
  created(){
    this.getWork();
  }
}
</script>

