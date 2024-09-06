<template>
    <VCard
        class="pa-4"
        min-width="800px"
    >
        <VRow>
            <VCol
                cols="5"
                class="d-flex"
            >
                <VTextField
                    v-model="initialValue"
                    type="number"
                />
                <VSelect
                    v-model="initialCurrency"
                    :items="currencies"
                />
            </VCol>

            <VCol
                cols="2"
                class="d-flex align-center justify-center"
            >
                <VBtn flat>
                    <VIcon
                        icon="mdi-swap-horizontal"
                        size="large"
                    />
                </VBtn>
            </VCol>

            <VCol
                cols="5"
                class="d-flex"
            >
                <VTextField
                    v-model="resultValue"
                    type="number"
                />
                <VSelect
                    v-model="resultCurrency"
                    :items="currencies"
                />
            </VCol>
        </VRow>
    </VCard>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const initialValue = ref(0);
const resultValue = ref(0);

const initialCurrency = ref('RUB');
const resultCurrency = ref('USD');

const currencies = [
    {
        title: `RUB`,
        value: 'RUB',
    },
    {
        title: `USD`,
        value: 'USD',
    },
    {
        title: `EUR`,
        value: 'EUR',
    },
    {
        title: `CNY`,
        value: 'CNY',
    },
];
</script>

<style scoped></style>
