function contactFormValidations(){
    const $form = d.querySelector('.formulario'),
        $inputs = d.querySelectorAll('.formulario [required]');

    //console.log($inputs)

    $inputs.forEach(input =>{
        const $span = d.createElement('span');
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add('contact-form-error','none')
        input.insertAdjacentElement("afterend",$span);
    });

    d.addEventListener('keyup', (e) =>{

        if(e.target.matches('.formulario [required]')){
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;
            if(pattern && $input.value!==''){
                console.log('tiene patrion')
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                ? d.getElementById($input.name).classList.remove('none')
                : d.getElementById($input.name).classList.add('none')
            }
            if(!pattern){
                return $input.value === ''
                ? d.getElementById($input.name).classList.remove('none')
                : d.getElementById($input.name).classList.add('none')
            }
        }
    })

    d.addEventListener('submit', (e)=>{
        //e.preventDefault();

        const $loader = d.querySelector('.contact-form-loader'),
            $response = d.querySelector('.contact-form-response');
        $loader.classList.remove('none')

        setTimeout(()=>{
            $loader.classList.add('none');
            $response.classList.remove('none');
            $form.reset()

            setTimeout(()=> $response.classList.add('none'),3000)
        },3000)

    })
}

const $submit = document.querySelector('.submit-btn')

$submit.addEventListener('click', () =>{
    contactFormValidations()
})