import { Alert } from "../components/Alert";
import { Spinner } from "../components/Spinner";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useFetch } from "../hooks/useFetch";
import { useToggle } from "../hooks/useToggle";

function Single({ postId }) {
  const {
    loading,
    data: post,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  useDocumentTitle(`Article - ${post?.title}`);
  const [isEditing, toggleEditing] = useToggle(false);
  
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert type="danger">{error.toString()}</Alert>;
  }

  return (
    <div className="flex flex-col items-start">
      <h1 className="mb-3 text-3xl font-bold">{post?.title}</h1>
      <img
        src={`https://picsum.photos/id/${post.id}/800/600`}
        alt=""
        className="my-3 rounded-xl"
      />
      <p className='mb-5'> {post?.body}</p>
      {isEditing && <Modal> Edition de l'article </Modal>}
      <Button variant="warning" onClick={toggleEditing}>
        Editer l'article
      </Button>
      <p className="mt-5 flex flex-row gap-2">
        
        {post.id > 1 && (
          <a
            href={`#post:${post.id - 1}`}
            className="bg-neutral-500 hover:bg-neutral-400 text-white font-bold py-2 px-4 rounded"
          >
            Article précédent
          </a>
        )}
        <a
          href={`#post:${post.id + 1}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Article suivant
        </a>

        
      </p>
    </div>
  );
}

export default Single;
