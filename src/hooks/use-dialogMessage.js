import { useState } from "react";

function useDialogMessage(initialTitle = "", initialMessage = "") {
  const [dialogMessage, setDialogMessage] = useState({
    title: initialTitle,
    message: initialMessage,
  });

  return [dialogMessage, setDialogMessage];
}

export default useDialogMessage;
