app.controller('gameController',function($rootScope, $scope, $location){

	var result,count,win,stop,time,c,key,f = 15;
    
    function shuffle(arr){
        var x, j;
        var N = arr.length;
        for (var i = 0; i < N; i++){
            j = Math.floor(Math.random() * N);
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
            return arr;
    };

    var merge, mergeCount;

    merge = function(List1, List2) {
        List1 = List1.slice();
        List2 = List2.slice();
        var count = 0;
        var outputList = [];

        while (List1.length > 0 && List2.length > 0) {
            outputList.push(Math.min(List1[0], List2[0]));
            if (List2[0] < List1[0]) {
                count += List1.length;
                List2.shift();
            } else {
                List1.shift();
            }
        }
        outputList = outputList.concat(List1.concat(List2));
        return {
            'count': count,
            'list': outputList
        };
    };
    mergeCount = function(List) {
        List = List.slice();
        var List1, List2, mergeOut, output1, output2;
        if (List.length < 2) {
            return {
                'count': 0,
                'list': List
            };
        } else {
        List1 = List.splice(0, Math.floor(List.length / 2));
            List2 = List;
            output1 = mergeCount(List1);
            output2 = mergeCount(List2);
            mergeOut = merge(output1.list, output2.list);    
        return {
            'count': output1.count + output2.count + mergeOut.count,
            'list': mergeOut.list
        };
        }
    };

    function makeSolvable(arr){
        if(mergeCount(arr).count % 2 == 0){  
            for(var i=0; i<arr.length - 1; i++){
                if(arr[i] != 0 && arr[i+1] != 0){
                    var x = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = x;
                    break;
                }
            }
        }
    };

    function check(){
        stop=true;
        for(l=0; l<win.length; l++){
            if(win[l]!=count[l])
                stop=false;
        }
        return stop;
    }

    function oneline(n,m){
        return Math.floor(n/4)==Math.floor(m/4);
    }
    function swap(a, b){
        //console.log("swap: " + a + " and " + b);
        f=a;
        $('#'+(b)).html(count[a]);
        $('#'+(a)).html('');
        count[a] += count[b];
        count[b] = count[a] - count[b];
        count[a] -= count[b];
        result = $("#out").html();
        result++;
        $("#out").text(result);
        stop = check();
        if(stop){
            alert("Congratulations");
            $scope.stopTimer();
        }
    }
    function chooseClick(num){
        if(!stop){
            if(count[num + 4] == 0)
                swap(num, num + 4);
            if(count[num - 4] == 0)
                swap(num,num - 4);
            if(count[num + 1] == 0 && oneline(num,num + 1))
                swap(num,num + 1);
            if(count[num - 1] == 0 && oneline(num,num - 1))
                swap(num,num - 1);}
    }
    function startTimer(){
        c = setInterval(function (){
            time++;
            $("#timer").text(time);
        } ,1000)
    }
    $scope.stopTimer = function(){
        $("#out").text(0);
        clearInterval(c);
    }
    function chooseArrow(k){
       
        if(k==0 && oneline(f,f + 1))
            swap(f+1, f);
        if(k == 2 && oneline(f, f-1))
            swap(f-1, f);
        if(k == 1 && f + 4 <= 15)
            swap(f+4, f);
        if(k == 3 && f-4 >= 0)
            swap(f-4, f);
         
    }
   

    $scope.load = function(){ 
        //var arr = [3,1,2,4,5];
        //makeSolvable(arr);
        //console.log(sortAndcount(arr).count);
        //console.log(arr);
        count=[];
        win=[];
        stop=false;
        $scope.stopTimer();
        startTimer();
        
        for (p = 0; p < 16; p++){
            count.push(p);
            if(p > 0) win.push(p);
            $('td').attr("id",function(p){
                return p;
            });
        }

        count = shuffle(count);
       
        for (p = 0; p < count.length; p++){
            if(count[p] == 0){
                swap(p, 15)
            }
            $('#'+(p)).html((count[p] != 0 ? count[p] : ''));
        }
        makeSolvable(count);


        win.push(0);
        result = 0;
        time=0;
        
        $("#out").text(result);
        $("#timer").text(time);
        
    }

    $scope.go = function ( path ) {
        if(path == '/'){
            $scope.stopTimer();
        } 
        $location.path( path ); 
    };
    //$(document).ready(function (){
    $('td').click(function(){
        chooseClick(+($(this).attr('id')));
    });
    //});
    $(document).keydown(function(e){
        key = e.which - 37;
        if(key >= 0 && key <= 3 && !stop)
            chooseArrow(key);
    });
    $scope.load();
});

