import { useSearchParams } from "react-router-dom";
import { BackButton } from "./Button";

interface EmptyStateProps {
  message?: string;
}

export const EmptyState = ({ message = 'No items found.' }: EmptyStateProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <BackButton onClick={() => setSearchParams(() => {
        const params = searchParams;
        params.set("q", "");
        params.set("category", "");
        params.set("page", "1");

        return params;
      })}>
        ← Back to products
      </BackButton>
      <div style={{ padding: '1rem', textAlign: 'center' }}>{message}</div>
    </>
  )
};
