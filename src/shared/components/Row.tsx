import { PageProps } from "../types";

const Row = ({ children }: PageProps) => (
  <div className="flex flex-row">{children}</div>
);

export default Row;
