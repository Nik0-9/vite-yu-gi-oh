import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0',
    cards: [],
    numCards: 0,
    loading: false
});