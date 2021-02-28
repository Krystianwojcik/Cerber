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
                            <mdb-select v-model="domain" placeholder="Wybierz domenę" label="" />
                        </div>
                        <div class="col-sm-12">
                            <mdb-input type="text" v-model="short_url" label="Adres strony WWW" icon="globe" small="Podaj katalog który ma być sprawdzany"
                                       outline/>
                        </div>
                        <div class="col-sm-12">
                            <mdb-select v-model="attribute" placeholder="Wybierz atrybut" label="" />
                        </div>

                        <div class="col-sm-12">
                            <mdb-input type="text" v-model="value" label="Podaj oczekiwaną zawartość" icon="check-circle" small="To wpisz ciąg znaków jaki ma być szukany"
                                       outline/>
                        </div>
                        <mdb-row class="justify-content-md-center mt-4">
                            <mdb-btn color="success" class="btn" type="button" @click="addOptymization">Dodaj dane</mdb-btn>
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
            attribute: [
                { text: "Title", value: "1" },
                { text: "Meta description", value: "2" },
                { text: "Nagłówek H1", value: "3" },
                { text: "Przekierowanie 301", value: "4" }
            ],
            domain: [
                { text: "afterweb.pl", value: "1" },
                { text: "roseness.pl", value: "2" }
            ],
            short_url: '',
            value: '',
            attribute_value: '',
            domain_value: ''
        };
    },
    watch: {
        attribute: function () {
            this.attribute_value = this.attribute.filter(function(elem) {
                if(elem.selected) {
                    return elem.value;
                }
            });
            if(this.attribute_value.length > 0) {
                this.attribute_value = this.attribute_value[0].value;
            }
        },
        domain: function () {
            this.domain_value = this.domain.filter(function(elem) {
                if(elem.selected) {
                    return elem.value;
                }
            });
            if(this.domain_value.length > 0) {
                this.domain_value = this.domain_value[0].value;
            }
            console.log(this.domain_value);
        }
    },
    methods: {
        addOptymization: function () {
            axios.post('/api/optymization', {
                "domain": this.domain_value,
                "short_url": this.short_url,
                "attribute_id": this.attribute_value,
                "value": this.value
            }).then(function (response) {
                alert(response.data.message);
            }).catch(function (error) {
                alert(error.data.message);
            });
        }
    }
};
</script>
<style>

</style>
