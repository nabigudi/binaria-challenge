import styles from './FirmFactCard.module.scss';
interface FirmFactCardProps {
  variant?: 'default' | 'border',
  children: React.ReactNode
  disabled?: boolean,
  isHovered: (x: number) => void,
  item: number,
  clear: () => void
}

const FirmFactCard = ({variant = 'default', disabled = false, isHovered, item, clear, children} : FirmFactCardProps) => { 
  if (!children) return null;
  return(
    <div onMouseEnter={()=>isHovered(item)} onMouseLeave ={()=>clear()} className={`${styles.FirmFactCardWrapper} ${!disabled && variant === 'default' && styles.FirmFactCardDefault} ${!disabled && variant === 'border' && styles.FirmFactCardBorder}`}>
      {children}
    </div>
  )
}

export default FirmFactCard;
