<template>
  <div>
    <!-- Votre contenu pour la page d'accueil -->
    <h1>Budget annuel assurance Habitation</h1>
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
    label="Montant assurance habitation (€)"
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
  name: 'HabitationPage',

  setup() {
    const prix = ref(null);
    const store = useStore();

    return {
      prix,
      onSubmit() {
        const homeInsurancePrice = prix.value;
        store.dispatch('habitation/setPrice', homeInsurancePrice);
      },

      onReset() {
        prix.value = null;
      },
    };
  },
};
</script>
