
<template>
<div class="products">
  
    <div class="container-fluid">
      <div class="top-cart">
      <a v-b-modal.modal-center-card><i class="far fa-shopping-bag"></i></a>
    </div>
        <VueSlickCarousel v-bind="carouselOption" >
          <ProductCard  :product="product" v-for="(product,index) in products" :key="index"  @addTocard="addTocard"/>
        </VueSlickCarousel>
    </div>
    <!-- Modal -->
    <b-modal  size="lg" id="modal-center-card" class="quick-view-popup" centered title="BootstrapVue">
      <div class="cart-wrp">
    <div class="container">
            
    <div class="shopping-cart">
      <!-- Title -->
      <div class="title">
        Shopping Bag
      </div>

      <!-- Product #1 -->
      <div class="item" v-for="(product,index) in cardProdcuts" :key="index">
        

        <div class="image">
          <img :src="product.product.product_images && product.product.product_images.length > 0 && product.product.product_images[0] ? product.product.product_images[0] : defaultImage" alt="" />
        </div>

        <div class="description">
          <span>{{ product.product.product_name || 'Product Title' }}</span>
        </div>

        <div class="quantity">
          <button class="plus-btn" type="button" @click="addQuantity('subtract',true,index)" name="button"><i class="far fa-minus"></i></button>
          <input type="text" name="name" v-model="product.quantity">
          <button class="minus-btn" type="button"  @click="addQuantity('add',true,index)" name="button"><i class="far fa-plus"></i></button>
        </div>

        <div class="total-price">${{product.total}}</div>
        <div class="buttons">
          
          <span class="delete-btn" @click="removeItem(index)"><i class="far fa-trash-alt"></i></span>
        </div>
      </div>

       <div class="add-cart-btn">
        <a href="#">Checkout</a>
    </div>
    </div>      
    </div>
    </div>
    </b-modal>
    <b-modal v-if="addToCardModal" size="lg" id="modal-center" class="quick-view-popup" centered title="BootstrapVue">
          <div class="product-detail">
            <div class="row align-items-center">
              <div class="col-md-6">
                  <div class="product-img-wrp">
                    <div class="prod-img">
                      <img :src="product.product_images && product.product_images.length > 0 && product.product_images[0] ? product.product_images[0] : defaultImage" alt="">
                    </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="produt-title">
                    <div class="title">
                      <h2>{{ product.product_name || 'Product Title' }}</h2>
                      <p>{{ product.product_description || 'Product Description' }}</p>
                    </div>
                    <div class="product-price"><small>${{ product.product_original_price || '0.00' }}</small>${{ product.product_with_discount_price || '0.00' }}</div>
                    <div class="compare-wrp">
                      <div class="produtc-count">
                        <a @click="addQuantity('subtract')"><i class="far fa-minus"></i></a>
                        <input type="number" name="product" v-model="quantity">
                        <a @click="addQuantity('add')"><i class="far fa-plus"></i></a>
                      </div>
                      
                    </div>
                    <div class="add-cart-btn">
                      <a @click="addToShopCard">Add to cart</a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
    </b-modal>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import '../../assets/css/style.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import ProductCard from '../Products/ProductCard.vue'
export default {
  name: 'Products',
  data() {
    return {
      carouselOption : {
        "dots": true,
        "arrows": false,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 4,
        "slidesToScroll": 1,
        "initialSlide": 0,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 1,
              "infinite": true,
              "dots": true
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 1,
              "initialSlide": 2
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
      },
      product : {}, 
      quantity: 1,
      addToCardModal : false,
      defaultImage : "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17eb99774f6%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17eb99774f6%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
    }
  },
  computed :{
    products(){
        return this.$store.state.products;
    },
    cardProdcuts(){
        return this.$store.state.cardProdcuts;
    } 
  },
  methods :{
    addTocard(key) {
      // console.log('product',this.$store.state.products[key]);
     var item = this.$store.state.products.filter(item => {return item.id == key});
      this.product = item[0]
      console.log('this.product', this.product)
      this.addToCardModal = true;
      this.quantity = 1;
    },
    addToShopCard() {
      this.$store.state.products;
      var cardProduct = {
        "product": this.product,
        "quantity": this.quantity,
        "original_price": this.product.product_with_discount_price,
        "total": this.quantity * this.product.product_with_discount_price
      };
      this.$store.dispatch('addItemToCard', cardProduct);
    },
    addQuantity(action,updateState = false, index = 0) {
      console.log(index,'sad');
      if(action == 'add') {
        this.quantity = this.quantity + 1;
      } else if(action == 'subtract' && this.quantity > 1) {
        this.quantity = this.quantity - 1;
      }
      if(updateState) {
        var cardProduct = {
        "quantity": this.quantity,
        "total": this.quantity * this.product.product_with_discount_price,
        "index": index
      };
      this.$store.dispatch('increaseItemToCard', cardProduct);
      }
      
    },
    removeItem(index) {
      this.$store.dispatch('removeItemToCard', index);
    }
  },
  components:{
    VueSlickCarousel,
    ProductCard
  }
}
</script>
