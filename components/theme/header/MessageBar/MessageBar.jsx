import styles from '../src/css/message-bar.module.scss'

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function MessageBar() {
    return (
        <div className={styles.bar_top}>
            <p className={styles.title} >Teste de Integração da API - CEO</p>
        </div>
    );

}