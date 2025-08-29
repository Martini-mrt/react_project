import { ReactNode } from 'react';

export interface PortalProps {
  children: ReactNode;
  container?: HTMLElement;
  className?: string;
  id?: string;
}
