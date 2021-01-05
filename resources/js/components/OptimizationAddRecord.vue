<template>
    <mdb-row class="justify-content-md-center">
        <mdb-col col="6">
            <div class="card">
                <h1 class="card-header purple-gradient white-text text-center py-4 h4">
                    <strong>Dodaj dane</strong>
                </h1>

                <div class="card-body px-lg-5 py-0">

                    <form class="md-form">
                        <div class="col-sm-12">
                            <mdb-input type="text" label="Adres strony WWW" icon="globe" small="Podaj adres na który który ma być sprawdzany"
                                       outline/>
                        </div>
                        <div class="col-sm-12">
                            <mdb-select v-model="basicOptions" placeholder="Wybierz atrybut" label="" />
                        </div>
                        <div class="col-sm-12">
                            <mdb-input type="text" label="Podaj oczekiwaną zawartość" icon="check-circle" small="To wpisz ciąg znaków jaki ma być szukany"
                                       outline/>
                        </div>
                        <mdb-row class="justify-content-md-center mt-4">
                            <mdb-btn color="success" class="btn" type="submit">Dodaj dane</mdb-btn>
                        </mdb-row>
                    </form>
                </div>
            </div>
        </mdb-col>
    </mdb-row>
</template>
<script>
import {mdbInput, mdbBtn, mdbRow, mdbCol, mdbSelect}
    from "mdbvue";

export default {
    name: "OptimizationAddRecord",
    components: {
        mdbInput,
        mdbBtn,
        mdbRow,
        mdbCol,
        mdbSelect
    },
    data() {
        return {
            basicOptions: [
                { text: "Title", value: "title" },
                { text: "Meta description", value: "meta-description" },
                { text: "Nagłówek H1", value: "naglowek-h1" },
                { text: "Przekierowanie 301", value: "redirect-301" }
            ]
        };
    }
};
</script>
<style>

</style>
