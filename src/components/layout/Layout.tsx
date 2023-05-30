import { ReactNode } from 'react';

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="container mx-auto h-full p-4">
      <div className="w-full flex-row">{children}</div>
    </div>
  );
};

export default Layout;
