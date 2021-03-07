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
            axios.get('/api/getclientwithquarter').then(response => {
                this.clients = response.data;
            })
        }
    }
}

</script>

<style scoped>

</style>
