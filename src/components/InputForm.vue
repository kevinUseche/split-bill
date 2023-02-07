<script setup>
    import { ref } from 'vue';
    import { store, calculate } from '../store/store'

    const total = ref(0)
    const tip = ref(0)
    const people = ref(0)

    function handleSubmit(){
        store.params.total = total
        store.params.tip = tip
        store.params.people = people
        calculate()
    }
</script>

<template>
    <form action="" @submit.prevent="handleSubmit">
        <div class="form-container">
            <div>
                <label for="total">Total</label>
                <input 
                    type="number" 
                    v-model="total"
                    required
                >
            </div>
            <div>
                <label for="tip">Tip %</label>
                <input 
                    type="number" 
                    v-model="tip"
                    required
                >
            </div>
            <div>
                <label for="people">People</label>
                <input 
                    type="number" 
                    v-model="people"
                    required
                >
            </div>
            <div>
                <input type="submit" value="calculate">
            </div>
        </div>
    </form>
</template>

<style scoped>

</style> 