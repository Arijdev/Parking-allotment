import mongoose from 'mongoose';

const AllocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  vehicleType: {
    type: String,
    required: [true, 'Please specify the vehicle type.'],
    enum: ['car', 'motorcycle', 'bicycle'],
  },
  vehicleNumber: {
    type: String,
    required: [true, 'Please provide the vehicle number.'],
    maxlength: [20, 'Vehicle number cannot be more than 20 characters'],
  },
  parkingLot: {
    type: String,
    required: [true, 'Please select a parking lot.'],
    enum: ['lot1', 'lot2', 'lot3'],
  },
  spotNumber: {
    type: Number,
    required: [true, 'Please specify the spot number.'],
  },
  status: {
    type: String,
    enum: ['active', 'checked_out'],
    default: 'active',
  },
  checkoutTime: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Allocation || mongoose.model('Allocation', AllocationSchema);
