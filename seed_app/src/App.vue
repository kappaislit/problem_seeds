<script setup>
import { ref } from 'vue'

const stage = ref("seed")

function water() {
  if (stage.value === "seed") stage.value = "sprout"
  else if (stage.value === "sprout") stage.value = "stem"
  else if (stage.value === "stem") stage.value = "flower"
}
</script>

<template>
  <div class="container">
    <h1>Problem Seed</h1>

    <p v-if="stage === 'seed'">🌱 タネ</p>
    <p v-else-if="stage === 'sprout'">🌿 芽</p>
    <p v-else-if="stage === 'stem'">🌳 茎</p>
    <p v-else>🌸 花</p>

    <button @click="water">
      水をやる
    </button>
  </div>

  <input type="checkbox" v-model="shouldGrow" />


  <p>{{ currentStage }}</p>
  <input type="checkbox" v-model="shouldGrow" />
  <button @click="waterPlant">水をやる</button>

</template>

<style scoped>
.container {
  padding: 40px;
  font-family: sans-serif;
}
</style>