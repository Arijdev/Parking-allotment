import dbConnect from '@/lib/mongodb';
import Allocation from '@/models/Allocation';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // Check if the spot in that lot is already taken (and active)
    const existingAllocation = await Allocation.findOne({ 
      parkingLot: body.parkingLot, 
      spotNumber: body.spotNumber,
      status: 'active'
    });

    if (existingAllocation) {
      return NextResponse.json({ 
        success: false, 
        error: `Spot ${body.spotNumber} in ${body.parkingLot} is already occupied.` 
      }, { status: 400 });
    }

    const allocation = await Allocation.create(body);
    return NextResponse.json({ success: true, data: allocation }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const filter = searchParams.get('filter');

    let query = {};
    if (filter !== 'all') {
      query.status = 'active'; // By default, only get active allocations for the dashboard map
    }

    const allocations = await Allocation.find(query).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: allocations }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      // True permanent deletion for history page
      const result = await Allocation.findByIdAndDelete(id);
      if (!result) return NextResponse.json({ success: false, error: 'Record not found' }, { status: 404 });
      return NextResponse.json({ success: true, data: result }, { status: 200 });
    }

    const parkingLot = searchParams.get('parkingLot');
    const spotNumber = searchParams.get('spotNumber');

    if (!parkingLot || !spotNumber) {
      return NextResponse.json({ success: false, error: 'Missing parameters' }, { status: 400 });
    }

    // Soft delete: Update status to 'checked_out' instead of removing the document
    const result = await Allocation.findOneAndUpdate(
      { parkingLot, spotNumber: parseInt(spotNumber), status: 'active' },
      { status: 'checked_out', checkoutTime: new Date() },
      { new: true }
    );

    if (!result) {
       return NextResponse.json({ success: false, error: 'Spot not found or already empty' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
