
<template>
  <!-- <div class="header-wrapper"> -->
    <div class="header-name">
      <h1>timon</h1>
      <h1>van</h1>
      <h1>der</h1>
      <h1>hijden</h1>
    </div>

    <!-- <div class="mobile-info">
      <h2>in</h2>
      <h2>fo</h2>
    </div> -->

  <!-- </div> -->

</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">

// @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;600&display=swap');

// .header-wrapper{
//   display: block;
//   @media(max-width: $sm){
//     background-color: $white;
//     z-index: 2;
//     bottom: 10vh;
//     position: fixed;
//     width: 100%;
//   }
// }

.header-name{
  display: flex;
  justify-content: space-between;
  margin: 0 3rem;
  @media(max-width: $sm){
    position: fixed;
    z-index: 2;
    bottom: 10vh;
    margin: 0 0 0 1rem;
  }
  h1{
    text-transform: uppercase;
    color: $black;
    @media(max-width:$sm){
      font-size: 1.5rem;
      margin: 0 .3rem;
      font-weight: 500;
    }
  }
}

// .mobile-info{
//   display: none;
//   @media(max-width: $sm){
//     display: flex;
//   }
// }

</style>
