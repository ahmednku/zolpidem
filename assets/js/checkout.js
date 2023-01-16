const placeOrderBtn = document.getElementById("place-order-btn");
placeOrderBtn.addEventListener("click", placeOrder);
function placeOrder() {
  Swal.fire({
    title: "Do You wish to proceed?",
    showCancelButton: true,
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Your order has been placed!", "", "success");
    }
  });
}
