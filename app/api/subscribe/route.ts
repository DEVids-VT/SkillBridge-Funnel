import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin, EmailListEntry } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    // Check if Supabase is properly configured
    if (!supabaseAdmin) {
      console.error('Supabase service role key is missing')
      return NextResponse.json(
        { error: 'Server configuration error - please contact support' },
        { status: 500 }
      )
    }

    const { email } = await request.json()

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required and must be a string' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const { data: existingEmail, error: checkError } = await supabaseAdmin
      .from('emaillist')
      .select('email')
      .eq('email', email.toLowerCase())
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      // PGRST116 is "not found" which is expected for new emails
      console.error('Error checking existing email:', checkError)
      return NextResponse.json(
        { error: 'Database error occurred' },
        { status: 500 }
      )
    }

    if (existingEmail) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      )
    }

    // Insert new email
    const emailEntry: EmailListEntry = {
      email: email.toLowerCase()
    }

    const { data, error } = await supabaseAdmin
      .from('emaillist')
      .insert([emailEntry])
      .select()

    if (error) {
      console.error('Error inserting email:', error)
      return NextResponse.json(
        { error: 'Failed to save email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        message: 'Email subscribed successfully',
        data: data[0]
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 