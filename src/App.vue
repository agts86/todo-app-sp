<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}</div>
      <div class="right">
        <v-ons-toolbar-button>
          <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <div style="text-align: center; padding-top: 10px">Hello World!</div>
    <p style="text-align: center">
      <v-ons-button @click="alert">Click Me!</v-ons-button>
    </p>
  </v-ons-page>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import ons from 'onsenui';

const title = ref('Todo')
function alert(): void {
  ons.notification.alert('This is an Onsen UI alert notification test.')
}
</script>
