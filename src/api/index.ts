import axios from 'axios';

export const getCurrencyExchangeRate = async (
    baseCurrency: string,
    targetCurrencies: string[]
) => {
    const response = await axios.get('https://api.currencyapi.com/v3/latest', {
        params: {
            base_currency: baseCurrency,
            currencies: targetCurrencies,
        },
        headers: {
            apikey: import.meta.env.VITE_API_KEY,
        },
    });

    if (response.status === 200) {
        return response;
    }
};
