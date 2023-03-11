<template>
  <div class="desk-container">
    <ul class="desk-list">
      <li class="desk-item" ref="desk-item" v-for="(work, index) in works" :key="work[index]">
          <div class="box" :style="{ 'background-image': 'url(' + work.desk + ')' }">
          </div>
          <div class="client-wrapper">
            <p class="client-name">{{ work.client }}</p>
          </div>
      </li>
    </ul>

    <div class="main-desk-text">
      <p>
        This design studio is square, it is round, it can be flat or with dimensions. It admires the old and the new, the obvious and the hidden. Studio Timon van der Hijden is a one-man 
      </p>
      <p>studio and is involved in creative communication, image making and spatial design. Based in Rotterdam but working worldwide.</p>
    </div>

    <div class="desk-cta">
      <a :href="`mailto:${timon.email}`">email</a>
      <a :href="timon.insta" target="\blank">instagram</a>
    </div>

  </div>

</template>

<script>
import { triggerRef } from 'vue';
export default {
    name: 'Desktop',
    props: {
      work: Array,
    },
    data: function(){
      return{
        timon:{
          email: 'timon@timonvanderhijden.nl',
          insta: 'https://www.instagram.com/timonvanderhijden/?hl=en'
        },
        works: this.work,
      }
    },

    methods:{
      workScroll(){
        let sections = this.$gsap.utils.toArray(this.$refs["desk-item"]);
        // copy = sections[0].cloneNode(true);
        // sections[0].parentNode.appendChild(copy);

        this.$gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".wrapper",
            pin: true,
            scrub: 1,
            //snap: 1 / (sections.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: "+=3500",
          }
        });

      },
      // openWork(work){
      //   console.log(work.client);
      // },
    },
    mounted(){
      
      //this.getWork();
      setTimeout(()=>{
        this.workScroll();
      },100)
      
    }
}
</script>

<style lang="scss" scoped>

.desk-container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 100px);
}

  .desk-list{
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    width: 100%;
    .desk-item{
      margin: 1rem;
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      .box{
        background-size: cover;
        background-position: 50% 50%;
        min-width: 400px;
        min-height: 40vh;
      }
    }
  }

  .main-desk-text{
    display: flex;
    flex-flow: row nowrap;
    margin-left: 56px;
    p{
      max-width: 350px;
      &:first-of-type{
        margin-right: 1.5rem;
      }
    }
  }

  .desk-cta{
    display: flex;
    flex-flow: row nowrap;
    margin: 1rem 0 1rem 56px;
    a{
      color: black;
      text-transform: uppercase;
      min-width: 350px;
      text-decoration: none;
      &:hover{
        text-decoration: underline;
      }
    }
  }
</style>