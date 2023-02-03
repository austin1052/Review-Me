import styles from '../css/DropdownArrow.module.css'

export default function DropdownArrow({ isOptionsOpen }) {

  let leftStyle = `${styles.selectArrow} ${styles.left}`
  let rightStyle = `${styles.selectArrow} ${styles.right}`
  if (isOptionsOpen) {
    leftStyle = leftStyle + ` ${styles.rotate}`
    rightStyle = rightStyle + ` ${styles.rotate}`
  }

  return (
    <>
      <div className={leftStyle}></div>
      <div className={rightStyle}></div>
    </>
  )
}