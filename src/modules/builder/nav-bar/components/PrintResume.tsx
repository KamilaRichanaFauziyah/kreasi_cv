import { useEffect } from 'react';

import { StyledButton } from '../atoms';

export const PrintResume = () => {
  useEffect(() => {
    globalThis?.addEventListener('beforeprint', () => {
      globalThis.document.title = `Kreasi_CV_${Date.now()}`;
    });

    globalThis?.addEventListener('afterprint', () => {
      globalThis.document.title = 'Kreasi CV : Print';
    });
  }, []);

  return (
    <StyledButton onClick={globalThis?.print} variant="outlined">
      Download PDF
    </StyledButton>
  );
};
