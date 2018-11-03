$(document).ready(function() {
    $('#cofTable').DataTable();
} );


var tbody = document.getElementById('tabelaAulas');

for(var i=0; i < aulas.length; i++){
    var tr = document.createElement('tr');
    var tdId = document.createElement('td');
    tdId.textContent = aulas[i].Id.toString();
    tr.appendChild(tdId);
    var tdTitle = document.createElement('td');
    tdTitle.textContent = aulas[i].title;
    tr.appendChild(tdTitle);
    var tdDuration = document.createElement('td');
    tdDuration.textContent = aulas[i].duration;
    tr.appendChild(tdDuration);
    tbody.appendChild(tr);
}
