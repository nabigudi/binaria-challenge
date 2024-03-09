import styles from './FirmFactCard.module.scss';
interface FirmFactCardProps {
  variant?: 'default' | 'border',
  children: React.ReactNode
}

const FirmFactCard = ({variant = 'default', children} : FirmFactCardProps) => { 
  if (!children) return null;
  return(
    <div className={`${styles.FirmFactCardWrapper} ${variant === 'default' ? styles.FirmFactCardDefault : styles.FirmFactCardBorder}`}>
      {children}
    </div>
  )
}

export default FirmFactCard;
