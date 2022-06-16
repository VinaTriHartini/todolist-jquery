checktodo();

function checktodo() {
    let showdata = localStorage.getItem("todos");
    if (showdata == null) {
        todos = [];
    } else {
        todos = JSON.parse(showdata);
    }

    let html = "";
    todos.forEach((todos, index) => {
        html += `<li onclick='checked(this)'> ${todos} <i class="fas fa-times close" onclick='hapus(${index})'></i></li>`
    });
    $("#myUL").empty().append(html);
}

$("#addBtn").click(function() {
    v = $('#myInput').val();
    if (v == "") {
        alert("you must write something");

    } else {
        let showdata = localStorage.getItem("todos");
        if (showdata == null) {
            todos = [];
        } else {
            todos = JSON.parse(showdata);
        }
        todos.push(v);
        localStorage.setItem("todos", JSON.stringify(todos));
        window.location.reload();
    }
});

let hapus = (index) => {
    let hapus = localStorage.getItem("todos");
    todos = JSON.parse(hapus);
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    window.location.reload();
}

function checked(v) {
    var element = v;
    if (element.classList.contains('checked')) {
        element.classList.remove('checked');
    } else {
        element.classList.add('checked');
    };
}