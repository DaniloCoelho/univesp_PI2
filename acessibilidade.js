var check = document.getElementById('checkbox')

var check1 = check.value
var control = false
var link = document.getElementById('link1')
function acessibilidade(){
    if(check.checked == true){
        check.checked = false
        link.href="acessibilidade.css"
        
    }
    else{
        check.checked = true
        link.rel="stylesheet"
        link.href="#"
        
        
        
    }
    

}