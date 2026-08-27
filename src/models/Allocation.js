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
  parkingLot: {
    type: String,
    required: [true, 'Please select a parking lot.'],
    enum: ['lot1', 'lot2', 'lot3'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Allocation || mongoose.model('Allocation', AllocationSchema);
