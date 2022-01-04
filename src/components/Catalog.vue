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
            {
                image: "image 3.jpg",
                name: "Kit 3",
                price: 2100,
                description: "hdsgfhsgsdhgf",
                article: "T3"
            },
            {
                image: "image 4.jpg",
                name: "Kit 4",
                price: 2100,
                description: "hdsgfhsgsdhgf",
                article: "T4"
            },
            {
                image: "image 5.jpg",
                name: "Kit 5",
                price: 2100,
                description: "hdsgfhsgsdhgf",
                article: "T5"
            },
            {
                image: "image 6.jpg",
                name: "Kit 6",
                price: 2100,
                description: "hdsgfhsgsdhgf",
                article: "T6"
            },
            {
                image: "image 7.jpg",
                name: "Kit 7",
                price: 2100,
                description: "hdsgfhsgsdhgf",
                article: "T7"
            },
            {
                image: "image 8.jpg",
                name: "Kit 8",
                price: 2100,
                description: "hdsgfhsgsdhgf",
                article: "T8"
            },
            ]
        }
    }
}
</script>