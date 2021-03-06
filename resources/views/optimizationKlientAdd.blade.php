@extends('layouts.app')

@section('title', 'Dodaj Dane | Cerber')

@section('content')
    @if($optymization ?? false)
        <optimization-add-record-component :optymization="{{$optymization}}"></optimization-add-record-component>
    @else
        <optimization-add-record-component></optimization-add-record-component>
    @endif

@endsection


