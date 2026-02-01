import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

function FAQItem({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-5 border-black bg-white shadow-neo mb-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#000000]">
      <button
        className={`w-full flex items-start justify-between p-6 text-left ${
          isOpen ? 'bg-black text-white' : 'bg-white text-black'
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-bold text-xl md:text-2xl uppercase pr-8 font-mono tracking-tight leading-tight">
          {item.question}
        </span>
        <div
          className={`flex-shrink-0 border-2 ${
            isOpen ? 'border-white' : 'border-black'
          } p-1`}
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      {isOpen && (
        <div className="p-8 border-t-5 border-black bg-gray-50">
          <p className="font-mono text-lg leading-relaxed text-gray-800 font-medium">
            <span className="text-tf-orange font-bold mr-2">&gt;&gt;</span>
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto">
      {items.map((item, idx) => (
        <FAQItem
          key={idx}
          item={item}
          isOpen={openIndex === idx}
          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
}
