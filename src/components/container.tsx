import { PropsWithChildren, type FC } from 'react';

import { cn } from '@/lib/cn';

interface Props {
  className?: string;
}
export const Container: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('mx-auto max-w-[1728px]', className)}>
      {children}
    </div>
  );
};