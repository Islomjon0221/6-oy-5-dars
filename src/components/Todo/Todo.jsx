import { useEffect, useState } from "react";
import styles from "./todo.module.css";

export default function Todo() {
  
  let [data, setData] = useState([]) ;
  function todo() {
    setData(localStorage.getItem(JSON.parse("user")))
 }

 useEffect(() => {
  todo;
 })

  return (
    <div className={styles.form}>
      <form>
      <div className={styles.des}>
      <input type="checkbox"/>
      <h4>{data}</h4>
      </div>
      <div className={styles.actions}>
        <h5>Delete</h5>
        <h5>Update</h5>
      </div>
    </form>
    <form>
      <div className={styles.des}>
      <input type="checkbox"/>
      <h4>Walk</h4>
      </div>
      <div className={styles.actions}>
        <h5>Delete</h5>
        <h5>Update</h5>
      </div>
    </form>
    <form>
      <div className={styles.des}>
      <input type="checkbox"/>
      <h4>Walk</h4>
      </div>
      <div className={styles.actions}>
        <h5>Delete</h5>
        <h5>Update</h5>
      </div>
    </form>
    <form>
      <div className={styles.des}>
      <input type="checkbox"/>
      <h4>Walk</h4>
      </div>
      <div className={styles.actions}>
        <h5>Delete</h5>
        <h5>Update</h5>
      </div>
    </form>
    </div>
  )
}
