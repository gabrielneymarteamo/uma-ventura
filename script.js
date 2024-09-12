const avanca = document.querySelectorAll ('bnt-proximo')

avanca.forEach(button=>{
    button.addEventListener('click',function(){
        const atual= document.querySelector('.ativo')
        const proximoPasso = 'Passo-'+this.getAttribute('data-proximo')
    })
})