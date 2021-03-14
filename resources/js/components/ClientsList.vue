<template>

    <table class="table table-striped table-hover">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th colspace="2" scope="col">Adres WWW</th>
        </tr>
        </thead>
        <tbody>
            <template v-for="client in clients">
                <client-list-single-component :client="client"/>
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
            axios.get('/api/get-active-client/').then(response => {
                console.log(response.data);
                this.clients = response.data;
            })
        }
    }
}

</script>

<style scoped>

</style>
