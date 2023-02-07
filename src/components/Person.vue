<script setup>
import { ref } from 'vue'
defineProps({
    id: Number,
    numberOfPerson: Number,
    totalXPeronsa: Number,
    paid: Boolean
})
const _paid = ref(false)
</script>

<template>
    <div>
        <div class="person-number"></div>
        <div class="person-to-pay"></div>
        <div class="paid"></div>
    </div>
</template>
<style scoped></style>