<template>
    <mdb-row class="justify-content-md-center">
        <mdb-col col="6">
            <div class="card">

                <h1 class="card-header purple-gradient white-text text-center py-4 h4">
                    <strong>Dodaj klienta</strong>
                </h1>

                <div class="card-body px-lg-5 py-0">

                    <form class="md-form">
                        <div class="col-sm-12">
                            <mdb-input type="text" label="Domena klienta" icon="globe" small="Podaj samą domenę klienta"
                                       outline/>
                        </div>
                        <mdb-row class="mb-3">
                            <mdb-col class="form-check" col="6">
                               <div>
                                   <mdb-input type="radio" id="domain-ssl" name="domain-ssl" radioValue="domain-ssl"
                                              v-model="domainSSL" label="SSL"/>
                                   <mdb-input type="radio" id="domain-no-ssl" name="domain-ssl" radioValue="domain-no-ssl"
                                              v-model="domainSSL" label="Brak SSL"/>
                               </div>
                            </mdb-col>
                            <mdb-col class="form-check" col="6">
                                <div>
                                    <mdb-input type="radio" id="domain-www" name="domain-www" radioValue="domain-www"
                                               v-model="domainWWW" label="WWW"/>
                                    <mdb-input type="radio" id="domain-no-www" name="domain-www" radioValue="domain-no-www"
                                               v-model="domainWWW" label="Brak WWW"/>
                                </div>
                            </mdb-col>
                        </mdb-row>
                        <mdb-row class="justify-content-md-center mt-4">
                            <mdb-btn color="success" class="btn" type="submit">Dodaj klienta</mdb-btn>
                        </mdb-row>
                    </form>
                </div>
            </div>
        </mdb-col>
    </mdb-row>
</template>
<script>
import {mdbInput, mdbBtn, mdbRow, mdbCol}
    from "mdbvue";

export default {
    name: "InputsPage",
    components: {
        mdbInput,
        mdbBtn,
        mdbRow,
        mdbCol
    },
    data() {
        return {
            domainSSL: '',
            domainWWW: ''
        };
    }
};
</script>
<style>

</style>
