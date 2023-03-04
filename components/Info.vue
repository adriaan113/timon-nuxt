<template>

    <div class="info-wrapper">
        <div class="info-btn">
            <h2>in</h2>
            <h2>fo</h2>
        </div>

    </div>
    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.info-wrapper{
    position: fixed;
    bottom: 9vh;
    right: 1.5rem;
    
    .info-btn{
        display: flex;
        flex-flow: column nowrap;
        height: 40px;
        h2{
            margin: 0;
            line-height: .8;
            text-transform: uppercase;
            text-align: left;
            font-weight: 500;
        }
    }
}
</style>