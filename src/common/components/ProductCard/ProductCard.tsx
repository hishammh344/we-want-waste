import Image from "next/image";
import React from "react";
import Icon from "../Icon";
import {
  faArrowRight,
  faCheck,
  faRoad,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { Skip } from "@/types";
import { styles } from "./styles";

type Props = {
  skip: Skip;
};

const ProductCard = ({ skip }: Props) => {
  return (
    <div className={styles.porductContainer}>
      <div className={styles.product}>
        <Image
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
          alt="picture"
          loading="lazy"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className={styles.indicators}>
          {skip.allowed_on_road && (
            <Icon icon={faRoad} className={styles.indicator} />
          )}
          {skip.allows_heavy_waste && (
            <Icon icon={faTruck} className={styles.indicator} />
          )}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <h4 className="font-bold font-title-lg">{skip.size} Yard Skip</h4>
        <p className="font-bold mb-0 text-2xl text-gray-600">
          $ {skip.price_before_vat ?? 0.0 + skip.vat! ?? 0.0}
        </p>
      </div>
      <p>
        {skip.hire_period_days}{" "}
        {`${skip.hire_period_days > 1 ? "days" : "day"} hire period`}
      </p>
      <div className="flex gap-2 mt-2">
        {skip.allowed_on_road && (
          <div className="text-white bg-gray-500 rounded-full p-1 px-3">
            <span className="mr-1 text-sm">Allowed On Road</span>
            <Icon icon={faCheck} className="fill-white" />
          </div>
        )}
        {skip.allows_heavy_waste && (
          <div className="text-white bg-gray-500 rounded-full p-1 px-3">
            <span className="mr-1 text-sm">Heavy Waste</span>
            <Icon icon={faCheck} className="fill-white" />
          </div>
        )}
      </div>
      <button className={styles.button}>
        <span>Select This Skip</span>
        <Icon icon={faArrowRight} className="fill-white ml-2" />
      </button>
    </div>
  );
};

export default ProductCard;
