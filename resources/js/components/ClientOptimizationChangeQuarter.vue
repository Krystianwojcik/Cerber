<template>
    <mdb-row>
        <mdb-btn-group>
            <template v-for="quarterSingle in clientQuarters" >
                <mdb-btn color="info" size="sm" @click="changeQuarte(quarterSingle.quarter)">Kwartał {{ quarterSingle.quarter }}</mdb-btn>
            </template>
        </mdb-btn-group>
    </mdb-row>
</template>

<script>
import { mdbBtn, mdbBtnGroup, mdbRow, mdbCol } from "mdbvue";
export default {
    name: "ClientOptimizationChangeQuarter.vue",
    components: {
        mdbBtn,
        mdbBtnGroup,
        mdbRow,
        mdbCol
    },
    data() {
        return {
            clientQuarters: []
        }
    },
    props:{
        client: '',
        quarter: ''
    },
    created() {
        this.getQuartes();
    },
    methods: {
        getQuartes() {
            console.log('Kwartały pobranie');
            axios.post('/api/getquarters/', {
                "client": this.client
            }).then(response => {
                this.clientQuarters = response.data
            })
        },
        changeQuarte(id) {
            window.location = window.location.href.substring(0, window.location.href.length - 2)+id+'/';
        }

    }
};
</script>
<style scoped>

</style>
