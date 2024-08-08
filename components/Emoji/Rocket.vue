<template>
  <div class="relative">
    <div
      ref="rocketRef"
      class="absolute z-10 cursor-pointer transition-all duration-1000 ease-in-out"
      :style="{
        top: `${rocketY}px`,
        left: `${rocketX}px`,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        opacity,
      }"
      @click="handleClick"
    >
      <Icon name="noto:rocket" size="48" />
    </div>
    <div
      class="fixed text-sm"
      :style="{ top: `${y + 60}px`, left: `${x - 60}px`, width: '160px', textAlign: 'center' }"
    >
      {{ currentStep }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  x: number
  y: number
}>()

const rocketRef = ref(null)
const currentStep = ref('')
const rotation = ref(0)
const rocketY = ref(props.y)
const rocketX = ref(props.x)
const scale = ref(1)
const opacity = ref(1)

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const shake = async (intensity: number, duration: number) => {
  const startTime = Date.now()
  const originalX = rocketX.value
  const originalY = rocketY.value

  while (Date.now() - startTime < duration) {
    rocketX.value = originalX + (Math.random() - 0.5) * intensity
    rocketY.value = originalY + (Math.random() - 0.5) * intensity
    await sleep(50)
  }

  rocketX.value = originalX
  rocketY.value = originalY
}

const handleClick = async () => {
  if (currentStep.value !== '') { return } // Prevent multiple launches

  rotation.value = -45
  currentStep.value = 'Pre-launch checks'
  await sleep(2000)

  currentStep.value = 'Erecting rocket'

  await sleep(1000)

  currentStep.value = 'Fueling'
  await sleep(3000)

  currentStep.value = 'Engine chill'
  await sleep(2000)

  currentStep.value = 'Ignition sequence start'
  scale.value = 1.05
  await shake(2, 1000)
  await sleep(500)

  currentStep.value = 'Main engine start'
  scale.value = 1.1
  await shake(4, 1500)

  currentStep.value = 'Liftoff'
  let velocity = 0
  const acceleration = 0.2
  for (let i = 0; i < 100; i++) {
    velocity += acceleration
    rocketY.value -= velocity
    scale.value = Math.max(0.1, scale.value - 0.005)
    opacity.value = Math.max(0.1, opacity.value - 0.005)
    if (i % 10 === 0) { await shake(2, 200) }
    await sleep(50)
  }

  currentStep.value = 'Max Q'
  for (let i = 0; i < 50; i++) {
    velocity += acceleration * 0.5 // Reduced acceleration due to air resistance
    rocketY.value -= velocity
    scale.value = Math.max(0.05, scale.value - 0.01)
    opacity.value = Math.max(0.05, opacity.value - 0.01)
    if (i % 5 === 0) { await shake(1, 100) }
    await sleep(50)
  }

  currentStep.value = 'MECO'
  for (let i = 0; i < 30; i++) {
    rocketY.value -= velocity // Constant velocity after engine cutoff
    scale.value = Math.max(0.01, scale.value - 0.01)
    opacity.value = Math.max(0.01, opacity.value - 0.01)
    await sleep(50)
  }

  currentStep.value = 'Entering orbit'
  opacity.value = 0
  await sleep(2000)

  // Reset
  currentStep.value = 'Launch Successful!'
  await sleep(2000)

  // Reset
  currentStep.value = ''
  await sleep(10000)
  rotation.value = 0
  rocketY.value = props.y
  rocketX.value = props.x
  scale.value = 1
  opacity.value = 1
}
</script>
