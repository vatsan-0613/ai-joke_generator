import Anthropic from '@anthropic-ai/sdk';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_KEY,
});


export const GET = async (req: NextRequest,
  res: NextResponse) => {

    const { searchParams } = new URL(req.url as string)
    const topic = searchParams.get('topic')
  if (!topic) {
    return NextResponse.json({ error: 'Topic is required' }, { status: 400 })
  }
  try {
    const prompt = `Generate a joke about ${topic}`;
    const message = await anthropic.messages.create({
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
      model: 'claude-3-haiku-20240307',
    });
    return NextResponse.json({ joke : message });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

