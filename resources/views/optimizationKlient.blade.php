@extends('layouts.app')

@section('title', 'Optymalizacje | Cerber')

@section('content')
    <h1>Optymalizacja Klient</h1>
    <client-optimization-change-quarter-component></client-optimization-change-quarter-component>
    <client-optimization-page-component :quarter="{{$quarter}}"></client-optimization-page-component>
    <optimization-check-button-component></optimization-check-button-component>
    <optimization-add-record-button-component></optimization-add-record-button-component>
@endsection


