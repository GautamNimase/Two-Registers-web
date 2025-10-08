import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Using a simple email service that works immediately
      const emailContent = {
        to: 'gautamnimase007@gmail.com',
        subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
        body: `
Contact Form Submission Details:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

---
Sent from Two Register website contact form.
        `
      }

      // Using FormSubmit - a free service that sends emails directly
      const response = await fetch('https://formsubmit.co/ajax/gautamnimase007@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: `Contact Form: ${formData.firstName} ${formData.lastName}`,
          _captcha: 'false'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      
      // Fallback: Use mailto link
      const mailtoLink = `mailto:gautamnimase007@gmail.com?subject=Contact Form Submission from ${formData.firstName} ${formData.lastName}&body=Name: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`
      
      window.location.href = mailtoLink
      
      setSubmitStatus('fallback')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section container-max">
      <h2 className="text-3xl md:text-4xl font-bold">Send us a message</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-8">
        {/* Form card */}
        <form onSubmit={handleSubmit} className="md:col-span-2 card-panel p-6">
          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'fallback' && (
            <div className="mb-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
              Email client opened with your message. Please send the email manually.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
              Failed to send message. Please try again or contact us directly.
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-5">
            <input 
              name="firstName"
              placeholder="First Name*" 
              className="input-light" 
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input 
              name="lastName"
              placeholder="Last Name*" 
              className="input-light" 
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input 
              name="email"
              type="email" 
              placeholder="Email*" 
              className="input-light" 
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input 
              name="phone"
              placeholder="Phone*" 
              className="input-light" 
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea 
              name="message"
              rows="6" 
              placeholder="Message*" 
              className="md:col-span-2 input-light" 
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button 
              type="submit" 
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <button type="button" className="btn-secondary">Schedule a Call</button>
            <a 
              href="mailto:gautamnimase007@gmail.com" 
              className="btn-outline-dark"
            >
              Email Us
            </a>
          </div>
        </form>

        {/* Info card */}
        <div className="card-panel p-6">
          <h3 className="text-xl font-semibold">Office Address</h3>
          <p className="mt-2 text-textSecondary">559/3 Sopan Nagar Saswad, Pune</p>
          <h3 className="mt-6 text-xl font-semibold">Call Us</h3>
          <p className="mt-1 text-textSecondary">Tel: 9890689649</p>
          <h3 className="mt-6 text-xl font-semibold">Send an E-mail</h3>
          <p className="mt-1 text-textSecondary">gautamnimase007@gmail.com</p>
          <div className="mt-6 flex gap-3">
            <a className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-accent/20">f</a>
            <a className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-accent/20">in</a>
          </div>
        </div>
      </div>
    </section>
  )
}


