    
let product = ["Sony","Samsung"];
let data = '';
let t =product.length;

function Display() {	
	for (var i = 0; i<=t; i++) {
		data += "<tr><td id='nameProduct'> " 
		+ product[i] + 
		"</td><td><button onclick='editProduct("+i+")'>Edit</button></td>"+
		"<td><button onclick='delProduct("+i+")'>Delete</button></td></tr>";
	}document.getElementById('table').innerHTML = data;	                                     
    
    }document.getElementById('table').innerHTML = data;	
	data = '';


function addto() {	
    let pro=document.getElementById('product').value
        product.push(pro);
        console.log(product);
	Display();
} 

function editProduct(abc) {
    var name = prompt('Nhập tên sản phẩm','');
	    for (var j = 0; j <t; j++) {		
		if (product[abc] == product[j]) {
			product[j] = name;
		
		}
	}
	Display();
}

function delProduct(abc) {
for (var j = 0; j <t; j++) {		
		if (product[abc] == product[j]) {
			product.splice(j,1);		
			// console.log(product[abc]);
		}
	}
	Display();
}