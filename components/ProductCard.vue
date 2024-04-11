<template>
    <div class="product-card" @mouseover="isHovered = true" @mouseleave="isHovered = false">
        <div class="product-image">
            <img :src="product.imageUrl" alt="Product Image">
        </div>
        <div class="product-details" v-show="isHovered">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <button @click="addToCart">Add to Cart</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isHovered: false,
            product: {
                name: 'Product Name',
                description: 'Product Description',
                imageUrl: 'path/to/product/image.jpg'
            }
        };
    },
    methods: {
        addToCart() {
            console.log('Added to cart');
        }
    }
};
</script>

<style scoped>
.product-card {
    position: relative;
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    transition: box-shadow .3s;
    background-color: #020617;
}

.product-card:hover {
    box-shadow: 0 0 11px white; 
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.product-details {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: black; 
    color: white; 
    padding: 20px; 
    box-sizing: border-box; 
    transition: transform .3s; 
}

.product-details h3 {
    margin: 0;
    font-size: 24px;
}

.product-details p {
    margin: 10px 0;
    font-size: 16px;
}

.product-details button {
    background-color: #008CBA; 
    border: none; 
    color: white; 
    padding: 12px 24px; 
    cursor: pointer; 
    font-size: 16px; 
    border-radius: 5px; 
}

.product-details button:hover {
    background-color: #007B9A; 
}
</style>