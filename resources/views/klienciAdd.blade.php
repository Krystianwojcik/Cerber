@extends('layouts.app')

@section('title', 'Dodaj Klienta | Cerber')

@section('content')
    <template>
        @if($client ?? false)
            <client-form :client="{{$client}}"></client-form>
        @else
            <client-form></client-form>
        @endif
    </template>
@endsection


