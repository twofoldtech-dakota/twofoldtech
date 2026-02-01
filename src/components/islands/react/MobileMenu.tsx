import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface MobileMenuProps {
  navItems: NavItem[];
}

export default function MobileMenu({ navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(l => l !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      <button
        className="lg:hidden p-2 border-4 border-black shadow-neo-sm active:shadow-none active:translate-y-[4px] active:translate-x-[4px]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="lg:hidden border-t-5 border-black bg-white p-6 flex flex-col gap-4 absolute w-full left-0 top-24 shadow-neo z-50 max-h-[calc(100vh-6rem)] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="w-full text-left text-2xl font-black uppercase border-b-4 border-gray-100 py-4 hover:bg-tf-orange transition-all flex items-center justify-between"
                    onClick={() => toggleExpanded(item.label)}
                  >
                    {item.label}
                    <ChevronDown 
                      size={24} 
                      className={`transition-transform ${expandedItems.includes(item.label) ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedItems.includes(item.label) && (
                    <div className="pl-4 border-l-4 border-tf-orange ml-4 mt-2">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block text-xl font-bold uppercase py-3 hover:text-tf-orange transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className="block text-2xl font-black uppercase border-b-4 border-gray-100 py-4 hover:pl-4 hover:bg-tf-orange hover:border-black transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
