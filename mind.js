var finished = false;  
        var boardSize;
        var startTime = performance.now();
        //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();  

        var moves = 0;

        var matrix = [];

        var column = [];

        var row = [];


        function setup(size)
        {
            var solved = [];
            boardSize = size;
            //alert('setup');
            for(var i=0; i < boardSize; i++) {
                matrix[i] = [];
                solved[i] = [];
                for(var j=0; j < boardSize; j++) {
                    matrix[i][j] = 0;
                    solved[i][j] = Math.floor(Math.random() * 2); 
                }
            }   
            
            for(var i=0; i<boardSize; i++) {
                column[i] = 0;
                for(var j=0; j<boardSize; j++) {
                    column[i] += solved[i][j];
                }
            }   

            for(var i=0; i<boardSize; i++) {
                row[i] = 0;
                for(var j=0; j<boardSize; j++) {
                    row[i] += solved[j][i];
                }
            }   

            
            console.log(document.getElementById("c1").innerText);
            document.getElementById("c1").innerText  = column[0].toString();
            document.getElementById("c2").innerText  = column[1].toString();        
            document.getElementById("c3").innerText  = column[2].toString();        
            document.getElementById("c4").innerText  = column[3].toString();        
            document.getElementById("c5").innerText  = column[4].toString();
            
            document.getElementById("r1").innerText  = row[0].toString();
            document.getElementById("r2").innerText  = row[1].toString();        
            document.getElementById("r3").innerText  = row[2].toString();        
            document.getElementById("r4").innerText  = row[3].toString();        
            document.getElementById("r5").innerText  = row[4].toString();

            //extra
            
            switch(boardSize) {
                case 10:
                    document.getElementById("c10").innerText  = column[9].toString(); 
                    document.getElementById("r10").innerText  = row[9].toString();
                case 9:
                    document.getElementById("c9").innerText  = column[8].toString();   
                    document.getElementById("r9").innerText  = row[8].toString();
                case 8:
                    document.getElementById("c8").innerText  = column[7].toString(); 
                    document.getElementById("r8").innerText  = row[7].toString();  
                case 7:
                    document.getElementById("c7").innerText  = column[6].toString();
                    document.getElementById("r7").innerText  = row[6].toString();   
                case 6:
                    document.getElementById("c6").innerText  = column[5].toString();
                    document.getElementById("r6").innerText  = row[5].toString();

            }


        }

       
        /*console.log(document.getElementById("c1").innerText);
        document.getElementById("c1").innerText  = column[0].toString();*/

        function submitButtonStyle(_this, a, b) {
            if(finished) return;
            moves++;
            if(_this.style.backgroundColor != "red")
            {
                matrix[a][b] = 1;
                _this.style.backgroundColor = "red";
            }
            else{
                matrix[a][b] = 0;
                _this.style.backgroundColor = "grey"
            }
            wait(50);
            check();
        }
        
        function check() {
            var ch = 0;
            {
                var column2 = [];
                for(var i=0; i < boardSize; i++) {
                    column2[i] = 0;
                    for(var j=0; j < boardSize; j++) {
                        column2[i] += matrix[i][j];
                    }
                }   

                var row2 = [];
                for(var i=0; i < boardSize; i++) {
                    row2[i] = 0;
                    for(var j=0; j<boardSize; j++) {
                        row2[i] += matrix[j][i];
                    }
                }

                if(arraysEqual(column,column2) && arraysEqual(row,row2))
                {
                    //wait(500);
                    congratulations();
                    finished = true;
                    
                }   
            }
        }

        function wait(ms){
            var start = new Date().getTime();
            var end = start;
            while(end < start + ms) {
              end = new Date().getTime();
           }
        }

        function congratulations(){
           // alert("Congratulations!");
            
            var finishTime = performance.now();
            var timePlayed = finishTime - startTime;
            
            //var time = timePlayed.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            document.getElementById("cong").innerText = 'Congratulations! Number of moves:' + moves.toString() + '\n Time played: ' + Math.round(timePlayed/1000 * 100) / 100 + ' seconds \n\n Play another game! :)';
           // location.reload();
        }

        function arraysEqual(a1,a2) {
         /* WARNING: arrays must not contain {objects} or behavior may be undefined */
            return JSON.stringify(a1)==JSON.stringify(a2);
        }
