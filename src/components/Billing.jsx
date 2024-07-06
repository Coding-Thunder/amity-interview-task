import { layout } from "../style";
import Card from "./Card";
import { SiAzureartifacts } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";


const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Card icon={SiAzureartifacts} title={"Mwanga et al."} text={"Prevalence of all epilepsies in urban informal settlements in Nairobi, Kenya: a two-stage population-based study"} />
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <Card icon={LuBrainCircuit} text={"Impact of a point-of-care urine tenofovir assay on adherence to HIV pre-exposure prophylaxis among women in Kenya: a randomised pilot trial"} title={"Gandhi et al."} />
    </div>
  </section>
);

export default Billing;
