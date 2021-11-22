var a = [
    {name:"Micheal", age:20, hometown:"New York"},
    {name:"Santino", age:25, hometown:"Los Angeles"},
    {name:"Fredo",   age:29, hometown:"California"},
    {name:"Hagen",   age:28, hometown:"Long Beach"},
]
  
let table=" ";

a.forEach((x)=>{

table += "<tr>" +"<td>"+x.name+"</td>"+"<td>"+x.age+"</td>"+"<td>"+x.hometown+"</td>"+"</tr>";
})
document.getElementById("tbody").innerHTML = table;

var newarr= a.filter(function(i) 
{
return i.age>=25;
});
console.log(newarr);



// table,thead and tbody - element create

// let table = document.createElement('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');



// // thead and tbody are append in table element
// table.appendChild(thead);
// table.appendChild(tbody);

// // table element append in id="table "
// document.getElementById("table").appendChild(table);

// // creating 1st row ,Creating and adding heading data to first row of the table
// let row_1 = document.createElement('tr');
// let heading_1 = document.createElement('th');
// heading_1.innerHTML = "Name";
// let heading_2 = document.createElement('th');
// heading_2.innerHTML = "Age";
// let heading_3 = document.createElement('th');
// heading_3.innerHTML = "Hometown";

// // append heading 1,2,3 in row 1
// row_1.appendChild(heading_1);
// row_1.appendChild(heading_2);
// row_1.appendChild(heading_3);

// // append row1 in thead element
// thead.appendChild(row_1);


// // Creating 2nd row, Creating and adding data to second row of the table
// let row_2 = document.createElement('tr');
// let row_2_data_1 = document.createElement('td');
// // row_2_data_1.innerHTML = "1.";
// let row_2_data_2 = document.createElement('td');
// // row_2_data_2.innerHTML = "Ram";
// let row_2_data_3 = document.createElement('td');
// // row_2_data_3.innerHTML = "BSC";

// // Append table data in row2
// row_2.appendChild(row_2_data_1);
// row_2.appendChild(row_2_data_2);
// row_2.appendChild(row_2_data_3);

// // append row2 in tbody element
// tbody.appendChild(row_2);


// // Creating 2nd row, Creating and adding data to third row of the table
// let row_3 = document.createElement('tr');
// let row_3_data_1 = document.createElement('td');
// row_3_data_1.innerHTML = "2.";
// let row_3_data_2 = document.createElement('td');
// row_3_data_2.innerHTML = "Shyam";
// let row_3_data_3 = document.createElement('td');
// row_3_data_3.innerHTML = "MSc";

// // Append table data in row3
// row_3.appendChild(row_3_data_1);
// row_3.appendChild(row_3_data_2);
// row_3.appendChild(row_3_data_3);


// // append row3 in tbody element
// tbody.appendChild(row_3);

// // Creating and adding data to forth row of the table
// let row_4 = document.createElement('tr');
// let row_4_data_1 = document.createElement('td');
// row_4_data_1.innerHTML = "3";
// let row_4_data_2 = document.createElement('td');
// row_4_data_2.innerHTML = "Raj";
// let row_4_data_3 = document.createElement('td');
// row_4_data_3.innerHTML = "BCA";

// // Append table data in row4
// row_4.appendChild(row_4_data_1);
// row_4.appendChild(row_4_data_2);
// row_4.appendChild(row_4_data_3);


// // append row4 in tbody element
// tbody.appendChild(row_4);



function checkForm(form) {
  if (form.inputage.value ==""){
    alert("Error:Please enter your age");
    form.inputage.focus();
    return false;
  }
  else if (document.getElementById("age").value>=18){
    document.getElementById("agedemo").innerHTML="You are eligible for voting";
  }
  else {
    document.getElementById("agedemo").innerHTML="You are not eligible for voting";
  }
}

