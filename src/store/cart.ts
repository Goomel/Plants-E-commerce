import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', ()=>{
    const isCartActive = ref(true);
    const productsInCart = ref<Record<string, any>[]>([])
    const amountOfCartItems = computed(()=>productsInCart.value.length)

    const removeProduct = ()=>{
        console.log('remove')
    }
    const closeCart = () =>{
        isCartActive.value = false;
    }
    const openCart = () => {
        isCartActive.value = true;
    }
    const getTotal = () => {
        if(productsInCart.value.length === 0) return 0;
        else{
            return productsInCart.value.reduce((total, currProduct) => (total + currProduct.product.price * currProduct.quantity), 0)
        }
    }
    return { isCartActive, productsInCart, removeProduct, closeCart, openCart, amountOfCartItems, getTotal }
})