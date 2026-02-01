import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

export default function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [email, setEmail] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData();
    formData.append('email', email);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="max-w-md mx-auto flex items-center gap-3 bg-white/10 border-4 border-white px-6 py-4">
        <CheckCircle size={24} className="text-tf-orange flex-shrink-0" />
        <p className="font-mono font-bold">You're subscribed! Check your inbox.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === 'loading'}
        className="flex-1 border-4 border-white bg-transparent px-4 py-3 font-mono text-white placeholder-gray-500 focus:outline-none focus:border-tf-orange disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-tf-orange border-4 border-white px-8 py-3 font-mono font-bold uppercase hover:bg-white hover:text-black transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          'Subscribe'
        )}
      </button>
      {status === 'error' && (
        <p className="text-red-400 font-mono text-sm mt-2 sm:absolute sm:mt-16">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
