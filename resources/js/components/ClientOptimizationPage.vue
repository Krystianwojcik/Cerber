<template>
    <table class="table table-striped table-hover">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Pełen adres</th>
            <th scope="col">Krótki adres</th>
            <th scope="col">Atrybut</th>
            <th scope="col">Wartość</th>
        </tr>
        </thead>
        <tbody>
        <tr  v-for="(optymization, index) in optymizations">
        <template v-bind:class="[hidden ?   'd-none': '']">
            <th scope="row">{{optymization.id}}</th>
            <td>{{hasSSL}}://{{hasWWW}}{{client.domain}}</td>
            <td>{{optymization.short_url}}</td>
            <td>{{optymization.optymization_attribute.attribute}}</td>
            <td>{{optymization.value}}</td>
            <td class="text-right py-1 align-middle">
                <mdb-btn color="warning" tag="a" class="icon mx-2" v-bind:href="'/optymalizacje/edytuj/'+ optymization.id">
                    <mdb-icon icon="edit"/>
                </mdb-btn>
                <mdb-btn color="danger" class="icon mx-2" v-on:click="deleteClient(optymization.id, index)">
                    <mdb-icon icon="trash-alt"/>
                </mdb-btn>
            </td>

        </template>
        </tr>

        </tbody>
    </table>

</template>

<script>
import {mdbBtn, mdbIcon} from "mdbvue";

export default {
    name: "ClientsList",
    components: {
        mdbIcon,
        mdbBtn
    },
    data() {
        return {
            optymizations: []
        }
    },
    props:{
        quarter: '',
        client:''
    },
    created() {
        this.getClients();
    },
    methods: {
        getClients() {
            console.log('Optymalizacje pobranie');
            console.log('/api/getoptymizations?quarter='+this.quarter);
            axios.get('/api/getoptymizations?quarter='+this.quarter).
            then(response => {
                this.optymizations = response.data;
                console.log('Optymalizacje pobrane');
            })
        },

        deleteClient: function (id, index) {
            axios.delete('/api/optymization/'+id, {
            }).then(response => {
                this.optymizations[index].hidden = true;
                alert(response.data.message);
                window.location.reload(true);
            }).catch(error => {
                alert("Wystąpił błąd podczas usuwanai klienta, spróbój później");
            });
        }
    },
    computed: {
        hasWWW: function () {
            if (this.client.www) {
                return 'www.';
            } else {
                return '';
            }
        },
        hasSSL: function () {
            if (this.client.ssl) {
                return 'https';
            } else {
                return 'http';
            }
        }
    }
}
</script>

<style scoped>
.icon {
    height: 30px;
    width: 30px;
    padding: 0;
    line-height: 30px;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

</style>
