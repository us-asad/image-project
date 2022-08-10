import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

export function useSendMessageToTg() {
  const { t } = useTranslation();

  return async message => {
    const res = await fetch(`https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/sendMessage?chat_id=${process.env.REACT_APP_CHANNEL_ID}&text=${message}`)
    const data = await res.json();

    if (data.ok) {
      Swal.fire(
        t("success_title"),
        t("success_text"),
        "success"
      );
    } else {
      Swal.fire(
        t("error_title"),
        t("error_text"),
        "error"
      );
    }

    return data?.ok;
  }
}
