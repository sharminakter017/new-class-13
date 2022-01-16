

function validate(msg,type = 'danger'){
    return `<p class = "alert alert-${type}">${msg} </p>`
};




// =================== counter with loader =======================


function dynamicloader(start_val,current_val){
    return current_val*100/start_val ;
}





// <==================== subject marks add===================>






function submarks(name,marks){

    

  return `<p class = "alert alert-success">Hii ${name} your marks is ${marks} </p> `



};



function allmarks(point){

    if(point <= 0 && point > 33){
        return {
            resultadd : 'apni to fail koresen',
            status : 'warning'
        };
    }else if(point <= 33 && point > 40){
        return {
            resultadd : 'apni D grade peyesen',
            status : 'primary'

        }; 
    }else if(point <= 40 && point > 50){
        return {
            resultadd : 'apni C grade peyesen',
            status : 'danger'

        };
    }else if(point <= 50 && point > 60){
        return {
            resultadd : 'apni C grade peyesen',
            status : 'info'

        };
    }else if(point <= 60 && point > 70){
        return {
            resultadd : 'apni A- grade peyesen',
            status : 'primary'

        };
    }else if(point <= 70 && point > 80){
        return {
            resultadd : 'apni A grade peyesen',
            status : 'success'

        };
    }else if(point <= 80 && point > 100){
        return {
            resultadd : 'apni A+ grade peyesen',
            status : 'success'

        };
    }










};


