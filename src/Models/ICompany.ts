import React from "react";

export interface ICompany {
  nameCompany: string;
  address: string;
  email: string;
  phone: string;
  id?: number;
  onClick?: any;
  selected?: boolean;
  style?: React.CSSProperties;
  onContextMenu?: (event: React.MouseEvent) => void
}