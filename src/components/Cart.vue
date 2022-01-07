<template>
    <div class="empty-layout">    
        <h1 class="header">Items in the cart: {{CART.length}}</h1>           
        <div class="container">
            <table class="striped">
                <tbody>
                    <CartItem
                        v-for="(item, index) in CART"
                        :key="item.article"
                        :cartItemData="item"
                        @Delete="Delete(index)"
                    />      
                </tbody>  
            </table>
        </div>
    </div>
</template>

<script>
import CartItem from "./CartItem.vue"
import {mapGetters} from "vuex"
import {mapActions} from "vuex"
export default {
    components:{
        CartItem
    },
    computed:{
        ...mapGetters(['CART'])        
    },
    methods:{
        ...mapActions(['DELETE_FROM_CART']),
        Delete(index){
            this.DELETE_FROM_CART(index);
        }
    }    
}
</script>
