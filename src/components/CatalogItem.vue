<template>
    <div class="col s4">
        <div class="card">
            <div class="card-image">
                <img :src=" require('../assets/images/' + productData.image)" alt="img">
                <span class="card-title">{{productData.name}}</span>
            </div>
            <div class="card-content">
                <p>
                    {{productData.price}}
                    <br><br>
                    {{productData.description}}
                </p>
            </div>
            <div class="card-action">
                <a href="#">Add to cart</a>
            </div>      
        </div>
    </div>
</template>

<script>
export default {
    props:{
        productData:{
            type: Object,
            default(){
                return;
            }
        }
    }
}
</script>