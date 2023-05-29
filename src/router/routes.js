import Dashboard from '../components/Dashboard.vue';
import AutoPage from '../components/AutoPage.vue';
import HabitationPage from '../components/HabitationPage.vue';
import SantePage from '../components/SantePage.vue';
import PrevoyancePage from '../components/PrevoyancePage.vue';
import HomePage from '../components/HomePage.vue';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: HomePage },
      { path: '/dashboard', component: Dashboard },
      { path: '/auto', component: AutoPage },
      { path: '/habitation', component: HabitationPage },
      { path: '/sante', component: SantePage },
      { path: '/prevoyance', component: PrevoyancePage },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
