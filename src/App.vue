<script setup lang="ts">
import CurrencyConvertor from './components/CurrencyConvertor.vue';
</script>

<template>
    <VLayout ref="app">
        <VAppBar
            title="CurCon"
            density="compact"
            flat
            color="grey-lighten-3"
        >
            <VSwitch> </VSwitch>
        </VAppBar>

        <VMain>
            <CurrencyConvertor />
        </VMain>

        <VFooter
            app
            color="grey-lighten-2"
        >
            BipBop
        </VFooter>
    </VLayout>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
