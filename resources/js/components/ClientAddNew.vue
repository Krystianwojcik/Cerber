
<template>
    <mdb-row class="justify-content-md-center">
        <mdb-col col="8">
            <div class="card">
                <h1 class="card-header purple-gradient white-text text-center py-4 h4">
                    <strong>{{this.edit ? 'Edytuj': 'Dodaj'}} klienta</strong>
                </h1>
                <div class="card-body px-lg-5 py-0">
                    <form class="md-form">
                        <div class="col-sm-12">
                            <mdb-input type="text" id="domain-name" name="domain-name"  label="Domena klienta" icon="globe" small="Podaj domenę klienta" v-model="domainName" outline />
                        </div>
                        <mdb-row class="mb-3">
                            <mdb-col class="form-check" col="4">
                                <mdb-input type="checkbox" id="domain-ssl" name="domain-ssl" v-model="domainSSL" value="this.domainSSL" label="SSL ?" />
                            </mdb-col>
                            <mdb-col class="form-check" col="4">
                                <mdb-input type="checkbox" id="domain-www" name="domain-www" v-model="domainWWW" value="this.domainWWW" label="WWW ?" />
                            </mdb-col>
                            <mdb-col class="form-check" col="4">
                                <mdb-input type="checkbox" id="domain-active" name="domain-active"  v-model="domainActive" value="this.domainActive" label="Aktywna ?" />
                            </mdb-col>
                        </mdb-row>
                        <mdb-row class="justify-content-md-center mt-4">
                            <mdb-btn color="success" class="btn" type="button" @click="addClient">{{this.edit ? 'Edytuj': 'Dodaj'}} klienta</mdb-btn>
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
            domainWWW: '',
            domainName: '',
            domainShortName: '',
            domainActive: '',
        };
    },
    watch: {
        domainName: function() {
            const ssl = 'https';
            const www = 'www.';
            if(this.domainName.includes(ssl)) {
                this.domainSSL = true;
            } else {
                this.domainSSL = false;
            }
            if(this.domainName.includes(www)) {
                this.domainWWW = true;
            } else {
                this.domainWWW = false;
            }
        },
    },
   props:{
       edit: {default: false},
      client: {default: () => ({domain: '', ssl:0, active:1, www:0})}
   },
   created() {
      this.domainName = this.client.domain;
      this.domainSSL = this.client.ssl== 1;
      this.domainActive = this.client.active == 1;
      this.domainWWW = this.client.www == 1;
   },

    methods: {
        addClient: function () {
            this.trimDomain();
            console.log(this.edit);
            if(!this.edit) {
               axios.post('/api/client', {
                  "name": this.domainShortName,
                  "ssl": this.domainSSL,
                  "www": this.domainWWW,
                  "active": this.domainActive
               }).then(function (response) {
                  this.domainName = "";
                  this.domainSSL = "";
                  this.domainWWW = "";
                  this.domainActive = "";
                  alert(response.data.message);
               }).catch(function (error) {
                  alert(error.data.message);
               });
            } else {
               axios.put('/api/client/' + this.client.id, {
                  "name": this.domainShortName,
                  "ssl": this.domainSSL,
                  "www": this.domainWWW,
                  "active": this.domainActive
               }).then(function (response) {
                  this.domainName = "";
                  this.domainSSL = "";
                  this.domainWWW = "";
                  this.domainActive = "";
                  alert(response.data.message);
               }).catch(function (error) {
                  alert(error.data.message);
               });
            };
        },
        trimDomain: function () {
            if(this.domainSSL) {
                this.domainShortName = this.domainName.replace('https://', '');
            } else {
                this.domainShortName = this.domainName.replace('http://', '');
            }
            if(this.domainWWW) {
                this.domainShortName = this.domainName.replace('www.', '');
            }
        }
    }
};
</script>
<style>

</style>
