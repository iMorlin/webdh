<template>
    <div class="empty-layout">
        <div class="row">
            <CatalogItem
                v-for="product in products"
                :key="product.article"
                :productData="product"
            />
        </div>
    </div>
</template> 

<script>
import CatalogItem from "./CatalogItem.vue"
export default {
    components:{
        CatalogItem
    },
    data()
    {
        return{
            products: [
            {
                image: "image 1.jpg",
                name: "Kit 1",
                price: 2100,
                description: "hdsgfhsgsdhgf",
                article: "T1"
            },
            {
                image: "image 2.jpg",
                name: "Kit 2",
                price: 2100,
                description: "hdsgfhsgsdhgf",
                article: "T2"
            },
            ]
        }
    }
}
</script>