import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

const stages = ["seed", "sprout", "stem", "flower"]
const stageIndex = ref(0)
const shouldGrow = ref(false)

const currentStage = computed(() => stages[stageIndex.value])

function waterPlant() {
    if (shouldGrow.value && stageIndex.value < stages.length - 1){
        stageIndex.value++
    }
}