

var guestInvited = prompt("invitation password");

switch(true) {
    case (guestInvited == "dallywhite"):
    alert ("welcome,input your no");
      let inputCode = prompt("put in your code");
      inputCode = ((inputCode == 1002) ? alert("you are invited") : alert("you are not invited"));
    break;
    case(guestInvited < 20 ):
    alert("you failed the question");
    break;
    default:
    alert ("why are you here");
    break;
}
