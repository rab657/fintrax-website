import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

// Validate that email is a work email (not personal email)
const validateWorkEmail = (email: string): boolean => {
  if (!email) return false;
  const personalEmailDomains = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'icloud.com',
    'aol.com',
    'mail.com',
    'protonmail.com',
    'yandex.com',
    'zoho.com'
  ];
  const domain = email.split('@')[1]?.toLowerCase();
  return domain ? !personalEmailDomains.includes(domain) : false;
};

export async function POST(req: NextRequest) {
  try {
    const { email, name, phone, company_name } = await req.json();

    // Basic validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      );
    }

    // Validate work email (reject personal emails)
    if (!validateWorkEmail(email)) {
      return NextResponse.json(
        { error: 'Please use your work email address. Personal email addresses are not accepted.' },
        { status: 400 }
      );
    }

    // Parse service account credentials from env variable
    const credentials = JSON.parse(
      Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!, 'base64').toString()
    );

    // Authenticate with Google
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Format date and time
    const now = new Date();
    const dateOptions: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    const timeOptions: Intl.DateTimeFormatOptions = { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    
    const formattedDate = now.toLocaleDateString('en-GB', dateOptions); // e.g., "17 November 2025"
    const formattedTime = now.toLocaleTimeString('en-GB', timeOptions); // e.g., "05:12:11"

    // Append row to sheet
    // Column order: Name, Email, Phone, Company Name, Date Submitted, Time Submitted
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: 'Sheet1!A:F', // 6 columns: Name, Email, Phone, Company Name, Date, Time
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          name || '',
          email,
          phone || '',
          company_name || '',
          formattedDate,
          formattedTime
        ]],
      },
    });

    return NextResponse.json(
      { success: true, message: 'Added to waitlist!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error adding to sheet:', error);
    return NextResponse.json(
      { error: 'Failed to add to waitlist' },
      { status: 500 }
    );
  }
}

