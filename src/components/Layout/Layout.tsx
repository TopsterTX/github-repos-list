import { LayoutProps } from './Layout.types';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="max-w-6xl m-auto p-4 flex flex-col h-svh gap-5">
      {children}
    </main>
  );
};
