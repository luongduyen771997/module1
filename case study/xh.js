

let board = [];
let data = "";
    for (let i = 0; i < 3; i++) {
        board[i] = [];
    }
function Start(){
    
        data += '<table>'
            for(let i =0;i<3;i++){
                data += '<tr>';
            for(let j =0;j<3;j++){
                data += '<td>' + '<div style="width: 100px; height: 100px;">' + '</td>'
            }
                data += '</tr>';
            }
                data += '</table>';
                document.getElementById('img').innerHTML = data;
        }
        Start();
        

        
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) { 
    ev.preventDefault();
     data = ev.dataTransfer.getData("text");
   if(data!=null) {ev.target.appendChild(document.getElementById(data))};
}

        
       
             