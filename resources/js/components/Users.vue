<template>

    <table class="table table-striped table-hover">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Imie</th>
            <th scope="col">Nazwisko</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="user in users">
            <user-component :user="user"/>
        </template>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "UsersList",
    data() {
        return {
            users: [],
        }
    },
    created() {
        this.getUsers();
    },
    methods: {
        getUsers() {
            console.log('Pobieranie Klientów');
            axios.get('/api/staff/').then(response => {
                this.users = response.data;
            })
        }
    }
}

</script>

<style scoped>

</style>
