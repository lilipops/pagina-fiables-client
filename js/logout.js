let sescoockie = sessionStorage.getItem( 'sescoockie' )
if(sescoockie) {
  console.log('hola');
  fetch("https://GrowlingMiniatureThings.lilipops.repl.co", {
    method: 'post',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      sescoockie: sescoockie
    })
  })
  .then(function (resp) {
    return resp.json()
  })
  .then( function(data) {
    console.log(data + ' dataa//')
    if(data.status == 'OK') {
        let login = document.getElementById('login')
        login.innerHTML = 'logout'
        login.onclick = function() {
            sessionStorage.setItem('sescoockie', undefined)
            document.cockie = 'login='
            document.cockie = 'remember=false'
        }
    } 
  })
} 
