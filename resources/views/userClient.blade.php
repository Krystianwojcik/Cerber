@extends('layouts.app')

@section('title', 'Przydziel klientów | Cerber')

@section('content')
    <template>
        <user-client :clients="{{$client}}" :userid="{{$userid}}"></user-client>
    </template>
@endsection


