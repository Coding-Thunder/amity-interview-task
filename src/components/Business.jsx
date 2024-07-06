import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Explore the essence of genetic discovery., <br className="sm:block hidden" /> Uncover the purity of Lancet genome sequences.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Pure knowledge you can trust, insight by insight. Immerse yourself in the precision of Lancet where every data point is a testament to our commitment to excellence and accuracy.      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`relative ${layout.sectionImg} flex-col`}>
      <img className="hidden md:block top-0 left-10 absolute w-[500px]   bg-contain"
        src="https://www.thelancet.com/pb-assets/Lancet/homepage/latest_news/latest-news-240703-3-1720021973923.jpg"
        alt="" />
      <img className="hidden md:block top-20 -right-20 absolute w-[500px]   bg-contain"
        src="https://www.thelancet.com/pb-assets/Lancet/homepage/latest_news/latest-news-240703-2-1720088371013.jpg"
        alt="" />
      <img className="hidden md:block bottom-0  left-0 absolute w-[500px]   bg-contain"
        src="https://www.thelancet.com/pb-assets/Lancet/homepage/latest_news/EDI-1686576262277.jpg"
        alt="" />
    </div>
  </section>
);

export default Business;
