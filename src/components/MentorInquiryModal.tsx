import { useState, type FormEvent } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Loader2 } from 'lucide-react';
import { logMentorInquiry } from '../lib/firebase';

interface MentorInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWhatsAppRedirect: (customText?: string) => void;
}

export default function MentorInquiryModal({
  isOpen,
  onClose,
  onWhatsAppRedirect,
}: MentorInquiryModalProps) {
  const [name, setName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [email, setEmail] = useState('');
  const [studentCount, setStudentCount] = useState('10 - 50 students');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!whatsappNumber.trim()) return;

    setLoading(true);
    const result = await logMentorInquiry({
      name: name.trim() || undefined,
      whatsappNumber: whatsappNumber.trim(),
      email: email.trim() || undefined,
      studentCount,
      notes: notes.trim() || undefined,
      source: 'lead_modal',
    });

    setLoading(false);
    if (result.success) {
      setSubmitted(true);
    }
  };

  const handleContinueToWhatsApp = () => {
    const formatted = `Hi! I am ${name || 'a trading mentor'}. I have ${studentCount}. I'd like to integrate your automated trading journaling software for my academy.`;
    onWhatsAppRedirect(formatted);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-[#ded8cb] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-6 sm:p-8 overflow-hidden">
        {/* Architectural corner tick marks */}
        <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-zinc-400" />
        <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-zinc-400" />
        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-zinc-400" />
        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-zinc-400" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 p-1 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-zinc-900">
              Details Saved to Firebase!
            </h3>
            <p className="text-sm text-zinc-600 max-w-sm mx-auto">
              Your inquiry has been stored securely in our Firestore database. Let's continue on WhatsApp to discuss your academy syllabus.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleContinueToWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-full text-sm font-bold shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Continue on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center px-4 py-3 rounded-full text-sm font-semibold text-zinc-600 hover:text-zinc-900 border border-[#ded8cb] hover:bg-zinc-50 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-purple-700 uppercase block mb-1">
                CONNECTED TO FIREBASE
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-900">
                Book a Demo & Syllabus Review
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                Enter your details to receive early access and software integration for your students.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1">
                  Mentor / Academy Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Apex Trading Academy"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#faf9f6] border border-[#ded8cb] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-800 mb-1">
                    WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder="+91 9876543210"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#faf9f6] border border-[#ded8cb] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-800 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mentor@academy.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#faf9f6] border border-[#ded8cb] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1">
                  Number of Active Students
                </label>
                <select
                  value={studentCount}
                  onChange={(e) => setStudentCount(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#faf9f6] border border-[#ded8cb] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600 transition-all"
                >
                  <option value="1 - 10 students">1 – 10 students</option>
                  <option value="10 - 50 students">10 – 50 students</option>
                  <option value="50 - 200 students">50 – 200 students</option>
                  <option value="200+ students">200+ students</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-800 mb-1">
                  Primary Markets or Note (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Forex SMC, BankNifty Options, Crypto..."
                  className="w-full px-3.5 py-2 text-sm bg-[#faf9f6] border border-[#ded8cb] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600 transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleContinueToWhatsApp}
                  className="text-xs font-semibold text-zinc-600 hover:text-zinc-900 underline cursor-pointer"
                >
                  Skip to WhatsApp
                </button>

                <button
                  type="submit"
                  disabled={loading || !whatsappNumber.trim()}
                  className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 disabled:opacity-50 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                  <span>{loading ? 'Saving...' : 'Save & Connect'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
