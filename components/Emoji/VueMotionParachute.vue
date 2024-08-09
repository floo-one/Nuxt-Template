<template>
  <div class="relative size-[500px]">
    <div
      v-if="isVisible"
      ref="parachuteRef"
      class="duration-50 absolute cursor-pointer transition-all ease-linear"
      :style="{
        top: `${parachuteY}px`,
        left: `${parachuteX}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
        opacity,
      }"
      @click="handleClick"
    >
      🪂
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  initialX: number
  initialY: number
}>()

const parachuteRef = ref(null)
const rotation = ref(0)
const parachuteY = ref(props.initialY)
const parachuteX = ref(props.initialX)
const scale = ref(1)
const opacity = ref(1)
const isVisible = ref(true)

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const handleClick = async () => {
  if (!isVisible.value) { return }

  let velocity = 0
  const deltaTime = 0.016 // 60 fps

  // Shorter free-fall phase
  for (let i = 0; i < 15; i++) { // Reduced iterations for shorter free-fall
    velocity += 30 * deltaTime // Increased acceleration for faster fall
    parachuteY.value += velocity * 3 // Increased multiplier for faster movement
    await sleep(16)
  }

  // Parachute opening - sudden deceleration
  scale.value = 1.5
  for (let i = 0; i < 5; i++) { // Reduced iterations for quicker opening
    velocity *= 0.7
    parachuteY.value += velocity
    await sleep(16)
  }

  // Faster gliding with more left-right movement
  const windStrength = Math.random() * 6 + 2 // Increased wind strength
  let swayAngle = 0
  let horizontalVelocity = (Math.random() - 0.5) * 10 // Initial horizontal velocity

  while (isVisible.value) {
    // Update vertical position
    parachuteY.value += 5 // Faster constant vertical speed

    // Update horizontal position with momentum and wind effect
    horizontalVelocity += (Math.random() - 0.5) * 0.5 // Random acceleration
    horizontalVelocity *= 0.99 // Slight dampening
    parachuteX.value += horizontalVelocity + Math.sin(swayAngle) * windStrength

    // Rotate parachute based on horizontal movement
    rotation.value = horizontalVelocity * 3

    swayAngle += 0.1 // Faster sway

    // Check if parachute is off-screen
    if (parachuteY.value > 600 || parachuteX.value < -100 || parachuteX.value > 600) {
      isVisible.value = false
    }

    await sleep(16)
  }

  // Hide for longer (5 seconds)
  await sleep(5000)

  // Reset with fade
  parachuteY.value = props.initialY
  parachuteX.value = props.initialX
  rotation.value = 0
  scale.value = 1
  opacity.value = 0
  isVisible.value = true

  await sleep(300) // Wait a bit before fading in
  opacity.value = 1
}
</script>
