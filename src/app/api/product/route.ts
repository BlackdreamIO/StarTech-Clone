import { MongoDB } from '@/databases/mongoDb';
import { NextRequest, NextResponse } from 'next/server';

export default async function GET(req : NextRequest, res : NextResponse) 
{
    await MongoDB();

    const products = productSchema.find({ });

    NextResponse.json(products);
}