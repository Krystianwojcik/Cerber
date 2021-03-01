<template>

    <table class="table table-striped table-hover">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th colspace="2" scope="col">Adres WWW</th>
        </tr>
        </thead>
        <tbody>
            <template v-for="(client,index) in clients">
                <client-list-single-component :client="client" v-on:delete-row="deleteClient(index)"/>
            </template>
        </tbody>
    </table>
</template>

<script>
export default {
name: "ClientsList",
    data() {
        return {
            clients: [],
        }
    },
    created() {
        this.getClients();
    },
    methods: {
        getClients() {
            console.log('Pobieranie Klientów');
            axios.get('http://localhost/api/client/').then(response => {
                this.clients = response.data;
                console.log('Klienci pobrani');
            })
        },
       deleteClient: function(index) {
          this.clients.splice(index, 1);
       }
    }
}

</script>

<style scoped>

</style>
