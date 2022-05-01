
window.onload = function() {

    // hide the form_2, form_3, form_4
    let form_2  = document.getElementById('form-2');
    form_2.classList.add('form-1-disable');

    let form_3  = document.getElementById('form-3');
    form_3.classList.add('form-1-disable');

    let form_4  = document.getElementById('form-4');
    form_4.classList.add('form-1-disable');
}    


// function validation(currentForm, nextForm, nextTab){


//     // let form_1 = document.getElementById(currentForm);
//     // console.log('form_1', form_1.classList)
//     // form_1.classList.forEach(x => { if (x === 'form_enable') { form_1.classList.remove('form_enable'); form_1.classList.add('form-1-disable')} else { form_1.classList.add('form-1-disable')} })
//     // form_1.classList.add('form-1-disable')


//     // let company_details_tab = document.getElementById(nextTab);
//     // company_details_tab.classList.add('active');


//     // let form_2  = document.getElementById(nextForm);
//     // form_2.classList.remove('form-1-disable')
        
//     // return true;
// }


function back(backForm, currentForm) {
    let back_form = document.getElementById(backForm).classList.remove('form-1-disable');;
    let current_Form = document.getElementById(currentForm).classList.add('form_enable')
}

function validation(currentForm, nextForm, nextTab){


    if (currentForm === 'form-1') {
        let tname=document.getElementById("name").value
        if (!tname.length){
            document.getElementById('efname').innerHTML="please enter your name"
         return false;
        }
        console.log('t',tname)
        document.getElementById('efname').innerHTML=""
        localStorage.setItem("tname",tname)
    
        
        let tphone=document.getElementById("phone").value
        if (!tphone.length){
            document.getElementById('ephone').innerHTML="please enter your phone number"
         return false;
    
        }
        console.log('t',tphone)
    
        localStorage.setItem("tphone",tphone)

    } else if (currentForm === 'form-2') {


        let tcname=document.getElementById("cname").value
        if (!tcname.length){
            document.getElementById('ecname').innerHTML="please enter your company name"
         return false;
    
        }
        console.log('t',tcname)
    
        localStorage.setItem("tcname",tcname)
    
        let temail=document.getElementById("email").value
        if (!temail.length){
            document.getElementById('eemail').innerHTML="please enter your email"
         return false;
    
        }
        console.log('t',temail)
    
        localStorage.setItem("temail",temail)
    
        let tjob=document.getElementById("job").value
        if (!tjob.length){
            document.getElementById('ejob').innerHTML="please enter your job"
         return false;
    
        }
        console.log('t',tjob)
    
        localStorage.setItem("tjob",tjob)
    
        let tyear=document.getElementById("year").value
        if (!tyear.length){
            document.getElementById('eyear').innerHTML="please enter your experience"
         return false;
    
        }
        console.log('t',tyear)
    
        localStorage.setItem("tyear",tyear)
    
        
    }
    
    
            
    let form_1 = document.getElementById(currentForm);
    console.log('form_1', form_1.classList)
    form_1.classList.forEach(x => { if (x === 'form_enable') { form_1.classList.remove('form_enable'); form_1.classList.add('form-1-disable')} else { form_1.classList.add('form-1-disable')} })
    form_1.classList.add('form-1-disable')


    let company_details_tab = document.getElementById(nextTab);
    company_details_tab.classList.add('active');


    let form_2  = document.getElementById(nextForm);
    form_2.classList.remove('form-1-disable')
        
    return true;
    
    }
    

    
