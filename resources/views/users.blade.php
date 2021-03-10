@extends('layouts.app')

@section('title', 'Użytkownicy | Cerber')

@section('content')
    <h1>Użytkownicy</h1>
    <users-list-component></users-list-component>
    <user-add-button-component></user-add-button-component>
@endsection


