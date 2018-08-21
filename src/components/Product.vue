<template>
  <div id="product">
    <input type="text" v-model="findProduct"/>
    <br/><br/>
    <button @click="generateProduct">Generate</button>
    <ul v-for="product in filterName" class="animated bounceIn text-left m-l-0">
      <li>ID: {{product.id}} Name: {{product.name}}</li>
      <br/>
    </ul>
  </div>
</template>

<script>
  import LRU from 'lru-cache'

  let options = {
    max: 500
    , length: function (n, key) {
      return n * 2 + key.length
    }
    , dispose: function (key, n) {
      n.close()
    }
    , maxAge: 1000 * 60 * 60
  }
    , cache = LRU(options)
    , otherCache = LRU(50)

  export default {
    name: "Product",
    data() {
      return {
        products: [],
        findProduct: ''
      }
    },
    methods: {
      generateProduct() {
        let id = ['102', '201', '223', '75', '432', '213', '31', '34', '76', '10'];
        let names = ['B&O TV', 'Toshiba TV', 'Remote B&O', 'B&O 5.1', 'Audio B&O', 'Sony V-10', 'LG K12', 'Samsung L122', 'R B&O', 'BO 5.1'];
        for (let i = 1; i <= 10; i++) {
          let index = Math.ceil(Math.random() * 8 + 1);
          this.products.push({
            id: id[index],
            name: names[index],
          });
        }
      }
    },
    computed: {
      filterName() {
        if (cache.has(this.findProduct)) {
          let gen = cache.get(this.findProduct);
          console.log(1)
          return gen;
        } else {
          let general = this.findProduct.length
          if (general) {
            cache.set(this.findProduct, this.products.filter(product => product.name.includes(this.findProduct)))
          }
          console.log(2)
          return general ? this.products.filter(product => product.name.includes(this.findProduct)) : this.products
        }
      }
    }
  }
</script>

<style>
  ul {
    list-style: none;
  }

</style>
