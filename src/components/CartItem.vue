<template>        
<!-- переделать -->
        <tr> 
            <td>
                <img class="image" :src=" require('../assets/images/' + cartItemData.image)" alt="img">
            </td>
            <td>
                <p>{{cartItemData.name}}</p>
            </td>
            <td>
                <p>
                    {{cartItemData.price}}
                </p>
            </td>      
            <td>
                <p>
                    {{cartItemData.count}}
                </p>
            </td>
            <td>
                <button 
                    @click="Delete">Delete
                </button>
            </td>      
        </tr>
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
    }
}
</script>

<style>
.image{
    width: 200px;
}
</style>