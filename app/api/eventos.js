import { NextResponse } from "next/server";

export const events = 
    [
        
    ]

export async function GET() {
  return new NextResponse.json(events);
}