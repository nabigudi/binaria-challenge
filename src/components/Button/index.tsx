import styles from './Button.module.scss';
import { ReactComponent as Search } from "../../assets/Search.svg"

interface ButtonProps {
  variant?: 'default'| 'icon';
  disabled?: boolean;
  children: React.ReactNode,
  isHovered: boolean;
}

const Button = ({variant = 'default', disabled = false, isHovered = false, children} : ButtonProps) => { 
  if (!children) return null;

  return(
    <div className={`${styles.button} ${variant === 'default' && styles.defaultButton} ${disabled ? styles.buttonContainerDisabled : styles.buttonContainer} ${!disabled && isHovered && styles.buttonHover}`}>
      {variant === 'icon' && <Search className={styles.icon} />}
      <span className={`${variant === 'default' ? styles.buttonText : styles.buttonIconText}`}>{children}</span>
    </div>
  )
}

export default Button;
