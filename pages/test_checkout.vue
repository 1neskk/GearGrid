<template>
    <section class="page bg-gradient-to-r from-indigo-950 to-slate-950">
        <main>
		    <NavbarProducts />
            <div class="container mx-auto px-4 py-8">
                <h1 class="text-3xl font-bold text-white mb-4">Checkout</h1>
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <form @submit.prevent="submitCheckout">
                        <div class="mb-4">
                            <div class="text-black pb-4 flex justify-between">
                                <span>Total:</span>
                                <span class="font-bold">R$ {{ total.toFixed(2) }}</span>
                            </div>
                            <div id="card-element" class="border border-gray-300 rounded p-4">
                            <!-- A Stripe Element will be inserted here. -->
                            </div>
                        </div>
                        <div class="flex justify-end">
                            <UiButton type="submit" color="primary" class="font-bold text-base">Pay</UiButton>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
import { mount } from '@vue/test-utils';
import Checkout from '@/pages/checkout.vue';

describe('Checkout', () => {
  it('submits the checkout form', async () => {
    const wrapper = mount(Checkout);
    const form = wrapper.find('form');

    await form.trigger('submit.prevent');
    expect(wrapper.vm.submitCheckout).toHaveBeenCalled();
  });

  it('displays the total amount', () => {
    const total = 100.0;
    const wrapper = mount(Checkout, {
      data() {
        return {
          total: total,
        };
      },
    });

    expect(wrapper.text()).toContain(`R$ ${total.toFixed(2)}`);
  });
});
</script>

<style lang="scss" scoped>
.page {
    overflow-y: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
</style>