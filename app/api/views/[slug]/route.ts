import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';

const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? Redis.fromEnv()
    : null;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const slug = (await params).slug;

    if (!redis) {
      return NextResponse.json({ views: 0 }, { status: 200 });
    }

    const views = (await redis.get<number>(`pageviews:journal:${slug}`)) ?? 0;

    return NextResponse.json({ views }, { status: 200 });
  } catch (error) {
    console.error('Error fetching views:', error);
    return NextResponse.json({ views: 0 }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const slug = (await params).slug;

    if (!redis) {
      return NextResponse.json({ views: 0 }, { status: 200 });
    }

    // Increment the view counter by 1
    const views = await redis.incr(`pageviews:journal:${slug}`);

    return NextResponse.json({ views }, { status: 200 });
  } catch (error) {
    console.error('Error incrementing views:', error);
    return NextResponse.json({ views: 0 }, { status: 500 });
  }
}
