@extends('layouts.app')

@section('title', 'Dodaj Klienta | Cerber')

@section('content')
{{$client}}

    <client-form  @if(($client)) :client="{{$client}}" @endif></client-form>
@endsection


