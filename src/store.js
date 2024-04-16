import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    cardInfo: 'cardinfo.php',
    archetype: 'archetypes.php',
    qString:{
        params:{
            num: 20,
            offset: 0,
            //archetype: ''
        }
    },
    cards: [],
    archetypeList: [],
    numCardsPage: 0,
    totNumCards: 0,
    loading: false,
    statusFilter: ''
});