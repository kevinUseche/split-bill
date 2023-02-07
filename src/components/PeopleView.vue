<script setup>
    import { store, getGrandTotal } from '../store/store'
    import LabelView from './LabelView.vue'
</script>

<template>
    <div class="no-items" v-if="store.people.length === 0">No items</div>
    <div class="people-view" v-else>
        <div class="header">
            <div>
                <LabelView 
                    title="Total + tip"
                    :value="getGrandTotal()"
                />
            </div>
            <div>
                <LabelView 
                    title="Remaining"
                    :value="store.params.remaining"
                />
            </div>
        </div>
        <div class="people-container">
            <div v-for="person in store.people" :key="person.id">
                {{ person.totalXPeronsa }}
            </div>
        </div>
    </div>
</template>

<style scoped>
</style> 