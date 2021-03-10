<template>
    <mdb-btn tag="a" color="primary" href="/uzytkownicy/nowy/">Dodaj użytkownika <mdb-icon icon="plus" class="ml-2"/></mdb-btn>
</template>

<script>
import {
    mdbBtn,
    mdbIcon
} from 'mdbvue';
export default {
    name: "UserAddNewButton",
    components: {
        mdbBtn,
        mdbIcon
    }
}
</script>

<style scoped>

</style>

