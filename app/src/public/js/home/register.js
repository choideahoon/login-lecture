"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    passwd = document.querySelector("#passwd"),
    confirmPasswd = document.querySelector("#confirm-passwd"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if ( !id.value ) return alert("아이디를 입력해주십시오.");
    if ( passwd.value !== confirmPasswd.value ) return alert("패스워드가 일치하지 않습니다.");

    const req = {
        id: id.value,
        name: name.value,
        passwd: passwd.value,
         };
        
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
       body: JSON.stringify(req),       
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/login";
            console.log(res);
        } else {
            alert(res.msg);
            console.log(res);
        }
    }).catch((err) => {
        console.error("회원가입 중 에러 발생");
    });
}

