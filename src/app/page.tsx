import styles from './page.module.scss';
import TestSVG from '../../public/leftArrow.svg';
import Button from '@/stories/button/Button';
import Info from '@/stories/info/Info';

const size = 'large';

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.text}>MAIN</p>
      <Info text="Easd" title="he" />
    </main>
  );
}
