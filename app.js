// const myform = document.querySelectorAll('cardForm');
// console.log(myform);

function myform() {
  const nameinput = document.getElementById("cardForm").name;
  document.getElementById("cardForm").innerHTML = nameinput;
  return nameinput;
}
console.log();

// const formname = document.getElementById('nameForm');
//  console.log(formname);
//  myform.addEventListener('submit', (e) => {
//     let messages = [];
    
//     if (myform.value.length === '' || myform.value === null) {   
//         messages.push('Name is required');
//     }
//     if (messages.length > 0) {
//         e.preventDefault();
//         getError.innerText = messages.join(',')
//     }
// })

