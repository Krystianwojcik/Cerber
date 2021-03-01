@extends('layouts.app')

@section('title', 'Raporty | Cerber')

@section('content')
    <h1>Raporty</h1>
    <clients-raports-list-component :clients="{{$clients}}"></clients-raports-list-component>
@endsection


