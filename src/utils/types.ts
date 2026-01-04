import { ReactNode } from 'react';

export type ChildrenFC<T = unknown> = React.FC<T & { children: ReactNode }>;

export type AppLocalePageProps = {
  params: Promise<{ locale: string }>;
};
