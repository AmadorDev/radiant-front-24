
import styles from "./Loading.module.scss";
function LoadingScreen({loading}) {
    return (
      <div className={loading ? styles.body_loading : styles.none}>
        <div
          className={styles.lds_ellipsis}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  
  export default LoadingScreen;