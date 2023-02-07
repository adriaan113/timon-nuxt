<template>
  <div class="work-container">
    <ul class="work-list">
      <li class="work-item" v-for="n in 5" :key="n">
          <div class="box"></div>
          <!-- <div class="box-name">{{ n }}</div> -->
          <div class="client-wrapper">
            <p class="client-name">{{ n }}</p>
          </div>
      </li>
    </ul>

    <div class="main-text">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae blanditiis ipsum delectus modi illum impedit tempore at dolorum sunt ea numquam non assumenda, sequi exercitationem aspernatur voluptatibus temporibus, magni nihil.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos autem quidem reprehenderit eum labore iste? Rerum fugit repellat sequi!</p>
    </div>

    <div class="cta">
      <a :href="`mailto:${timon.email}`">email</a>
      <a :href="timon.insta" target="\blank">instagram</a>
    </div>

  </div>

</template>

<script>
export default {
    name: 'Work',

    data: function(){
      return{
        timon:{
          email: 'timon@timonvanderhijden.nl',
          insta: 'https://www.instagram.com/timonvanderhijden/?hl=en'
        }
      }
    },

    methods:{
      workScroll(){
        let sections = this.$gsap.utils.toArray(".work-item");

        this.$gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".wrapper",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: "+=3500",
          }
        });
      }
    },
    mounted(){
      this.workScroll();
    }
}
</script>

<style lang="scss">


//body en wrapper verplaatsen naar index of gewoon een apart scss file maken voor global dingen
body{
  overscroll-behavior: none;
  height: 100vh;
  margin: 0;
}

.wrapper{
  overscroll-behavior: none;
  height: 100%;
}

  .work-list{
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    .work-item{
      margin: 1rem;
      .box{
        width: 500px;
        height: 300px;
      }
    }
  }

  .main-text{
    display: flex;
    flex-flow: row nowrap;
    margin-left: 56px;

    p{
      max-width: 350px;
    }
  }

  .cta{
    display: flex;
    flex-flow: row nowrap;
    margin-left: 56px;
    margin-top: 1rem;
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



  @for $i from 1 through 5 {
      .work-item:nth-child(#{$i}) .box {
      background-color: lighten(red, $i * 5%);
    }
  }
</style>