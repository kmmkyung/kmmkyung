import styles from './NotFound.module.scss';

export default function NotFound(){
  return (
    <section className={styles.notFound}>
      <div className={styles.inner}>
        <p>Page Not Found</p>
        <p>잘못된 접근입니다!</p>
      </div>
    </section>
  )
}