import mongoose, { Schema } from 'mongoose';
import { ICar } from './car.interface';

const carSchema = new Schema<ICar>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      enum: ['Black', 'White', 'Silver', 'Blue'],
      required: true,
    },
    isElectric: {
      type: Boolean,
      required: true,
    },
    status: {
      type: String,
      enum: ['available', 'unavailable'],
      default: 'available',
    },
    features: {
      type: [String],
      enum: [
        'Bluetooth',
        'Air Conditioning (AC)',
        'Sunroof',
        'Navigation System',
        'Heated Seats',
      ],
      required: true,
    },
    pricePerHour: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);


const CarModel = mongoose.model<ICar>('Car', carSchema);

export default CarModel;
