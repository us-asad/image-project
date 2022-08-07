import Swal from "sweetalert2";

export const languages = ["ru", "uz", "en"];

export const nav_items = ["/#products", "/about", "/#about", "/#contact"];

export const sendMessage = async message => {
  const res = await fetch(`https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/sendMessage?chat_id=${process.env.REACT_APP_CHANNEL_ID}&text=${message}`)
  const data = await res.json();

  return data?.ok;
}

export const submitMessage = async (e, setLoading) => {
  e.preventDefault();
  setLoading(true);

  const message = `Yangi Xabar!😊%0A👤Ismi: ${e.target.children.name.value}%0A☎Raqam: ${e.target.children.phone_number.value}%0A`;
  const ok = await sendMessage(message);

  if (ok) {
    e.target.children.name.value = ""
    e.target.children.phone_number.value = ""

    Swal.fire(
      "Ajoyib!",
      "Xabaringiz Muvafaqiyatli yuborildi",
      "success"
    );
  } else {
    Swal.fire(
      "Kechirasiz!",
      "Xatolik yuz berdi, Iltimos keyinroq qaytadan urinib ko'ring.",
      "error"
    );
  }

  setLoading(false);
}
