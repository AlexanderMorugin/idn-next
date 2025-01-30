import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
  const cards = await prisma.card.findMany();

  return NextResponse.json(cards);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const card = await prisma.card.create({
    data,
  });

  return NextResponse.json(card);
}
