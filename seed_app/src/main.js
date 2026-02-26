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
        Message.value = "成長の光、明日への歩み"
    } else {
        message.value = "今日は水やりの日、花はゆっくり咲くから美しい"
    }
    
}