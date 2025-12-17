"use server"

import { createClient } from "@/lib/supabase/server"

export type ContactFormData = {
  name: string
  email: string
  company?: string
  service?: string
  message: string
}

export async function submitContactForm(formData: ContactFormData) {
  const supabase = await createClient()

  const { error } = await supabase.from("contact_submissions").insert({
    name: formData.name,
    email: formData.email,
    company: formData.company || null,
    service: formData.service || null,
    message: formData.message,
  })

  if (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, error: error.message }
  }

  return { success: true }
}
