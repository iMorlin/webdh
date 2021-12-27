<template>
  <div class="app-main-layout">
    <nav class="navbar #eceff1 blue-grey lighten-3">
        <div class="nav-wrapper">
            <div class="navbar-left">
                <i class="material-icons white-text" @click="redirectToLink('./')">Dream House</i>
            </div>
            <div class="navbar-right">
                <button class="btn cart #eceff1 blue-grey lighten-3 z-depth-0" @click="redirectToLink('./Cart')" >
                </button>
            </div>
        </div>
    </nav>
    <component :is="View"> 
      <router-view/>
    </component>
  </div>
</template>

<script>
import Home from "./Home.vue"
import Catalog from "./Catalog.vue"
import Cart from "./Cart.vue"
export default {
    computed:
    {
        View()
        {
            console.log(this.$route.meta)
            return (this.$route.meta.View) 
        }
    },
    components:{
        Home, Catalog, Cart
    },
    methods:
    {
        redirectToLink(link) {
            window.location = link;
        }
    }
}
</script>

<style>
.navbar-left{
    font-family:"Arsenica";
}

i.material-icons.white-text{
    font-size: 40px;
}
button.btn{
    background-image: url("../assets/images/Cart.jpg");
    background-size: contain;
    background-repeat: no-repeat;
}
.empty-layout{
    background: #eceff1 ;
}
</style>