<template>
  <div class="wrapper">
    <Header/>
    <Work/>
    <!-- <Links/> -->
  </div>

</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="scss">
  .wrapper{
    font-family: "neue-haas-grotesk-display", sans-serif;
    font-weight: 600;
    font-style: normal;
    @media(max-width: 768px){
    font-family: "neue-haas-grotesk-display", sans-serif;
    font-weight: 500;
    font-style: normal;
    }
  }
</style>
