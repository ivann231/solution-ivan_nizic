interface LoaderProps {
  label?: string;
}

export const Loader = ({ label = 'Loading...' }: LoaderProps) => {
  return <div style={{ padding: '1rem', textAlign: 'center' }}>{label}</div>;
};
