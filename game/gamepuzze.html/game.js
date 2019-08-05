let i1 = document.getElementById('i1');
let i2 = document.getElementById('i2');
let i3 = document.getElementById('i3');
let i4 = document.getElementById ('i4');
function changei1() {
    let a = Math.floor((Math.random() *3) +1);
    i1.src = document.getElementById('i1')
    console.log (a)
    switch (a) {
        case 1:
            i1.src = 'L1.png';
            i1.alt = 'L1';
            break;
        case 2 :
            i1.src = 'ha1.png';
            i1.alt = 'ha1';
            break;
        case 3:
            i1.src = 'D1.png';
            i1.alt = 'D1';
            break;
                }
    if (checkwin()) alert ('that right');
}
function changei2() {
    let a = Math.floor((Math.random() *3) +1);
    i2.src = document.getElementById('i2')
    console.log (a)
    switch (a) {
        case 1:
            i2.src = 'L2.png';
            i2.alt = 'L2';
            break;
        case 2 :
            i2.src = 'ha2.png';
            i2.alt = 'ha2';
            break;
        case 3:
            i2.src = 'D2.png';
            i2.alt = 'D2';
            break;
                }
        if (checkwin()) alert ('that right');
}
function changei3() {
    let a = Math.floor((Math.random() *3) +1);
    i3.src = document.getElementById('i3')
    console.log (a)
    switch (a) {
        case 1:
            i3.src = 'L3.png';
            i3.alt = 'L3';
            break;
        case 2 :
            i3.src = 'ha3.png';
            i3.alt = 'ha3';
            break;
        case 3:
            i3.src = 'D3.png';
            i3.alt = 'D3';
            break;
                }
        if (checkwin()) alert ('that right'); 
}
function checkwin(){
    return i1.alt + i2.alt + i3.alt ==='L1L2L3'||
           i1.alt + i2.alt + i3.alt ==='ha1ha2ha3' ||
           i1.alt + i2.alt + i3.alt ==='D1D2D3'
}