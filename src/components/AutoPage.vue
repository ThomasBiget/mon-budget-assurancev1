<template>
  <div>
    <h1>Budget annuel assurance Auto</h1>
    <div class="q-pa-md" style="max-width: 400px">

<q-form
  @submit="onSubmit"
  @reset="onReset"
  class="q-gutter-md"
>

  <q-input
    filled
    type="number"
    v-model="prix"
    label="Montant assurance auto (€)"
  />
  <div>
    <q-btn label="Sauvegarder" type="submit" color="primary"/>
    <q-btn label="Réinitialiser" type="reset" color="primary" flat class="q-ml-sm" />
  </div>
</q-form>

</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'AutoPage',

  setup() {
    const prix = ref(null);
    const store = useStore();

    return {
      prix,
      onSubmit() {
        const carInsurancePrice = prix.value;
        store.dispatch('auto/setPrice', carInsurancePrice);
      },

      onReset() {
        prix.value = null;
      },
    };
  },
};
</script>

<style>
h1 {
 font-size: 2rem;
 margin: 1rem;
}
</style>
