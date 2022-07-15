let check = document.querySelector('.check');
let outcheck = document.querySelector('.outcheck');

let summa = document.querySelector('#summa');
let names = document.querySelector('#names');
let cashback = document.querySelector('#cashback');
let date = document.querySelector('#date');


function getCheck(event) {

    let summaInp = +document.querySelector('#summaInp').value;
    let ismInp = document.querySelector('#ismInp').value;

   
        check.style.cssText =`   transform: translateY(-240px);`
        outcheck.style.cssText =`    border-top-color: transparent;`
        summa.innerHTML = summaInp ;
        names.innerHTML = ismInp ;
        cashback.innerHTML = summaInp*0.01 ;
    
        let d = new Date ;
        date.innerHTML  =` ${d.getHours()} :  ${d.getMinutes()} : ${d.getSeconds()}`

}
document.querySelector('.reload').addEventListener( 'click' , ()=>{
     check.style.cssText =` opacity: 0; transform: translateY(-440px); `;
     setTimeout(() => {
        location.reload();
     }, 1000);
    
})