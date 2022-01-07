<template>
  <div class="app-main-layout">
    <nav class="navbar #eceff1 blue-grey lighten-3">
        <div class="nav-wrapper">
            <div class="navbar-left">
                <router-link :to="{name:'Catalog'}">
                    <i class="material-icons white-text" @click="redirectToLink('./')">Dream House</i>
                </router-link>
            </div>
            <div class="navbar-right">
                <router-link :to="{name:'Cart'}">
                    <button class="btn cart #eceff1 blue-grey lighten-3 z-depth-0" id="Button">                                
                    </button>
                    <span class="badge badge-warning" id='lblCartCount'>{{CART.length}} </span>     
                </router-link>
            </div>
        </div>
    </nav>
    <component :is="View"> 
        <keep-alive>
            <router-view/>
        </keep-alive>
    </component>
  </div>
</template>

<script>
import Home from "./Home.vue"
import Catalog from "./Catalog.vue"
import Cart from "./Cart.vue"
import {mapGetters} from 'vuex'
export default {
    computed:
    {
        ...mapGetters(['CART']),
        View()
        {
            console.log(this.$route.meta)
            return (this.$route.meta.View) 
        }
    },
    components:{
        Home, Catalog, Cart
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
    width: 40px;
}
.empty-layout{
    background: #eceff1 ;
}
.row
{ 
    background: #eceff1 ;
}
#lblCartCount {
    color: #fff;
    vertical-align: bottom;
    margin-left: -17px; 
    margin-top: 7px; 
}

.header{
    color: #b0bec5;
}
</style>