<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title')</title>

    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <style>
        body {
            font-family: 'Nunito';
        }
    </style>
</head>
<body class="antialiased pt-5">
<div id="app">
    <main-menu></main-menu>
    <side-menu></side-menu>
    <main class="py-5">
        <div class="container">
            @yield('content')
        </div>
    </main>
</div>
<script src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>
