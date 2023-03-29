import React from "react";
import { styles } from "./ImageStyles";

interface props {
  icon: string;
  alt: string;
}

export default function Image({ icon, alt }: props) {
  return <img src={icon} alt={alt} style={styles.image} />;
}
