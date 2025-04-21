import AlertProvider from './alert-provider';

interface ICoreProviderProps {
  children?: React.ReactNode;
}

const CoreProvider = ({ children }: ICoreProviderProps) => {
  return (
    <AlertProvider>
      {children}
    </AlertProvider>
  );
};

export default CoreProvider;
