var navstatus = 0
function openNav(){
    if(!navstatus){
        $('.main').css('width','100%')
        $('li').css('display','block')
        // $('.main').css('height','100vh')
        navstatus = 1
    }
    else{
        $('.main').css('width','0px')
        $('li').css('display','none')
        // $('.main').css('height','40px')
        navstatus = 0
    }
}
