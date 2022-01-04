<template>
    <div class="empty-layout">
        <div class="row">
            <CatalogItem
                v-for="product in PRODUCTS"
                :key="product.article"
                :productData="product"
                @sendArtcle="DataEvent"
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
            'GET_PRODUCTS_FROM_API'
        ]),
        DataEvent(data)
        {
            console.log(data)
        }
    },
    mounted() {        
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>