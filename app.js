// setting up here
let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

console.log(btns);


btns.forEach(function(btn) {
    btn.addEventListener("click", function(x){
        const styles = x.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        value.textContent = count;
        if(count < 0){
            value.style.color = "red";
        }
        else if(count > 0){
            value.style.color = "green";
        }
        else{
            value.style.color = "black";
        }
    });
});