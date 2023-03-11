<template>
    <div class="mobile-container">
        <ul class="satan">
            <li class="item" ref="mob-item" v-for="(work, index) in works" :key="work[index]">
                <img :src="work.mob" alt="">
                <div>
                  <p class="mob-client">{{work.client}}</p>
                </div>
            </li>
        </ul>  
    </div>
</template>

<script>

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

 // import { triggerRef } from 'vue';



  export default {
      name: 'Mobile',
      props:{
        work: Array,
      },
      data: function() {
        return {
        works: this.work,
        }
      },
      methods:{
  
        mobileScroll(){
          let sections = gsap.utils.toArray(this.$refs["mob-item"]),
          currentSection = sections[0];

          ScrollTrigger.normalizeScroll(true);
  
          gsap.defaults({overwrite: 'auto', duration: 0.5});
  
          // stretch out the body height according to however many sections there are. 
          gsap.set("body", {height: (sections.length * 100) + "%"});
  
          // create a ScrollTrigger for each section
          sections.forEach((section, i) => {
            ScrollTrigger.create({
            // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
              start: () => (i - 0.5) * innerHeight,
              end: () => (i + 0.5) * innerHeight,
              // when a new section activates (from either direction), set the section accordinglyl.
              onToggle: self => self.isActive && setSection(section),
              markers: true,
              scrub: true,
              snap: {snapTo: 0.8, duration: 0, delay: 0, ease: "power1.inOut"}
            });
          });
  
        function setSection(newSection) {
          if (newSection !== currentSection) {
            gsap.to(currentSection, {autoAlpha: 0})
            gsap.to(newSection, {autoAlpha: 1});
            currentSection = newSection;
            sections[0].children[1].children[0].style.display = 'block';
          }
      }
  
      // handles the infinite part, wrapping around at either end....
      ScrollTrigger.create({
        start: 1,
        end: () => ScrollTrigger.maxScroll(window) - 1,
        onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
        onLeave: self => self.scroll(2)
        }).scroll(2);
        },
      },
      mounted(){
        setTimeout(() => {
            this.mobileScroll(); 
        }, 1000);

        
      
      }
  }
    
  </script>
  
  <style lang="scss" scoped>
  
  

  .mobile-container{

    ul{
      list-style: none;
      padding: 0;
      li{
        position: fixed;
        width: 100%;
        height: 100%;
        height: 100vh;
        top: 0;
        opacity: 0;
        visibility: hidden;
        &:first-of-type{
            opacity: 1;
            visibility: visible;
            div{
              p{
                // color: red;
                display: none;
              }
            }
        }
        img{
            width: 100%;
        }
        div{
          position: fixed;
          bottom: 0;
          height: 30px;
          z-index: 2;
          margin: 0;
          padding-left: 1rem;
          padding-bottom: .3rem;
          width: 100%;
          background: $white;
          p{
            margin: 0;
            color: black;
            //display: none;
          }
        }

      }
    }
}
  
</style>
  