<template>
    <mdb-btn tag="a" color="primary" href="/optymalizacje/klient/nowy/">Dodaj dane <mdb-icon icon="plus" class="ml-2"/></mdb-btn>
</template>
<script>
import {
    mdbBtn,
    mdbIcon
} from 'mdbvue';
export default {
    name: "OptimizationAddRecordButton",
    components: {
        mdbBtn,
        mdbIcon
    }
}
</script>

<style scoped>

</style>
