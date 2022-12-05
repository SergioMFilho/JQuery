// JavaScript
let btn_somarjs = document
  .getElementById("btn_somarjs")
  .addEventListener("click", () => {
    let v1 = document.getElementById("v1").value;
    let v2 = document.getElementById("v2").value;
    soma = parseInt(v1) + parseInt(v2);
    let res = (document.getElementById("res").value = soma);
  });

// JQUERY
$("#btn_somarjq").click(() => {
  let v1 = parseInt($("#v1").val());
  let v2 = parseInt($("#v2").val());
  let soma = v1 + v2;
  $("#res").val(soma);
});
