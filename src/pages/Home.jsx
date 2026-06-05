import { Alert } from "../components/Alert";
import { Card } from "../components/Card";
import { Spinner } from "../components/Spinner";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useFetch } from "../hooks/useFetch";
function Home() {
  const { loading, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&delay=10000",
  );
  useDocumentTitle("Mon blog");

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert type="danger">{error.toString()}</Alert>;
  }

  return (
    <>
      <h1 className="mb-3 text-3xl font-bold">Mon blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((post) => (
          <Card
            key={post.id}
            image={`https://picsum.photos/id/${post.id}/280/180`}
            title={post.title}
            description={post.body}
            href={`#post:${post.id}`}
            buttonLabel="Read more"
          />
        ))}
      </div>
      
    </>
  );
}

export default Home;
