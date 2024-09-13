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
                    v-model.number="baseValue"
                    type="number"
                    @input="calculateTarget"
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
                <VBtn
                    flat
                    @click="swapCurrentCurrencies"
                >
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
                    v-model.number="targetValue"
                    type="number"
                    @input="calculateBase"
                />
                <VSelect
                    v-model="targetCurrency"
                    :items="currencies"
                    @update:model-value="calculateTarget"
                />
            </VCol>
        </VRow>
    </VCard>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import {getCurrencyExchangeRate} from '../api';

const baseValue = ref(0);
const targetValue = ref(0);

const baseCurrency = ref<TCurrency>('USD');
const targetCurrency = ref<TCurrency>('RUB');

const currencies = ['RUB', 'USD', 'EUR', 'CNY'];

type TCurrency = 'RUB' | 'USD' | 'EUR' | 'CNY';

type APIResponse = {
    [currency in TCurrency]: {
        code: TCurrency;
        value: number;
    };
};

const exchangeRates = ref<APIResponse>(<APIResponse>{});

const swapCurrentCurrencies = () => {
    [baseCurrency.value, targetCurrency.value] = [
        targetCurrency.value,
        baseCurrency.value,
    ];
};

const setExchangeRates = async () => {
    const response = await getCurrencyExchangeRate(
        baseCurrency.value,
        currencies
    );

    if (response?.status === 200) {
        exchangeRates.value = response.data.data;
    }
};

const calculateTarget = () => {
    targetValue.value =
        baseValue.value * exchangeRates.value[targetCurrency.value].value;
};

const calculateBase = () => {
    baseValue.value =
        targetValue.value / exchangeRates.value[targetCurrency.value].value;
};

watch(
    baseCurrency,
    async () => {
        await setExchangeRates();
        calculateTarget();
    },
    {immediate: true}
);
</script>

<style scoped></style>
