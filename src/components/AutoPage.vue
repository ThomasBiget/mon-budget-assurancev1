<template>
  <div>
    <h1>Budget annuel assurance Auto</h1>
    <div class="q-pa-md" style="max-width: 400px">

<q-form
  @submit="onSubmit"
  @reset="onReset"
  class="q-gutter-md"
>
<!-- Input dans lequel on renseigne le bonus auto -->
<q-input
    filled
    type="number"
    v-model="bonus"
    label="Bonus/Malus"
    step="0.01"
  />
<!-- Input dans lequel on renseigne le montant de l'assurance -->
  <q-input
    filled
    type="number"
    v-model="prix"
    label="Montant assurance auto (€)"
    step="0.01"
  />
<!-- Select dans lequel on renseigne le type d'assurance (tous risques ou tiers) -->
  <q-select filled v-model="assurance" :options="options" label="Assurance" />
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
    const bonus = ref(null);
    const prix = ref(null);
    const assurance = ref(null);
    const store = useStore();

    return {
      bonus,
      prix,
      assurance,
      options: [
        'Tous risques', 'Tiers',
      ],
      onSubmit() {
        // On récupère la valeur de l'input bonus et on la stocke dans le store
        const carInsuranceBonus = bonus.value;
        store.dispatch('auto/setBonus', carInsuranceBonus);
        // On récupère la valeur de l'input prix et on la stocke dans le store
        const carInsurancePrice = prix.value;
        store.dispatch('auto/setPrice', carInsurancePrice);
        // On récupère la valeur du select et on la stocke dans le store
        const carInsuranceType = assurance.value;
        store.dispatch('auto/setAssurance', carInsuranceType);
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
