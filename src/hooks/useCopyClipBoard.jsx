import { useState } from 'react';



export default function useCopyClipBoard() {
  const [isCopy, setIsCopy] = useState(false);

  const onCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);
      alert("링크가 복사되었습니다.")
      return true;
    } catch (error) {
      console.error(error);
      setIsCopy(false);

      return false;
    }
  };

  return [isCopy, onCopy];
}
