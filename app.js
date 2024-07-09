let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;

        }else{
            count = 0;
        }
        if(count>0){
            value.style.color = '#C45AB3';
        }else if(count < 0){
            value.style.color = '#6B7FD7'
        }else{
            value.style.color = '#DB93B0'
        }
        value.textContent = count;
    })
});

