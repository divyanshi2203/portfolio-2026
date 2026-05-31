import React, { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import api from '../api/axios'

const initial = { name: '', email: '', subject: '', message: '' }

export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  const validate = () => {
    if (values.name.trim().length < 2) return 'Please enter your name (min 2 chars).'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email.'
    if (values.subject.trim().length < 3) return 'Subject is too short.'
    if (values.message.trim().length < 10) return 'Message must be at least 10 characters.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const err = validate()
    if (err) {
      setStatus({ state: 'error', message: err })
      return
    }
    setStatus({ state: 'loading', message: '' })
    try {
      const res = await api.post('/contact', values)
      setStatus({
        state: 'success',
        message: res.data?.message || 'Message sent. I will get back to you soon.',
      })
      setValues(initial)
    } catch (err) {
      const msg =
        err?.response?.data?.detail ||
        err?.message ||
        'Could not send your message. Please try again.'
      setStatus({ state: 'error', message: String(msg) })
    }
  }

  return (
    <form onSubmit={onSubmit} className="card-base space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Name" name="name" value={values.name} onChange={onChange} placeholder="Jane Doe" />
        <Field label="Email" type="email" name="email" value={values.email} onChange={onChange} placeholder="jane@company.com" />
      </div>

      <Field label="Subject" name="subject" value={values.subject} onChange={onChange} placeholder="Project enquiry" />

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-rose-dark mb-1.5">
          Message
        </label>
        <textarea
          name="message"
          value={values.message}
          onChange={onChange}
          rows={5}
          placeholder="Tell me about your project, idea, or question…"
          className="input-base resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={status.state === 'loading'}
          className={`btn-primary ${status.state === 'loading' ? 'opacity-70 cursor-wait' : ''}`}
        >
          {status.state === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Send Message
            </>
          )}
        </button>

        {status.state === 'success' && (
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-light px-4 py-2 text-sm font-semibold text-rose-dark border border-rose-100">
            <CheckCircle2 className="h-4 w-4" /> {status.message}
          </div>
        )}
        {status.state === 'error' && (
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 border border-red-100">
            <AlertCircle className="h-4 w-4" /> {status.message}
          </div>
        )}
      </div>
    </form>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-rose-dark mb-1.5">
        {label}
      </label>
      <input className="input-base" {...props} />
    </div>
  )
}
