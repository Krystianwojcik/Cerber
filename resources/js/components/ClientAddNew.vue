<!--

<template>
    <mdb-row class="justify-content-md-center">
        <mdb-col col="8">
            <div class="card">
                <h1 class="card-header purple-gradient white-text text-center py-4 h4">
                    <strong>Dodaj klienta</strong>
                </h1>

                <div class="card-body px-lg-5 py-0">

                    <form class="md-form">
                        <div class="col-sm-12">
                                <mdb-input type="text" id="domain-name" name="domain-name"  label="Domena klienta" icon="globe" small="Podaj domenę klienta" v-model="domainName" outline />
                        </div>
                        <mdb-row class="mb-3">
                            <mdb-col class="form-check" col="4">
                                <mdb-input type="checkbox" id="domain-ssl" name="domain-ssl" v-model="domainSSL" label="SSL?" />
                            </mdb-col>
                            <mdb-col class="form-check" col="4">
                                <mdb-input type="checkbox" id="domain-www" name="domain-www" v-model="domainWWW" label="WWW?" />
                            </mdb-col>
                            <mdb-col class="form-check" col="4">
                                <mdb-input type="checkbox" id="domain-active" name="domain-active" v-model="domainActive" label="Aktywna?" />
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
            domainName: '',
            domainSSL: false,
            domainWWW: 'false',
            domainActive: true
        };
    },
    watch: {
        domainName: function() {
            const word = 'https';
            console.log(this.domainName.includes(word));
            if(this.domainName.includes(word)) {
                this.domainSSL = true;
            } else {
                this.domainSSL = false;
            }
        }
    }
};
</script>
<style>

</style>
-->
