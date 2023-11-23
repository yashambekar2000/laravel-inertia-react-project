<!-- resources/views/app.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your App Title</title>
    <!-- Your other head content -->
</head>
<body>
    <div id="app" data-page="{{ json_encode($page) }}"></div>
    
    <script src="{{ mix('/js/app.js') }}" defer></script>
</body>
</html>
