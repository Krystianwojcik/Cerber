@extends('layouts.app')

@section('title', 'Dodaj Klienta | Cerber')

@section('content')
    {{$client}}
    {{$quarter}}
    <client-form  :client="{{$client}}  :quarter="{{$quarter}}></client-form>
@endsection


