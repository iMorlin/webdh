<template>
    <div class="empty-layout">
        <p>Cart</p>
        <CartItem/>
    </div>
</template>

<script>
import CartItem from "./CartItem.vue"
import {mapGetters} from "vuex"
export default {
    comments:{
        CartItem
    },
    computed:{
        ...mapGetters(['CART'])        
    },
    
    
}
</script>