<script setup>
    defineProps({
        title: String,
        value: Number
    })

    function formatValue(value){
        return new Intl.NumberFormat('es-co', {
            style: 'currency',
            currency: 'cop'
        }).format(value)
    }
</script>

<template>
    <div>
        <span class="title">{{ title }}: </span>
        <span class="value">
            {{ formatValue(value) }}
        </span>
    </div>
</template>

<style scoped>
    .title{
        font-weight: bolder;
    }
    .value{
        color: yellowgreen;
    }
</style>