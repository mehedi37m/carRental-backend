type carFeatures =
  | 'Bluetooth'
  | 'Air Conditioning (AC)'
  | 'Sunroof'
  | 'Navigation System'
  | 'Heated Seats';

type carColors = 'Black' | 'White' | 'Silver' | 'Blue';

export type ICar = {
  name: string;
  description: string;
  color: carColors;
  isElectric: boolean;
  status: 'available' | 'unavailable';
  features: carFeatures[];
  pricePerHour: string;
  isDeleted: boolean;
};
