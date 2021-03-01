@extends('layouts.app')

@section('title', 'Dodaj Klienta | Cerber')

@section('content')

    <client-form  @if(isset($client)) :client="{{$client}}" :edit="true" @endif></client-form>
@endsection


