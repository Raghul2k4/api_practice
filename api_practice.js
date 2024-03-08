var named;
var idd;
var nn;
var em;
var ad;
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>{
        b=data
        console.log(b)
        da(b);
    })
function da(b)
{
    for(var i=0;i<=b.length;i++)
    {
    var named=b[i].name;
    var idd=b[i].id;
    var em=b[i].email;
    var us=b[i].username;
    create(named,idd,em,us)
    }
}

function create(name,id,em,us)
{
        let newTable = document.createElement("table");
        document.body.appendChild(newTable);
        newTable.setAttribute("class", "newTbl");
        newTable.setAttribute("border",3)
        newTable.innerHTML += `<tr>
            <th id="name">Name</th>
            <th id="id">id</th>
            <th id="nn">Username</th>
            <th id="Em">Email</th>
        </tr>
        <tr id="tdata">
            <td class="tdata">${name}</td>
            <td class="tdata">${id}</td>
            <td class="tdata">${us}</td>
            <td class="tdata">${em}</td>
        </tr>`;
}