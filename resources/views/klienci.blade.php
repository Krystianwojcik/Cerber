<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Klienci - Cerber</title>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <style>
        body {
            font-family: 'Nunito';
        }
    </style>
</head>
<body class="antialiased">
<div id="app">
    <main-menu></main-menu>
    <side-menu></side-menu>
    <content-component></content-component>
</div>
<script src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>
