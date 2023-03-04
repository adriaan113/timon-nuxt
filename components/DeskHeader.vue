
<template>
    <div class="desk-header">
      <h1>timon</h1>
      <h1>van</h1>
      <h1>der</h1>
      <h1>hijden</h1>
    </div>
</template>

<script>
export default {
  name: 'DeskHeader'
}
</script>

<style lang="scss">

.desk-header{
  display: flex;
  justify-content: space-between;
  margin: 0 3rem;
  h1{
    text-transform: uppercase;
    color: $black;
  }
}
</style>
