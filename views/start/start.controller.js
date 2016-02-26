app.controller('startController', function($rootScope, $scope, $location){
    $scope.testMessage = 'Barley-Break';

    $scope.go = function ( path ) {
        if(path == '/'){
            $scope.stopTimer();
        } 
        $location.path( path ); 
    };
});