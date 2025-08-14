import { NextRequest, NextResponse } from 'next/server';
import formidable from 'formidable';
import { IncomingForm } from 'formidable';
import { Readable } from 'stream';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const form = formidable({ multiples: false });

  const stream = Readable.fromWeb(req.body as any); // Convert WebStream → Node stream

  const [fields, files] = await new Promise((resolve, reject) => {
    form.parse(stream, (err, fields, files) => {
      if (err) reject(err);
      else resolve([fields, files]);
    });
  });

  return NextResponse.json({ fields, files });
}
