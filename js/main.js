
var nameS=document.getElementById('nameS')
var emailS=document.getElementById('emailS')
var passS=document.getElementById('passS')
var arr=[];

if(document.getElementById('btnS')!=null) {
document.getElementById('btnS').addEventListener("click",addacc)
  
}





function addacc() {
    var acc={
      n:nameS.value,
      e:emailS.value,
      p:passS.value
        
    };
if (acc.n==""&&acc.e==""&&acc.p=="") {
  document.getElementById('alert').classList.add('text-danger')
  document.getElementById('alert').innerHTML="all inputs are reqired"
  
}
else{
  document.getElementById('alert').classList.replace('text-danger','text-success')
  document.getElementById('alert').innerHTML="sucses"
  arr.push(acc);
    localStorage.setItem("accs" ,JSON.stringify(arr));
}

}







