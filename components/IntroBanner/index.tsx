import Image from 'next/image';
import styles from './styles.module.scss';

const IntroBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={`container ${styles["banner__container"]}`}>
        <div className={styles["banner__holder"]}>
          <h1 className={styles["banner__title"]}>
            Hi! I&apos;m Tiago!
          </h1>
          <p className={styles["banner__subtitle"]}>
            I enjoy creating websites that inspire creativity and
            I strive to make the web accessible to everyone.
          </p>
        </div>
        <div className={styles["banner__image-holder"]}>
          <Image
            src="/images/mirage-pale.png"
            alt="Illustration of an astronaut in space attached to a rocket with a cable"
            fill
            priority
            className={styles["banner__image"]}
            style={{
              animation: "float 6s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default IntroBanner
