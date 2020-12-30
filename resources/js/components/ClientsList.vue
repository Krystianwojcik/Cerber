<template>

    <table class="table table-striped table-hover">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Adres WWW</th>
        </tr>
        </thead>
        <tbody>
            <template  v-for="client in clients">
                <client-list-single-component :client="client"/>
            </template>
        </tbody>
    </table>
</template>

<script>
export default {
name: "ClientsList",
    data: () => ({
        clients:[
            {
                id: 1,
                ssl: 'https',
                www: '',
                url: 'aferweb.pl'
            },
            {
                id: 2,
                ssl: 'http',
                www: 'www.',
                url: 'rosenes.pl'
            },
            {
                id: 3,
                ssl: 'https',
                www: '',
                url: 'aferweb.pl'
            },
            {
                id: 4,
                ssl: 'http',
                www: 'www.',
                url: 'rosenes.pl'
            },
            {
                id: 5,
                ssl: 'https',
                www: '',
                url: 'aferweb.pl'
            },
            {
                id: 6,
                ssl: 'http',
                www: 'www.',
                url: 'rosenes.pl'
            }
        ]
    })
}

</script>

<style scoped>

</style>
