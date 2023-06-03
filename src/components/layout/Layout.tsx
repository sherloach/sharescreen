import { ReactNode } from 'react';

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="h-full w-full max-w-[1024px] p-5 md:max-h-[900px]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
