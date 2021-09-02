const ProductComponent={

    template:`
                        <div class="product-image">
                            <img v-bind:src="url" alt="iphone12">
                        </div>
                        <h1>{{message}}</h1>
                        <p>{{description}}</p><br>
                        <strong>Caracteristique:</strong>
                        <ul>
                            <li v-for="iPhon in iPhone">
                                {{iPhon}}
                            </li>
                        </ul>
                        <strong>Couleur :</strong>
                        <ul class="color">
                        
                            <li v-for="( item,  index ) in variants" :key="item.id" @mouseover="updateVariant(index)" class="cercle"  :style="{ backgroundColor: item.color}" >
                        
                            </li>
                        </ul>
                        <span v-if=" Instock" class="green"><strong>In stock </strong></span>
                        <span v-else class="red">Out of stock </span><br>
                        <button id="btn"  @click="$emit('addPlusOne')"  v-bind:disabled="!Instock"  :class="{disabled : !Instock}">add to Card</button>`,

    data(){
        return{
            message : 'iPhone 12',
            description : 'iPhone 12 sit amet consectetur',
            iPhone:['Ecran 6.1 pouces','Double appereil phptos','Black'],
            variants:[
                { 
                    id:'123',
                    color:'black',
                    photo:"https://cdn.dxomark.com/wp-content/uploads/medias/post-80694/Apple-iPhone-12-Pro-Max-featured-image-packshot-review-1024x691.jpg",
                    stock:5
                },
                {
                    id:'125', 
                    color:'red',
                    photo:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343703000",
                    stock: 0
                }
            ],
            selectedVariant:0
        }
    },
     methods:{
                            updateVariant(index) {
                                this.selectedVariant=index
                        }
                 },

    computed:{

                        url(){
                            return this.variants[this.selectedVariant].photo
                            },

                        Instock(){
                            return this.variants[this.selectedVariant].stock>0 ? true : false
                  
                         }
            }


}

export default ProductComponent