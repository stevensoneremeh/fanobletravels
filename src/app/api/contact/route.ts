import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData()
    const name = body.get('name') as string
    const email = body.get('email') as string
    const subject = body.get('subject') as string
    const message = body.get('message') as string

    // For now, just log the contact form data since we don't have a mail server configured
    console.log('Contact form submission:', { name, email, subject, message })

    // In a real implementation, you would send the email using a service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    
    // For now, return success since the form data is received correctly
    return NextResponse.json({ 
      status: 'success', 
      message: 'Contact form received. In production, this would send an email.' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ 
      status: 'error', 
      message: 'Failed to process contact form' 
    }, { status: 500 })
  }
}