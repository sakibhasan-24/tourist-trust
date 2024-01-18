import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  return <div className="max-w-6xl mx-auto"></div>;
}
