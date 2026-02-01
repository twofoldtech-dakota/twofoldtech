import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface InquiryType {
  value: string;
  label: string;
}

interface ContactFormProps {
  inquiryTypes: InquiryType[];
}

export default function ContactForm({ inquiryTypes }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Something went wrong');
        setStatus('error');
      }
    } catch (err) {
      setErrorMessage('Failed to send message. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="border-5 border-black p-8 md:p-12 shadow-neo bg-white text-center">
        <CheckCircle size={64} className="mx-auto text-green-500 mb-6" />
        <h3 className="text-2xl font-black uppercase mb-4">Message Sent!</h3>
        <p className="font-mono text-gray-600 mb-6">
          Thanks for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="font-mono font-bold text-tf-orange hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 border-5 border-black p-8 md:p-12 shadow-neo bg-white">
      {status === 'error' && (
        <div className="flex items-center gap-3 bg-red-50 border-4 border-red-500 p-4">
          <AlertCircle size={24} className="text-red-500 flex-shrink-0" />
          <p className="font-mono text-red-700">{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-mono font-bold text-sm uppercase mb-2" htmlFor="name">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={status === 'loading'}
            className="w-full border-4 border-black px-4 py-3 font-mono focus:outline-none focus:border-tf-orange transition-colors disabled:bg-gray-100"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block font-mono font-bold text-sm uppercase mb-2" htmlFor="email">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={status === 'loading'}
            className="w-full border-4 border-black px-4 py-3 font-mono focus:outline-none focus:border-tf-orange transition-colors disabled:bg-gray-100"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-mono font-bold text-sm uppercase mb-2" htmlFor="company">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            disabled={status === 'loading'}
            className="w-full border-4 border-black px-4 py-3 font-mono focus:outline-none focus:border-tf-orange transition-colors disabled:bg-gray-100"
            placeholder="Acme Corp"
          />
        </div>

        <div>
          <label className="block font-mono font-bold text-sm uppercase mb-2" htmlFor="inquiry">
            Inquiry Type *
          </label>
          <select
            id="inquiry"
            name="inquiry"
            required
            disabled={status === 'loading'}
            className="w-full border-4 border-black px-4 py-3 font-mono focus:outline-none focus:border-tf-orange transition-colors bg-white disabled:bg-gray-100"
          >
            <option value="">Select an option...</option>
            {inquiryTypes.map((type) => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block font-mono font-bold text-sm uppercase mb-2" htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          disabled={status === 'loading'}
          className="w-full border-4 border-black px-4 py-3 font-mono focus:outline-none focus:border-tf-orange transition-colors resize-none disabled:bg-gray-100"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-tf-orange border-4 border-black px-8 py-4 font-mono font-bold text-lg uppercase shadow-neo hover:shadow-[12px_12px_0px_#000] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-neo disabled:hover:translate-y-0"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
