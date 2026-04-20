

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("#booking-form");
  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const passengers = document.querySelector("#passengers");
  const vehicleType = document.querySelector("#vehicle-type");
  const dateAndTime = document.querySelector("#datetime");
  const pickUp = document.querySelector("#pickup-location");
  const dropOff = document.querySelector("#dropoff-location");
  const payMeth = document.querySelector("#payment-method");
  const message = document.querySelector("#message");

  function sendEmail() {
    const bodyMessage = `
      First Name: ${firstName.value}<br>
      Last Name: ${lastName.value}<br>
      Email: ${email.value}<br>
      Phone: ${phone.value}<br>
      Number of Passengers: ${passengers.value}<br>
      Vehicle Type: ${vehicleType.value}<br>
      Date and Time: ${dateAndTime.value}<br>
      Pick Up: ${pickUp.value}<br>
      Drop Off: ${dropOff.value}<br>
      Payment Method: ${payMeth.value}<br>
      Message: ${message.value}<br>
    `;

    console.log("Sending email with the following details:");
    console.log(bodyMessage);

  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
  });
});
