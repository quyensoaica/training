export interface ISliderProps {
  children: React.ReactNode;
  showItem: number | ISliderShowItem;
  size: number;
}
export interface ISliderRef {
  handleChangePosition: (value: number) => void;
}
export interface ISliderShowItem {
  default: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}
