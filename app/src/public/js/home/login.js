"use strict";


const id = document.querySelector("#id"),
    passwd = document.querySelector("#passwd"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        passwd: passwd.value,
    };
    
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
       body: JSON.stringify(req),       
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/";
            console.log(res);
        } else {
            alert(res.msg);
            console.log(res);
        }
    }).catch((err) => {
        console.error("로그인 중 에러 발생");
    })
}