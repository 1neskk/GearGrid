import { type SimpleProduct, type Product } from './useFirestoreDB';
import { ref, onMounted, computed } from 'vue';

export const useCart = () => {
  const cart: Ref<Product[]> = ref([]);

  // store cart's data in localStorage
  const storeCart = (): void => {
    const simpleCart: SimpleProduct[] = cart.value.map(({ id, name, price }) => ({ id, name, price }));
    console.log("Storing cart: ", simpleCart); // log before storing
    localStorage.setItem('cart', JSON.stringify(simpleCart));
  };

  // get cart's data from localStorage
  const getCart = (): void => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      const simpleCart: SimpleProduct[] = JSON.parse(cartData);
      console.log("Retrieving cart: ", simpleCart); // log after retrieving
      cart.value = simpleCart.map(rebuildProduct);
    }
  };
 
  // TODO: fix Item's image not showing in cart
  const rebuildProduct = (simpleItem: SimpleProduct): Product => {
    const { id, name, price } = simpleItem;
    return {
      ...simpleItem,
      description: (simpleItem as Product).description,
      img: (simpleItem as Product).img,
    }
  };

  const addToCart = (product: Product): void => {
    cart.value.push(product);
    useSonner.success('Success', {
      description: 'Product added to cart',
      duration: 1500,
    });
    storeCart();
  };

  const removeFromCart = (product: Product): void => {
    cart.value = cart.value.filter((item) => item.id !== product.id);
    storeCart();
  };

  const clearCart = (): void => {
    cart.value = [];
    storeCart();
  };

  const total = computed(() => {
    return cart.value.reduce((acc, product) => acc + product.price, 0);
  });

  onMounted(getCart);

  return { cart, addToCart, removeFromCart, clearCart, total };
};
