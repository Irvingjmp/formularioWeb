document.getElementById("registrarse").addEventListener("click",function(){
    const nombre = document.querySelector("#nombre").value.trim();
    const email = document.querySelector("#correo").value.trim();
    const password = document.querySelector("#password").value.trim();
    const fNacimiento = document.querySelector("#fechaNacimiento").value;
    const aceptTerminos = document.querySelector("#terminos").checked;
    if(nombre === ""){
        alert("No puede estar vacío")
    }else if(email === ""){
        alert("Añade tu email")
    }else if(!email.includes("@")){
        alert("Te falta el '@'")
    }else if(password ===""){
        alert("Contra invalida")
    }else if(password.length <= 8){
        alert("Contraseña no segura");
    }else if(fNacimiento ===""){
        alert("Selecciona una fecha de nacimiento");
    }else if(!aceptTerminos){
        alert("Debes aceptar los terminos");
    }else{
        alert("registro completo "+nombre+"!")
    }
});
