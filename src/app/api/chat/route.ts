import { NextResponse } from 'next/server';

interface ChatRequest {
  messages: {
    role: string;
    content: string;
  }[];
  model?: string;
}

export async function POST(request: Request) {
  try {
    const { messages, model = 'deepseek-chat' } = await request.json() as ChatRequest;

    const apiKey = process.env.DEEPSEEK_API_KEY;
    const apiBase = process.env.DEEPSEEK_API_BASE || 'https://api.deepseek.com/v1';

    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const response = await fetch(`${apiBase}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.error?.message || 'API request failed' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}