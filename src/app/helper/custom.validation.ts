import { FormGroup}from '@angular/forms';

export function checkRePass(){
   return function(xyz : FormGroup){
    let a = xyz.controls['password'];
    let b = xyz.controls['re_password'];

    if(a.value != b.value)
    {
        b.setErrors({ rePassErr : true })
    }

   }
}

export function conNum(){
    return function(abc : FormGroup){
        let a = abc.controls['contact'];

        if(isNaN(a.value)){
            a.setErrors({ numErr : true})
        }
    }
}

export function lengthCheck(){
    return function(abc : FormGroup){
        let a = abc.controls['contact']

        if(a.errors && !a.errors ['lengthErr']){
        return;
        }
        
        if(a.value.length != 10){
            a.setErrors({lengthErr : true })
        }
    }

}

export function nameCheck(){
    return function(abc : FormGroup){
        let a = abc.controls['name']

        if(a.errors && !a.errors['nameErr']){
            return;
        }

        let reg =/^[a-z A-Z]+$/;
        if(reg.test(a.value)== false)
        a.setErrors({nameErr : true})

        // if(isNaN(a.value) == false){
        // a.setErrors({nameErr : true})   
        // }
    }
}

export function nameUpper(){
    return function(abc : FormGroup){
        let a = abc.controls['name']

        if(a.errors && !a.errors['uppErr']){
            return;
        }

        // let reg =  /[A-Z][a-z]* [A-Z][a-z]*( [A-Z])?/
        // if(reg.test(a.value)==false)
        // a.setErrors({uppErr : true})

        let b = a.value.split('');
        //console.log(b);

        if(b[0] != b[0].toUpperCase())
        a.setErrors({uppErr : true})
    }
}

// export function strPass(){
//     return function(abc : FormGroup){
//         let a = abc.controls['password']
//         if(a.errors && !a.errors['passErr']){
//             return;
//         }

//         let reg =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
//         if(reg.test(a.value)== false)
//         a.setErrors({passErr : true})
//     }
// }