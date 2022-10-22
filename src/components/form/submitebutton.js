import styles from "./submitebutton.module.css"

function Submitebutton ({ text }) {

    return (
        <div>
            <button className={styles.btn}>{text}</button>     
        </div>
    )
}

export { Submitebutton }