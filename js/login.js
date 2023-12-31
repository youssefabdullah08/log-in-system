var emailL=document.getElementById('emailL');
var passL=document.getElementById('passL')

document.getElementById('btnL').addEventListener("click",login)

function login() {
    if (localStorage.getItem("accs")!=null) {
        JSON.parse(localStorage.getItem("accs"))
        for(vari=0;i<accs.length;i++){
            if (accs[i].e==emailL.value&&accs[i].p==passL.value) {
                location="./home.html"
                document.getElementById('sayHello').innerHTML=accs[i].n
            }
            else{
                document.getElementById('alertL').innerHTML=("filed to login acc dosn't exist")
                document.getElementById('alertL').classList.add("text-danger")
            }
        }
    }
}

document.getElementById('logOut').addEventListener("click",logout)



function logout() {
    location="./index.html"
}