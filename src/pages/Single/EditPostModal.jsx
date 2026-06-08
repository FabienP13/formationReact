import { useState } from "react";
import { Button } from "../../components/Button";
import Input from "../../components/Input";
import { Modal } from "../../components/Modal";
import { Alert } from "../../components/Alert";

export function EditPostModal({ post, onClose, onSave }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    const data = new FormData(event.target);
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "PUT",
      body: data,
    })
      .then((response) => response.json())
      .then((response) => {
        onSave(Object.fromEntries(data.entries()));
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Modal title={post.title} onClose={onClose}>
      {error && <Alert type="danger">{error.toString()}</Alert>}
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-full"
      >
        <Input name="title" label="Titre" defaultValue={post.title} />
        <Input
          name="body"
          label="Contenu"
          type="textarea"
          defaultValue={post.body}
        />
        <div className="flex flex-row gap-2 justify-center mt-4">
          <Button
            disabled={loading}
            type="button"
            variant="danger"
            onClick={onClose}
          >
            Annuler
          </Button>
          <Button disabled={loading} variant="warning" type="submit">
            Sauvegarder
          </Button>
        </div>
      </form>
    </Modal>
  );
}
