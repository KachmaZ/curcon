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
                    v-model="baseValue"
                    type="number"
                />
                <VSelect
                    v-model="baseCurrency"
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
import {onMounted, ref} from 'vue';
import { getCurrencyExchangeRate } from '../api';

const baseValue = ref(0);
const resultValue = ref(0);

const baseCurrency = ref('RUB');
const resultCurrency = ref('USD');

const currencies = [
    'RUB',
    'USD',
    'EUR',
    'CNY',
];

const exchangeRates = ref();

const setExchangeRates = async () => {
    const response = await getCurrencyExchangeRate(baseCurrency.value, currencies);
    
    if (response?.status === 200) {
        exchangeRates.value = response.data.data
    }
} 

onMounted(async () => {
    await setExchangeRates();    
})
</script>

<style scoped></style>
