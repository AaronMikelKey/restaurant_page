const openTime = [
    {Monday: "11:00 AM - 10:00 PM"},
    {Tuesday: "11:00 AM - 10:00 PM"},
    {Wednesday: "11:00 AM - 10:00 PM"},
    {Thursday: "11:00 AM - 12:00 PM"},
    {Friday: "9:00 AM - 2:00 AM"},
    {Saturday: "9:00 AM - 2:00 AM"},
    {Sunday: "11:00 AM - 12:00 PM"}
];

function hours(hoursTable) {
    //Generates table inside #home content div
    let table = document.createElement('table');
    //Generates THead and <th> items.
    function tableHead(hoursTable) {
        let thead = hoursTable.createTHead();
        let row = thead.insertRow();
        for (let i=0;i<hoursTable.length;i++) {
            let th = document.createElement('th');
            let text = document.createTextNode(hoursTable[0]);
            th.appendChild(text);
            row.appendChild(th);
        }
        return table = hoursTable;
    }; /*
    //Generates <tr> and <td> for each item in openTime.
    function tableData(table, data) {
        for (let element of data) {
            let row = table.insertRow();
            for (let i=0;i<element.length;i++) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[i]);
                cell.appendChild(text);
            }
        }
    }
    let data = Object.keys(openTime[0]);
    tableData(table, data);
    tableHead(table, data);
*/
    return table;
};
export default hours();