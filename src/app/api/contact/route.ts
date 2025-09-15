import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '../../../utils/replitmail'

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData()
    const name = body.get('name') as string
    const email = body.get('email') as string
    const subject = body.get('subject') as string
    const message = body.get('message') as string

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ 
        status: 'error', 
        message: 'All fields are required' 
      }, { status: 400 })
    }

    // Send email using Replit Mail
    await sendEmail({
      to: 'info@fanobletravels.com',
      subject: `Contact Form: ${subject}`,
      text: `New contact form submission:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Please respond to: ${email}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Please respond to: <a href="mailto:${email}">${email}</a></em></p>
      `
    })

    return NextResponse.json({ 
      status: 'success', 
      message: 'Your message has been sent successfully. We will get back to you soon!' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ 
      status: 'error', 
      message: 'Failed to send message. Please try again later.' 
    }, { status: 500 })
  }
}