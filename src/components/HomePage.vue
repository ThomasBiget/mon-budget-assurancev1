<template>
              <div class="home-ban">
                <h1 class="home-title">Bienvenue sur votre gestionnaire de budget assurance</h1>
                <p class="home-text">Renseignez le montant de vos contrats d'assurances
                  et ayez une vision claire et globale de vos dépenses d'assurances</p>
                <q-btn-group class="buttons-group">
                  <router-link class="home-link" to="/auto">
                    <q-btn push label="Auto" icon="drive_eta" />
                  </router-link>
                  <router-link class="home-link" to="/habitation">
                    <q-btn push label="Habitation" icon="gite" />
                  </router-link>
                  <router-link class="home-link" to="/sante">
                    <q-btn push label="Santé" icon="health_and_safety" />
                  </router-link>
                  <router-link class="home-link" to="/prevoyance">
                    <q-btn push label="Prévoyance" icon="personal_injury" />
                  </router-link>
                </q-btn-group>
                <div class="home-description">
                  <p>
                  Bienvenue sur mon-budget-assurance, votre gestionnaire d'assurances
                  en ligne. À travers notre plateforme innovante et sécurisée, nous avons
                  pour mission de vous aider à maîtriser votre budget d'assurances de manière
                  transparente et efficace.
                  </p>

                  <p>
                  Nous savons qu'il peut être difficile de suivre tous vos contrats
                  d'assurance, et de comprendre ce que vous payez réellement chaque mois.
                  C'est pour cette raison que mon-budget-assurance a été créé : pour vous
                  donner une vision claire et globale de vos dépenses en assurances, toutes
                  réunies en un seul et même endroit.
                  </p>

                  <p>
                  En quelques clics, vous pouvez entrer vos informations de contrat, consulter
                  vos dépenses en temps réel, et optimiser votre budget grâce à nos outils
                  personnalisés. Notre plateforme vous offre un aperçu détaillé de chacun de
                  vos contrats, vous permettant ainsi de comprendre précisément où va votre
                  argent.
                  </p>

                  <p>
                  Rejoignez mon-budget-assurance aujourd'hui et prenez le contrôle de votre
                  budget assurance. Parce que comprendre ses dépenses, c'est la première étape
                  vers une meilleure gestion financière.
                  </p>
                </div>
              </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style>
h1 {
 font-size: 2rem;
 margin: 1rem;
}
</style>
<style>
.home-ban {
  display: flex;
  flex-direction: column;
  background: url(../../public/img/budget.jpg) no-repeat center fixed;
  background-size: cover;
  color: white;
  text-shadow: black 1px 0 3px;
}

.home-title{
  margin: 3rem 1rem;
  font-weight: bold;
}

.home-text {
  margin-left: 1rem;
  font-size: 1.2rem;
}

.home-link {
  text-decoration: none;
  color: white;
}

.buttons-group {
  display: flex;
  gap: 1rem;
  box-shadow: none;
  margin: 2rem;
}

.home-description {
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 2rem;
  line-height: 1.5rem;
  font-size: 1.1rem;
  text-align: justify;
  background-color: rgba(246, 246, 247, 0.5);
  border-radius: 15px;
  padding: 1rem;
}

@media screen and (max-width: 500px){
  .buttons-group {
    flex-direction: column;
}
}
</style>
