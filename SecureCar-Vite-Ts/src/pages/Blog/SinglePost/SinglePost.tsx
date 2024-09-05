import {PostProps } from "../Post/Post";
import TagPost from "../Post/TagPost/TagPost";
import DOMPurify from "dompurify";
import { useNavigate, useParams } from 'react-router-dom';
import { ListaPostsBlog } from "../PostLista/lista_posts_blog";
import styles from "./SinglePost.module.css"
//:id
export type SinglePost = {
  descricao: string;
  conteudo: string;
} & PostProps;
const SinglePost = () => {
  const { idPost: postId } = useParams<{ idPost: string }>();
  const post = ListaPostsBlog.find((p: PostProps) => p.idPost.toString() === postId);

  const navigate = useNavigate()
  navigate('')
  if (!post) {
    return <div>Post not found</div>;
  }
  const sanitizedContent = DOMPurify.sanitize(post.conteudo);
  return (
    <div className="max-w-screen-lg flex flex-col gap-5 m-auto py-5" style={styles}>
      <img
        className="w-full object-cover max-h-[500px] rounded object-top"
        src={post.imagem}
        alt={post.descImagem}
      />
      <TagPost tagPost={post.tagPost} />
      <h1 className="text-4xl font-bold">{post.titulo}</h1>
      <h4 className="text-lg font-light">{post.descricao}</h4>
      <div className="flex gap-3 justify-start items-center">
        <img className="h-10 w-10 object-cover rounded-full" src={post.autorImagem} alt={post.autor} />
        <p className="text-sm font-semibold text-gray-500">{post.autor}</p>
        <p className="text-sm font-semibold text-gray-500">{post.dataCriacao}</p>
      </div>
      <div className="text-black text-lg leading-snug gap-4 blog-content" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </div>
  );
};

export default SinglePost;
