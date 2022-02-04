<template>
<!-- <div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="product.product_images && product.product_images.length > 0 && product.product_images[0] ? product.product_images[0] : defaultImage" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title"> {{ product.product_name || 'Product Title' }}</h5>
    <p class="card-text">{{ product.product_description || 'Product Description' }}</p>
    <a href="#" class="btn btn-primary">${{ product.product_original_price || '0.00' }}</a>
  </div>
</div> -->
  <div>
        <div class="main-product">
          	<div class="product-card">
              <div class="product-tumb">
                <img :src="product.product_images && product.product_images.length > 0 && product.product_images[0] ? product.product_images[0] : defaultImage" alt="">
              </div>
              <div class="product-details">
                <h4><a href="#">{{ product.product_name || 'Product Title' }}</a></h4>
                <p>{{ product.product_description || 'Product Description' }}</p>
                <div class="product-price"><small>${{ product.product_original_price || '0.00' }}</small>${{ product.product_with_discount_price || '0.00' }}</div>
                <div class="product-bottom-details">
                  <div class="product-links">
                    <a @click="addProduct()" v-b-modal.modal-center><i class="far fa-shopping-bag"></i> Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
  </div>

</template>
<script>
export default {
  name: 'ProductCard',
  props:{
    product:Object
  },
  data() {
    return {
      defaultImage : "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17eb99774f6%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17eb99774f6%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
    }
  },
  methods :{
    addProduct() {
      console.log('this.product.id', this.product.id);
      this.$emit("addTocard", this.product.id)
    }
  }

}
</script>