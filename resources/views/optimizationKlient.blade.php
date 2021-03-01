@extends('layouts.app')

@section('title', 'Optymalizacje | Cerber')

@section('content')
    <h1>Optymalizacja Klient</h1>
    <client-optimization-change-quarter-component :client="{{$client}}" :quarter="{{$quarter}}"></client-optimization-change-quarter-component>
    <client-optimization-page-component :quarter="{{$quarter}}"></client-optimization-page-component>
    <check-button-optimization-component :quarter="{{$quarter}}"></check-button-optimization-component>
    <optimization-add-record-button-component></optimization-add-record-button-component>
@endsection


