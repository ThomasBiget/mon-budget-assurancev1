<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Mon budget Assurance
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <router-link to="/">
        <q-item-label
          header
        >
          Retour à l'accueil
        </q-item-label>
      </router-link>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Dashboard',
    caption: '',
    icon: 'dashboard',
    link: '/dashboard',
  },
  {
    title: 'Auto',
    caption: '',
    icon: 'drive_eta',
    link: '/auto',
  },
  {
    title: 'Habitation',
    caption: '',
    icon: 'gite',
    link: '/habitation',
  },
  {
    title: 'Santé',
    caption: '',
    icon: 'health_and_safety',
    link: '/sante',
  },
  {
    title: 'Prévoyance',
    caption: '',
    icon: 'personal_injury',
    link: '/prevoyance',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
