<template>
  <q-item clickable>
    <router-link :to="link" class="my-link">
      <q-item-section
        v-if="icon"
        avatar
      >
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption>{{ caption }}</q-item-label>
      </q-item-section>
    </router-link>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },
  },
});
</script>
<style>
.my-link {
  text-decoration: none;
  color: rgb(43, 42, 42);
  padding: 0.5rem;
  width: 10rem;
  border-radius: 25px;
}
.router-link-active {
  background-color: #1976D2;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  padding: 0.5rem;
  width: 10rem;
  }
</style>
```
