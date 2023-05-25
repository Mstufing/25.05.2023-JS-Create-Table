
let arr =[];

let table = document.querySelector(".tbody");

let inpForm = document.querySelector(".inp-form");

inpForm.onsubmit = (event) => {
    event.preventDefault();

    let user = {
        id: Date.now(),
        avatar: event.target["avatar"].value.trim().length === 0
        ? "https://fakeimg.pl/100x100/"
        : event.target["avatar"],
        email: event.target["email"].value,
        firstName: event.target["firstName"].value,
        lastName: event.target["lastName"].value,
        age: event.target["age"].value,
        job: event.target["job"].value,
        phone: event.target["phone"].value,
    };
    arr.push(user)
    render();
}

function deleteUser(id) {
        arr = arr.filter(elem => elem.id != id)
        render();
}

function render(){
    table.innerHTML = "";

    arr.forEach((elem) => {

        let tr = document.createElement("tr");

        let tdId = document.createElement("td");
        tdId.innerHTML = elem.id;

        let tdAvatar = document.createElement("td");
        let avatar = document.createElement("img");
        avatar.src = elem.avatar;
        tdAvatar.appendChild(avatar);

        let tdEmail = document.createElement("td");
        tdEmail.innerHTML = elem.email;

        let tdFirstName = document.createElement("td");
        tdFirstName.innerHTML = elem.firstName;

        let tdLastName = document.createElement("td");
        tdLastName.innerHTML = elem.lastName;

        let tdAge = document.createElement("td");
        tdAge.innerHTML = elem.age;

        let tdJob = document.createElement("td");
        tdJob.innerHTML = elem.job;

        let tdPhone = document.createElement("td");
        tdPhone.innerHTML = elem.phone;

        let tdDel = document.createElement("td");
        let btnDel = document.createElement("button");
        btnDel.onclick = () => deleteUser(elem.id);
        btnDel.innerHTML = "Delete";
        tdDel.appendChild(btnDel);


        tr.appendChild(tdId);
        tr.appendChild(tdAvatar);
        tr.appendChild(tdEmail);
        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdAge);
        tr.appendChild(tdJob);
        tr.appendChild(tdPhone);
        tr.appendChild(tdDel);

        table.appendChild(tr);
    })
}

render();