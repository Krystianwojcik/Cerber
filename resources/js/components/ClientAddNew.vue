<template>
    <section class="preview">
        <mdb-input placeholder="Username" basic class="mb-3">
            <span class="input-group-text" slot="prepend">@</span>
        </mdb-input>
        <mdb-input placeholder="Recipient's Username" basic class="mb-3">
            <span class="input-group-text" slot="append">@example.com</span>
        </mdb-input>
        <label for="vanity">Your vanity URL</label>
        <mdb-input id="vanity" basic class="mb-3">
            <span class="input-group-text" slot="prepend">https://example.com/users/</span>
        </mdb-input>
        <mdb-input basic class="mb-3">
            <span class="input-group-text" slot="prepend">$</span>
            <span class="input-group-text" slot="append">.00</span>
        </mdb-input>
        <mdb-input type="textarea" basic>
            <span class="input-group-text" slot="prepend">With textarea</span>
        </mdb-input>
        <!-- Default unchecked -->
        <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" name="radio1" id="defaultUnchecked">
            <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
        </div>
    </section>
</template>
<script>
import { mdbInput } from 'mdbvue';
export default {
    name: "BasicInputGroups",
    componens: {
        mdbInput
    }
}
</script>
<style>
section.preview {
    border: 1px solid #e0e0e0;
    padding: 15px;
}
</style>
