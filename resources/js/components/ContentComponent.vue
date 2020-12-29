<template>
    <mdb-container>
        button
        <client-add-button-component></client-add-button-component>
<clients-list-component></clients-list-component>
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
