<template>
     <div id="nav">

         <!-- <div class="navContainer">
            <router-link to="/">
                <img class="icon" alt="home icon" src="../assets/home button.png"/>
            </router-link>
        </div>

        <div class="navContainer">
            <router-link to="/about">
                <img class="icon" alt="home icon" src="../assets/info.png"/>
            </router-link>
        </div>
        
         <div class="navContainer">
            <router-link to="/Feature1">
                <img class="icon" alt="home icon" src="../assets/clock.png"/>
            </router-link>
        </div>

         <div class="navContainer">
            <router-link to="/Feature2">
                <img class="icon" alt="home icon" src="../assets/trophy.png"/>
            </router-link>
        </div> -->

    </div>

</template>
<script>
export default {
    name:'NavButtons',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>


<style scoped>

    #nav {
        position: fixed;
        bottom: 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
        border: solid 2px yellow;
        padding: 0px;
    }
    
    .navContainer {
        background-color: pink;
        padding: 20px;
    }

    .icon {
        width: 50px;
        height: 50px;
        
    
    }

</style>