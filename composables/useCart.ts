import { type SimpleProduct, type Product } from './useFirestoreDB';
import { ref, onMounted, computed } from 'vue';

export const useCart = () => {
  const cart: Ref<Product[]> = ref([]);

  // store cart's data in localStorage
  const storeCart = (): void => {
    const simpleCart: SimpleProduct[] = cart.value.map(({ id, name, price, img}) => ({ id, name, price, img}));
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
    return {
      ...simpleItem,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };
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
