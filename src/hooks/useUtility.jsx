import { useState } from "react";

const useUtility = () => {
  const [isTruncated, setIsTruncated] = useState(true);
  const handleTrucate = () => {
    setIsTruncated(!isTruncated);
  };
  return { isTruncated, setIsTruncated, handleTrucate };
};

export default useUtility;
