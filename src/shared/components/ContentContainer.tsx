// Types
import { PageProps } from "../types";

const ContentContainer = ({ injectedStyles, children }: PageProps) => {
  return (
    <div
      className={`border-2 border-gray-100 rounded-xl p-2 ${injectedStyles}`}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
