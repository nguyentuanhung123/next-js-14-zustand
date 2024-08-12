
import Posts from '@/components/posts/posts';
import styles from './page.module.css'
import PostsCount from '@/components/postsCount/postsCount';

export default function Home() {
  return (
    <div className={styles.main}>
      <Posts />
      <PostsCount />
    </div>
  );
}
