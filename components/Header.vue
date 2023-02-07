
<template>
  <div class="header-name">
    <h1>timon</h1>
    <h1>van</h1>
    <h1>der</h1>
    <h1>hijden</h1>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">

// @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;600&display=swap');

.header-name{
  display: flex;
  justify-content: space-between;
  margin: 0 3rem;
  h1{
    text-transform: uppercase;
    // font-family: 'Barlow', sans-serif;
    // font-weight: 600;
  }
}

</style>
