
/*  
Working.  Should be easy to change hours now if wanted.  Could also set up
    another function for that.
*/

//Table for opening and closing hours.
var openTime = [
    ["Day", "Open", "Close"], //DO NOT CHANGE
    ["Monday", "11:00 AM", "10:00 PM"],
    ["Tuesday", "11:00 AM", "10:00 PM"],
    ["Wednesday", "11:00 AM", "10:00 PM"],
    ["Thursday", "11:00 AM", "12:00 PM"],
    ["Friday", "9:00 AM", "2:00 AM"],
    ["Saturday", "9:00 AM", "2:00 AM"],
    ["Sunday", "11:00 AM", "12:00 PM"]
    ];
  
function hours(arr) {
    //Generates table inside #home content div
    var table = document.getElementById('table'); //creates table
    //Generates THead and <th> items.
    function tableHead(arr) {
        let thead = document.createElement('thead'); //creates thead
        let row = document.createElement('thead'); //creates tr
        for (let i=0;i<arr[0].length;i++) {
            let th = document.createElement('th'); //creates th
            let text = document.createTextNode(arr[0][i]); //creates text node from first array list
            th.appendChild(text); //appends text node to th
            row.appendChild(th); //appends th to tr
            table.appendChild(row); //appends row to thead
        };
        document.getElementById('table').appendChild(thead);  //returns thead row
    };
    
    function tableData(arr) {
        let dayTime = arr.slice(1, arr.length);
        for (let i=1;i<dayTime.length;i++) {
            let row = document.createElement('tr');
            for (let j=0;j<3;j++) {
                let td = document.createElement('td');
                let text = document.createTextNode(arr[i][j]);
                td.appendChild(text);
                row.appendChild(td);
                document.getElementById('table').appendChild(row);
            };
        };
    };
    tableHead(arr); //sets table rows to values of arr[row].


    return tableData(arr) //returns final table. 
};

export default hours(openTime);