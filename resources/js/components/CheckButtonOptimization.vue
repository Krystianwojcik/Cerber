<template>
    <mdb-btn type="button" color="primary" @click="addOptymizationToOrder">Sprawdź optymalizację <mdb-icon icon="check-circle" class="ml-2"/></mdb-btn>
</template>
<script>
import {
    mdbBtn,
    mdbIcon
} from 'mdbvue';
export default {
    name: "OptimizationCheckButton",
    components: {
        mdbBtn,
        mdbIcon
    },
    props:{
        quarter: ''
    },
    methods: {
        addOptymizationToOrder: function () {
            axios.post('/api/add-optymization-to-order', {
                "quarter": this.quarter
            }).then(function (response) {
                alert(response.data.message);
            }).catch(function (error) {
                alert(error.data.message);
            });
        }

    }
}
</script>
