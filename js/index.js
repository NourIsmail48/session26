/* new WOW({
    animateClass: 'animate__animated'
}).init(); */
function myfun(){
    /* Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    }); */
    Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "error"
});
}
/* Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
}).fire({
  icon: "success",
  title: "Signed in successfully"
}); */
Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
    toast.onclick = function(){
        console.log("ok");
    };
  }
}).fire({
  icon: "error",
  title: "Signed in successfully"
});