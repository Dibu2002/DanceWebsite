function male1(){
    var male=document.getElementsByClassName('male');
    console.log(male[0]);
    var female=document.getElementsByClassName('fem');
    male[0].style.backgroundColor='rgb(82, 182, 48)';
    female[0].style.backgroundColor='white';
}
function female1(){
    var male=document.getElementsByClassName('male');
    var female=document.getElementsByClassName('fem');
    female[0].style.backgroundColor='rgb(82, 182, 48)';
    male[0].style.backgroundColor='white';
}
// function bg(){
//     var card=document.getElementById('cardtype');
//     console.log(card);
//     card.style.backgroundColor='rgb(82, 182, 48)';
    
// }
// function displayGender(){
//     var ele= document.getElementsByName("gender");
//     console.log(ele);
    // for(i=0;i<ele.length;i++){
    //     if(ele[i].checked)
    //     document.get
    // }
// }
