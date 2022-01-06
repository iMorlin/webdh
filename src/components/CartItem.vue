<template>        
<!-- переделать -->
        <div class="row"> 
            <div class="col s3">
                <img :src=" require('../assets/images/' + cartItemData.image)" alt="img">
                <p class="card-title">{{cartItemData.name}}</p>
            </div>
            <div class="col s3">
                <p>
                    {{cartItemData.price}}
                    <br><br>
                    {{cartItemData.description}}
                </p>
            </div>
            <div class="col s3">
                <button 
                    @click="Delete">Add to cart
                </button>
            </div>            
            <div class="col s3">
                <p>
                    {{cartItemData.count}}
                </p>
            </div>
        </div>
</template>

<script>
export default {    
    props:{
        cartItemData:{
            type: Object,
            default(){
                return;
            }
        }
    },
    methods:{
        Delete(){
            this.$emit('Delete')
        }
    },
    mounted(){
        this.$set(this.cartItemData, "count", 1)
    }
}
</script>