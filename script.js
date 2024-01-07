const current__Year = new Date().getFullYear();
const current__Month = new Date().getMonth();
const current__Date = new Date().getDate();
console.log(current__Date);

const calc__btn = document.getElementById("btn");
const result = document.getElementById("result");

calc__btn.addEventListener("click", () => {
  const entered__Date = document.getElementById("birthday").value;
  if (entered__Date) {
    const dob = new Date(entered__Date);
    const birth__year = dob.getFullYear();
    const birth__Month = dob.getMonth();
    const birth__Date = dob.getDate();
    let age = current__Year - birth__year;
    result.innerText = `Your age is ${age} years old`;
    result.style.color = "black";
    if (current__Month < birth__Month || birth__Date < current__Date) {
      age--;
      result.innerText = `Your age is ${age} years old`;
      result.style.color = "black";
    }
  } else {
    result.style.color = "red";
    result.innerText = alert("Please enter DOB");
  }
});
