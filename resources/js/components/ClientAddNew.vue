
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
                                   <mdb-input type="radio" id="domain-ssl" name="domain-ssl" radioValue="true" v-model="domainSSLon" label="SSL" :checked="domainSSLon == true"/>
                                   <mdb-input type="radio" id="domain-no-ssl" name="domain-ssl" radioValue="false" v-model="domainSSLoff" label="Brak SSL" :checked="domainSSLoff == false"/>
                            </mdb-col>
                            <mdb-col class="form-check" col="4">
                                    <mdb-input type="radio" id="domain-www" name="domain-www" radioValue="true"
                                               v-model="domainWWWon" label="WWW"/>
                                    <mdb-input type="radio" id="domain-no-www" name="domain-www" radioValue="false"
                                               v-model="domainWWWoff" label="Brak WWW"/>
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
            domainSSLon: true,
            domainSSLoff: true,
            domainWWWon: '',
            domainWWWoff: '',
            domainName: '',
            domainActive: true
        };
    },
    watch: {
        domainName: function() {
            const word = 'https';
            console.log(this.domainName.includes(word));
            if(this.domainName.includes(word)) {
                this.domainSSLon = true;
                this.domainSSLoff = false;
            } else {
                this.domainSSLon = false;
                this.domainSSLoff = true;
            }
        }
    }
};
</script>
<style>

</style>
