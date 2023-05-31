<template>
  <div>
    <!-- Votre contenu pour la page d'accueil -->
    <h1>Budget annuel assurance Prévoyance</h1>
    <div class="q-pa-md" style="max-width: 400px">

<q-form
  @submit="onSubmit"
  @reset="onReset"
  class="q-gutter-md"
>
 <!-- Input dans lequel on renseigne le montant de l'assurance -->
  <q-input
    filled
    type="number"
    v-model="prix"
    label="Montant assurance prévoyance (€)"
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
  name: 'PrevoyancePage',

  setup() {
    const prix = ref(null);
    const store = useStore();

    return {
      prix,
      onSubmit() {
        // On récupère la valeur de l'input et on la stocke dans le store
        const prevoyanceInsurancePrice = prix.value;
        store.dispatch('prevoyance/setPrice', prevoyanceInsurancePrice);
      },

      onReset() {
        prix.value = null;
      },
    };
  },
};
</script>
