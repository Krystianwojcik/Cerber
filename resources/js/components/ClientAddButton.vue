<template>
    <mdb-btn color="default" href="/klienci/nowy">Dodaj klienta <mdb-icon icon="plus" class="mb-2"/></mdb-btn>
</template>

<script>
import { mdbBtn, mdbIcon } from 'mdbvue';
export default {
    name: "ClientAddButton",
    components: {
        mdbBtn,
        mdbIcon
    }
}
</script>

<style scoped>

</style>
