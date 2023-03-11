<template>

    <div class="info-wrapper">
        <div class="info-btn" @click="toggleModal">
            <h2 ref="in">in</h2>
            <h2 ref="fo">fo</h2>
        </div>

        <div class="modal" ref="modal">

            <div class="mob-cta">
                <a :href="`mailto:${timon.email}`">email</a>
                <a :href="timon.insta" target="\blank">instagram</a>
            </div>

            <div class="main-mob-text">
                <p>This design studio is square, it is round, it can be flat or with dimensions. It admires the old and the new, the obvious and the hidden. Studio Timon van der Hijden is a one-man studio and is involved in creative communication, image making and spatial design. Based in Rotterdam but working worldwide.</p>
            </div>
        </div>

    </div>
    
</template>

<script>
export default {
    data: function(){
      return{
        timon:{
          email: 'timon@timonvanderhijden.nl',
          insta: 'https://www.instagram.com/timonvanderhijden/?hl=en'
        },
        modal: true,
      }
    },
    methods:{
        toggleModal(){

            if(this.modal){
                this.$refs["modal"].style.display = 'flex'; 
                document.querySelector('.info-btn h2:first-of-type').innerHTML = 'cl';
                document.querySelector('.info-btn h2:last-of-type').innerHTML = 'ose';
                this.modal = false;

            }else{
                this.$refs["modal"].style.display = 'none'; 
                document.querySelector('.info-btn h2:first-of-type').innerHTML = 'in';
                document.querySelector('.info-btn h2:last-of-type').innerHTML = 'fo';
                this.modal = true;
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.info-wrapper{
    margin: 1.5rem 0 0 0; 
    .info-btn{
        display: flex;
        flex-flow: column nowrap;
        height: 40px;
        cursor: pointer;
        h2{
            margin: 0;
            line-height: .8;
            text-transform: uppercase;
            text-align: left;
            font-weight: 500;
        }
    }
}

.test{
    display: flex;
}

.modal{
    display: none;
    position: fixed;
    flex-flow: column nowrap;
    width: 100%;
    //height: calc(100vh - 15.5vh);
    height: calc(100vh - (env(safe-area-inset-top) - env(safe-area-inset-bottom)) - 15.5vh );

    top: 0;
    left: 0;
    background: $black;
    .mob-cta{
        display: flex;
        justify-content: space-between;
        margin: 1.5rem;
        a{
            color: $white;
            text-transform: uppercase;
            text-decoration: none;
            font-weight: 600;
            &:visited{
                color: $white;
            }
        }
    }
    .main-mob-text{
        color: $white;
        font-size: 1.6rem;
        margin: 0 1rem;
    }
}
</style>