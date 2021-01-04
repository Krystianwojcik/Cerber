<template>
    <tr>
        <td>{{client.id}}</td>
        <td>{{client.ssl}}://{{client.www}}{{client.url}}</td>
        <td class="text-right py-1 align-middle"><mdb-btn color="warning" tag="a" class="icon mx-2" href="/klienci/nowy/"><mdb-icon icon="edit" /></mdb-btn><mdb-btn color="danger" class="icon mx-2" v-on:click="deleteClient(client.url)"><mdb-icon icon="trash-alt" /></mdb-btn></td>
    </tr>
</template>

<script>
import {mdbIcon, mdbBtn}
from "mdbvue";
export default {
    name: "ClientListSingle",
    components: {
        mdbIcon,
        mdbBtn

    },
    props:{
        client: {}
    },
    methods: {
        deleteClient: function(domain) {
            alert("Czy na pewno chcesz usunać domenę "+domain+" ?");
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
}

</style>
