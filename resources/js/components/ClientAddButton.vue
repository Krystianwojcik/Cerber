<template>
    <mdb-btn tag="a" color="primary" href="/klienci/nowy">Dodaj klienta <mdb-icon icon="plus" class="ml-2"/></mdb-btn>
</template>
<script>
import {
    mdbBtn,
    mdbIcon
} from 'mdbvue';
export default {
    name: "ClientAddButton",
    components: {
        mdbBtn,
        mdbIcon
    }
}
</script>
