<template>

    <table class="table table-striped table-hover">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col" colspace="2" class="w-100">Adres WWW</th>
        </tr>
        </thead>
        <tbody>
        <template  v-for="client in clients">
            <client-optimization-component :client="client"/>
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
            axios.get('/api/getclientwithquarter').then(response => {
                this.clients = response.data;
                console.log('Klienci pobrani');
                console.log(this.clients);
            })
        }
    }
}

</script>

<style scoped>

</style>
