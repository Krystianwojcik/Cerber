@extends('layouts.app')

@section('title', 'Raporty | Cerber')

@section('content')
    <h1>Raporty Klient</h1>
    <raport-component :raports="{{$raport}}"></raport-component>
@endsection


