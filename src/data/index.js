import Swal from "sweetalert2";

export const languages = ["ru", "uz", "en"];

export const nav_items = ["/#products", "/about", "/#numbers", "/#contact"];

export const getContactMessage = (name, phone_number) => `Yangi Xabar!😊%0A👤Ismi: ${name}%0A☎Raqam: ${phone_number}%0A`;

// export const sendMessage = async message => {
//   const res = await fetch(`https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/sendMessage?chat_id=${process.env.REACT_APP_CHANNEL_ID}&text=${message}`)
//   const data = await res.json();

//   return data?.ok;
// }
