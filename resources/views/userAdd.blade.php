@extends('layouts.app')

@section('title', 'Dodaj Użytkownika | Cerber')

@section('content')
    <template>
        @if($user ?? false)
            <user-form :user="{{$user}}"></user-form>
        @else
            <user-form></user-form>
        @endif
    </template>
@endsection


