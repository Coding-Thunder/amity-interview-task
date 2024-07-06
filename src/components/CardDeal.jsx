import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>

        Advancing Together, <br className="sm:block hidden" /> Embracing Efficiency.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our institute is evolving with you, now embracing advanced research methodologies as we expand. Your collaboration is our priority as we progress together      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
