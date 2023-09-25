let btn=document.getElementById('Go-to-top');

window.onscroll=function(){
            if(scrollY >= 600){
                btn.style.display='block';
            } 
            else{
                btn.style.display='none';
            }
        }



btn.addEventListener('click',function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"

    })
})