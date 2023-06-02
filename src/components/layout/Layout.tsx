import { ReactNode } from 'react';

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="container mx-auto h-full p-4">
      <div className="grid h-full w-full grid-cols-1 md:grid-cols-3">
        {children}
      </div>
    </div>
  );
};

export default Layout;
