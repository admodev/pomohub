import { PageProps } from "../types";

const Column = ({ children }: PageProps) => (
  <div className="flex flex-col">{children}</div>
);

export default Column;
