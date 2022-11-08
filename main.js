// Sending Data
const send = ()=> {
  var userMessage = $("#userMessage").value;
  var Link = 'https://wa.me/'+$("#code").value+$("#whNumber").value+'%2F?text='+encodeURI(userMessage);
 // window.location.href = Link;
console.log(Link);
  $('#whNumber').value = "";
  $('#userMessage').value = "";
}

// For making +91 as default
$("#whNumber").addEventListener("keyup", (event)=> {
  if (event.keyCode === 13) {
    event.preventDefault();
    $("#link").click();
  }
});

// Maintain Text Area Height
$('#userMessage').on('input', ()=>{
  this.style.height = 'auto';
  this.style.height =(this.scrollHeight) + 'px';
});