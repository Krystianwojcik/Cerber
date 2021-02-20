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
            axios.get('http://localhost/api/getclientwithquarter').then(response => {
                this.clients = response.data;
                console.log('Klienci pobrani');
                console.log(this.clients);
            })
        }
    }
    /*
    data: () => ({
        clients:[
            {
                id: 1,
                ssl: 'https',
                www: '',
                url: 'aferweb.pl',
                optimizations: [
                    {
                        'kwartal': 'kwartał 1',
                        'data': '01.12.2020'
                    },
                    {
                        'kwartal': 'kwartał 2',
                        'data': '03.01.2021'
                    }
                ]
            },
            {
                id: 2,
                ssl: 'http',
                www: 'www.',
                url: 'rosenes.pl',
                optimizations: [
                    {
                        'kwartal': 'kwartał 2',
                        'data': '03.12.2020'
                    },
                    {
                        'kwartal': 'kwartał 3',
                        'data': '08.01.2021'
                    }
                ]
            }
        ]
    })*/
}

</script>

<style scoped>

</style>
