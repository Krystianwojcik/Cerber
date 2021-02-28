@extends('layouts.app')

@section('title', 'Dodaj Klienta | Cerber')

@section('content')
    <client-form  @if(isset($client)) :client="{{$client}}"  :quarter="{{$quarter}}" @endif></client-form>
@endsection


