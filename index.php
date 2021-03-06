<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
<!--        <base href="/demo/" />-->
        <title>Barley-Break</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimal-ui" />
        <meta name="apple-mobile-web-app-status-bar-style" content="yes" />
        
<!--        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />-->
        
        <link rel="stylesheet" href="dist/css/mobile-angular-ui-hover.min.css" />
        <link rel="stylesheet" href="dist/css/mobile-angular-ui-base.min.css" />
        <link rel="stylesheet" href="dist/css/mobile-angular-ui-desktop.min.css" />
        
        <link rel="stylesheet" href="views/game/game.css" />
        
        
        
    </head>
    <body ng-app="MobileAngularUiExamples" ng-controller="MainController" ui-prevent-touchmove-defaults>
        
          <ng-view></ng-view>
        
        <script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.0/angular.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.0/angular-route.min.js"></script>
        <script src="dist/js/mobile-angular-ui.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
        
        <!-- Required to use $touch, $swipe, $drag and $translate services -->
        <script src="dist/js/mobile-angular-ui.gestures.min.js"></script>
        <script src="phonegap.js"></script> 
        <script src="app.js"></script>
        
        <script src="views/game/game.controller.js"></script>
        

  </body>
</html>
