<template>
    <mdb-btn tag="a" color="primary" href="#">Sprawdź optymalizację <mdb-icon icon="check-circle" class="ml-2"/></mdb-btn>
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
    }
}
</script>
