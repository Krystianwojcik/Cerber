<template>
    <mdb-row>
        <mdb-col col="3"><mdb-select v-model="groupOptions" label="Wybierz kwartał" /></mdb-col>{{out}}
    </mdb-row>
</template>

<script>
import { mdbSelect, mdbRow, mdbCol } from "mdbvue";
export default {
    name: "ClientOptimizationChangeQuarter.vue",
    components: {
        mdbSelect,
        mdbRow,
        mdbCol
    },
    data() {
        return {
            groupOptions: [
                {
                    text: "1 rok",
                    value: null,
                    disabled: true,
                    optgroup: true
                },
                { text: "Kwartał 1", value: "kwartal-1" },
                { text: "Kwartał 2", value: "kwartal-2" },
                { text: "Kwartał 3", value: "kwartal-3" },
                { text: "Kwartał 4", value: "kwartal-4" },
                {
                    text: "2 rok",
                    value: null,
                    disabled: true,
                    optgroup: true
                },
                { text: "Kwartał 5", value: "kwartal-5" },
                { text: "Kwartał 6", value: "kwartal-6" },
                { text: "Kwartał 7", value: "kwartal-7" },
                { text: "Kwartał 8", value: "kwartal-8" }
            ]
        };
    },
    computed: {
        out: function () {
            var step;
            for (step = 0; step < this.groupOptions.length-1; step++) {
                if(this.groupOptions[step].selected == true)
                    window.location.href = 'http://localhost/optymalizacje/klient/'+this.groupOptions[step].value+'/';
            }

        }
    }
};
</script>
<style scoped>

</style>
