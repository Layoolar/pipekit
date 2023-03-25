import React from "react";
import { ImageStyles } from "../../styles/components/ImageStyles";

interface props {
  icon: string;
  alt: string;
}

export default function Image({ icon, alt }: props) {
  return <img src={icon} alt={alt} style={ImageStyles.image} />;
}