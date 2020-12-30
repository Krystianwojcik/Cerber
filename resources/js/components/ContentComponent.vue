<template>
    <mdb-container>
<clients-list-component></clients-list-component>
        button
        <client-add-button-component></client-add-button-component>
    </mdb-container>
</template>

<script>
import {mdbContainer} from 'mdbvue';
export default {
    components: {
        mdbContainer
    }
}
</script>
