import { useEffect, useState } from "react";

function useDialogTimeout(initialOpen = false, timeoutTime = 3500) {
  const [isDialogOpen, setIsDialogOpen] = useState(initialOpen);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDialogOpen) {
        setIsDialogOpen(false);
      }
    }, timeoutTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [isDialogOpen, timeoutTime, setIsDialogOpen]);

  return [isDialogOpen, setIsDialogOpen];
}

export default useDialogTimeout;
