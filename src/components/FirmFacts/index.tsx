import styles from './FirmFacts.module.scss';
import Button from "../Button";
import FirmFactCard from "../FirmFactCard";
import { ReactComponent as Close } from "../../assets/Close.svg"


const FirmFacts = () => { 
  const ButtonsTexts: Array<{text:string, cardVariant: "default"|"border", buttonVariant: "default"|"icon", isDisabled: boolean}> = [
    {
      text: "This is a two line button that terminates with three dots because its very long",
      cardVariant: "default",
      buttonVariant: "icon",
      isDisabled: false
    },
    {
      text: "This is a two line button that terminates with three dots because its very long",
      cardVariant: "default",
      buttonVariant: "icon",
      isDisabled: false
    },
    {
      text: "This is a one line button",
      cardVariant: "default",
      buttonVariant: "default",
      isDisabled: false
    },
    {
      text: "This is a two line button that terminates with three dots because its very long",
      cardVariant: "default",
      buttonVariant: "icon",
      isDisabled: false
    },
    {
      text: "This is a two line button that terminates with three dots because its very long",
      cardVariant: "border",
      buttonVariant: "icon",
      isDisabled: false
    },
    {
      text: "This is a two line button that terminates with three dots because its very long",
      cardVariant: "border",
      buttonVariant: "icon",
      isDisabled: true
    },
    {
      text: "This is a two line button that terminates with three dots because its very long",
      cardVariant: "border",
      buttonVariant: "icon",
      isDisabled: false
    }
  ]
  return(
    <div className={styles.firmFactsWrapper}>
      <div className={styles.firmFactsButtons}>
        <button className={styles.close}><Close/></button>
      </div>
      <h1 className={styles.title}>Firm Facts</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.mainCard}>
          <FirmFactCard variant={ButtonsTexts[0].cardVariant}>
            <Button variant={ButtonsTexts[0].buttonVariant} disabled={ButtonsTexts[0].isDisabled}>
              {ButtonsTexts[0].text}
            </Button>
          </FirmFactCard>
        </div>
        <div className={styles.firstRow}>
          {[1,2,3].map((item)=>
            <FirmFactCard variant={ButtonsTexts[item].cardVariant}>
            <Button variant={ButtonsTexts[item].buttonVariant} disabled={ButtonsTexts[item].isDisabled}>
              {ButtonsTexts[item].text}
              </Button>
            </FirmFactCard>
          )}
        </div>
        <div className={styles.secondRow}>
          {[4,5,6].map((item)=>
            <FirmFactCard variant={ButtonsTexts[item].cardVariant}>
            <Button variant={ButtonsTexts[item].buttonVariant} disabled={ButtonsTexts[item].isDisabled}>
              {ButtonsTexts[item].text}
              </Button>
            </FirmFactCard>
          )}
        </div>
      </div>
    </div>
  )
}

export default FirmFacts;
