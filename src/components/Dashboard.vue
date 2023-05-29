<template>
  <div class="main">
  <div>
    <!-- Contenu du dashboard -->
    <h1>Vue d'ensemble de vos dépenses d'assurances</h1>
  </div>
  <div class="main__card">
    <!-- Dans chaque cart on appelle le montant renseigné dans les composants enfants -->
    <!-- l'information est importé depuis le store -->
    <!-- Auto card -->
    <q-card
      class="main__card__item"
      style="background: radial-gradient(circle, #EDAC8E 0%, #E71917 100%)"
    >
      <q-card-section>
        <div class="text-h6">Budget Auto</div>
        <div class="text-subtitle2">annuel en €</div>
      </q-card-section>

      <q-card-section class="price">
        {{ autoPrice }} €
      </q-card-section>
    </q-card>
    <!-- Habitation card -->
    <q-card
      class="main__card__item"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">Budget habitation</div>
        <div class="text-subtitle2">annuel en €</div>
      </q-card-section>

      <q-card-section class="price">
        {{ habitationPrice }} €
      </q-card-section>
    </q-card>
    <!-- Santé card -->
    <q-card
      class="main__card__item"
      style="background: radial-gradient(circle, #C8E6C9 0%, #43A047 100%)"
    >
      <q-card-section>
        <div class="text-h6">Budget santé</div>
        <div class="text-subtitle2">annuel en €</div>
      </q-card-section>

      <q-card-section class="price">
        {{ santePrice }} €
      </q-card-section>
    </q-card>
    <!-- Prévoyance card -->
    <q-card
      class="main__card__item"
      style="background: radial-gradient(circle, #9575CD 0%, #512DA8 100%)"
    >
      <q-card-section>
        <div class="text-h6">Budget prévoyance</div>
        <div class="text-subtitle2">annuel en €</div>
      </q-card-section>

      <q-card-section class="price">
        {{ prevoyancePrice }} €
      </q-card-section>
    </q-card>
  </div>
  <q-separator class="separator" color="grey" inset />
  <div class="main__total">
    <div class="text-h6">Budget total assurance</div>
    <div class="text-subtitle2">annuel</div>
    <div class="final-price">
      {{ autoPrice + habitationPrice + santePrice + prevoyancePrice }} €
    </div>
  </div>
</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'HomePage',

  setup() {
    const store = useStore();
    // On récupère les données du store et on les affiche dans le dashboard
    // On utilise computed pour que les données soient mises à jour en temps réel
    // On utilise Number pour que les données soient affichées
    // en nombre et non en string afin de pouvoir les additionner
    const autoPrice = computed(() => Number(store.getters['auto/price']));
    const habitationPrice = computed(() => Number(store.getters['habitation/price']));
    const santePrice = computed(() => Number(store.getters['sante/price']));
    const prevoyancePrice = computed(() => Number(store.getters['prevoyance/price']));

    return {
      autoPrice,
      habitationPrice,
      santePrice,
      prevoyancePrice,
    };
  },
};
</script>
<style>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
}
.main__card {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 20px;
}

.main__card__item {
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  width: 200px;
  height: 250px;
  border-radius: 10px;
  color: white;
  text-align: center;
  padding: 1rem;
}

h1 {
  line-height: 2.8rem;
  margin: 1rem 1rem 2rem 1rem;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
}

.separator {
  margin: 2rem 1rem;
  width: 300px;
}

.final-price {
  font-size: 4rem;
  font-weight: bold;
  margin-top: 1rem;
}
@media screen and (max-width: 700px){
  .main__card {
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 2rem;
}
}
</style>
