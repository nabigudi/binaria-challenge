import styles from './Button.module.scss';
import { ReactComponent as Search } from "../../assets/Search.svg"

interface ButtonProps {
  variant?: 'default'| 'icon';
  disabled?: boolean;
  children: React.ReactNode
}

const Button = ({variant = 'default', disabled = false, children} : ButtonProps) => { 
  if (!children) return null;

  return(
    <div className={`${styles.button} ${disabled ? styles.buttonContainerDisabled : styles.buttonContainer} `}>
      {variant === 'icon' && <Search className={styles.icon} height="40px" width="40px"/>}
      <span className={styles.buttonText}>{children}</span>
    </div>
  )
}

export default Button;
