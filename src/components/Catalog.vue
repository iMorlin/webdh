<template>
    <div class="empty-layout">     
        <h1 class="header"> Catalog </h1> 
            <div class="row">
                <CatalogItem
                    v-for="product in PRODUCTS"
                    :key="product.article"
                    :productData="product"
                    @addToCart="addToCart"
                />
            </div>
    </div>
</template> 

<script>
import CatalogItem from "./CatalogItem.vue"
import {mapActions, mapGetters} from 'vuex'
export default {
    components:{
        CatalogItem

    },
    computed:{
        ...mapGetters(['PRODUCTS'])        
    },
    methods:{
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data){
            this.ADD_TO_CART(data);
        }
    },
    mounted() {        
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>