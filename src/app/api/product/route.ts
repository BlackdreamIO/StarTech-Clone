import { MongoDB } from '@/databases/mongoDb';
import { NextRequest, NextResponse } from 'next/server';
import { Product } from '@/scheme/Product';

export async function GET(req : NextRequest, res : NextResponse) 
{
    const mongoDb = await MongoDB().then((res) => 'db connected').catch((err) => `failed to connect db ${err}`);

    const products = Product.find({  });

    return NextResponse.json({ status : mongoDb, data : products });
}