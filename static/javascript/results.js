function CreateTableFromJSON(data) {
  //data is currently hard-coded, must be passed through in JSON into parameter
    data = [
        {
            "Last Name": "Taylor",
            "First Name": "Thomas",
            "Skills": "Computers",
            "Score": "125.60"
        },
        {
          "Last Name": "Prather",
          "First Name": "Sonya",
          "Skills": "Computers",
          "Score": "125.60"
        },
        {
          "Last Name": "Key",
          "First Name": "Melissa",
          "Skills": "Computers",
          "Score": "125.60"
        },
        {
          "Last Name": "Jones",
          "First Name": "Hector",
          "Skills": "Computers",
          "Score": "125.60"
        },
        {
          "Last Name": "Carwile",
          "First Name": "Darby",
          "Skills": "Computers",
          "Score": "125.60"
        },
        {
            "Last Name": "Williams",
            "First Name": "Emily",
            "Skills": "Science",
            "Score": "210.40"
        }
    ]

    var results = data;

    // EXTRACT VALUE FOR HTML HEADER.
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < results.length; i++) {
        for (var key in results[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < results.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = results[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
