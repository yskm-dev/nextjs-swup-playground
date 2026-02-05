import Image from 'next/image';
import styles from './Gallery.module.scss';

export function Gallery({ path = 'gallery' }: { path?: string }) {
  return (
    <div className={styles.grid}>
      <div
        data-column-start="1"
        data-column-end="7"
        data-row-start="1"
        className={styles.card}
      >
        <Image
          src={`/images/${path}/image1.jpg`}
          alt="Gallery Image 1"
          width={678}
          height={678}
        />
      </div>
      <div
        data-column-start="9"
        data-column-end="13"
        data-row-start="2"
        className={styles.card}
      >
        <Image
          src={`/images/${path}/image2.jpg`}
          alt="Gallery Image 2"
          width={678}
          height={678}
        />
      </div>
      <div
        data-column-start="4"
        data-column-end="10"
        data-row-start="3"
        className={styles.card}
      >
        <Image
          src={`/images/${path}/image3.jpg`}
          alt="Gallery Image 3"
          width={678}
          height={678}
        />
      </div>
      <div
        data-column-start="1"
        data-column-end="5"
        data-row-start="4"
        className={styles.card}
      >
        <Image
          src={`/images/${path}/image4.jpg`}
          alt="Gallery Image 4"
          width={1200}
          height={1200}
        />
      </div>
      <div
        data-column-start="8"
        data-column-end="13"
        data-row-start="5"
        className={styles.card}
      >
        <Image
          src={`/images/${path}/image5.jpg`}
          alt="Gallery Image 5"
          width={1200}
          height={1200}
        />
      </div>
    </div>
  );
}
