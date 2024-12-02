import { useContext } from "react";

import { AppDataContext } from "../contexts";

export const useAppData = () => {
  const { scenes } = useContext(AppDataContext);

  return {
    scenes,
  };
};
