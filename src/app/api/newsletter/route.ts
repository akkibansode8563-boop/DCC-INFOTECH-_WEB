import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email().max(200),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    const { email } = parsed.data;

    await db.newsletterSubscription.upsert({
      where: { email },
      create: { email },
      update: {},
    });

    return NextResponse.json({ success: true, message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}