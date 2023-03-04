<template>
    <div class="mobile-container">
        <ul class="satan">
            <li class="item" ref="mob-item" v-for="(work, index) in works" :key="work[index]">
                <img :src="work.mob" alt="">
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

  import { triggerRef } from 'vue';



  export default {
      name: 'Mobile',

      data () {
        return {
        works: [],
        }
      },
      methods:{

        // test(){

        //     let sections = this.$gsap.utils.toArray(this.$refs["mob-item"]);
        //     this.$gsap.to(sections, {
        //         yPercent: -100 * (sections.length -1),
        //         ease: "none",
        //         scrollTrigger:{
        //             trigger: ".wrapper",
        //             pin: true,
        //             scrub: true,
        //             snap: 1 / (sections.length - 1),
        //             //pinSpacing: false,
        //         }
        //     })
        // },
  
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
      mounted(){
        this.getWork();
        setTimeout(() => {
            this.mobileScroll(); 
            //this.test();
        }, 100);
      
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
        }
        // left: 0;
        // background-size: contain;
        img{
            width: 100%;
        }
      }
    }
}
  
</style>
  