let wrapper = document.querySelector(".wrapper");
let qrInput = document.querySelector(".form input");
let qrSubmit = document.querySelector(".form button");
let qrImg = document.querySelector(".qr-code img");
const addQrCodeHandler = () => {
  qrSubmit.innerHTML = `<i class="fa fa-spinner fa-spin" style="font-size: 24px"></i> Loading...`;
  let qrText = qrInput.value.trim();
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrText}`;
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    qrSubmit.innerHTML = "Generate QR Code";
  });
};

const checkValueHandler = () => {};
qrSubmit.addEventListener("click", addQrCodeHandler);

qrInput.addEventListener("keyup", () => {
  if (qrInput.value.trim().length == 0) {
    wrapper.classList.remove("active");
  }
});
