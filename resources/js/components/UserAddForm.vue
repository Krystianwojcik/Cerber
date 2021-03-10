<template>
    <mdb-row class="justify-content-md-center">
        <mdb-col col="8">
            <div class="card">
                <h1 class="card-header purple-gradient white-text text-center py-4 h4">
                    <strong>Dodaj Użytkownika</strong>
                </h1>
                <div class="card-body px-lg-5 py-0">
                    <form class="md-form">
                        <div class="col-sm-12">
                            <mdb-input type="text" id="user-name" name="user-name" label="Imię"
                                       small="Podaj imię" v-model="userName" outline/>
                        </div>
                        <div class="col-sm-12">
                            <mdb-input type="text" id="user-surname" name="user-surname" label="Nazwisko"
                                       small="Podaj nazwisko" v-model="userSurname" outline/>
                        </div>
                        <div class="col-sm-12">
                            <mdb-input type="text" id="user-email" name="user-email" label="Email"
                                       small="Podaj email" v-model="userEmail" outline/>
                        </div>
                        <div class="col-sm-12">
                            <mdb-input type="text" id="user-pass" name="user-pass" label="Hasło"
                                       small="Podaj hasło" v-model="userPass" outline/>
                        </div>

                        <div class="col-sm-12">
                            <mdb-select
                                v-model="role"
                                placeholder="Rola użytkownika"
                                label=""
                            />
                        </div>



                        <mdb-row class="justify-content-md-center mt-4">
                            <mdb-btn color="success" class="btn" type="button" @click="addClient">{{button}}</mdb-btn>
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
    name: "InputsPage",
    components: {
        mdbInput,
        mdbBtn,
        mdbRow,
        mdbCol,
        mdbSelect
    },
    data() {
        return {
            userName: '',
            userSurname: '',
            userEmail: '',
            userPass: '',
            role_id: '',
            button: 'Dodaj użytkownika',
            role: [
                {text: "Administrator", value: "1"},
                {text: "Manager", value: "2"},
                {text: "Pracownik", value: "3"}
            ],
            form: 'add'
        };
    },
    watch: {
        role: function () {
            this.role_id = this.role.filter(function (elem) {
                if (elem.selected) {
                    return elem.value;
                }
            });
            if (this.role_id.length > 0) {
                this.role_id = this.role_id[0].value;
            }
        }
    },
    props: {
        user: '',
    },
    created() {
        if (this.user) {
            if(this.user.name) {
                this.userName = this.user.name;
            }
            if(this.user.surname) {
                this.userSurname = this.user.surname;
            }
            if(this.user.email) {
                this.userEmail = this.user.email;
            }
            this.form = 'edit';


            this.button = 'Edytuj użytkownika';
        }

    },
    methods: {
        addClient: function () {

            if(this.form == 'add') {
                axios.post('/api/staff', {
                    "name": this.userName,
                    "surname": this.userSurname,
                    "email": this.userEmail,
                    "password": this.userPass,
                    "role_id": this.role_id,
                }).then(response => {
                    this.userName = '';
                    this.userSurname = '';
                    this.userEmail = '';
                    this.userPass = '';
                    alert(response.data.message);
                }).catch(response => {
                    alert("Wystąpił błąd podczas dodawania użytkownika. Sprawdź, czy uzupełniłeś wszystkie pola.");
                });
            } else {
                axios.put('/api/staff/'+this.user.id, {
                    "name": this.userName,
                    "surname": this.userSurname,
                    "email": this.userEmail,
                    "password": this.userPass,
                    "role_id": this.role_id,
                }).then(response => {
                    this.userName = '';
                    this.userSurname = '';
                    this.userEmail = '';
                    this.userPass = '';
                    alert(response.data.message);
                    window.location.replace("/uzytkownicy/");
                }).catch(error => {
                    alert("Wystąpił błąd podczas dodawania klienta. Sprawdź, czy uzupełniłeś wszystkie pola.");
                });
            };

        }

    }
};
</script>
<style>

</style>
