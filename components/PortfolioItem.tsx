'use client';

import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface PortfolioItemProps {
  title: string;
  description: string;
  details: {
    services?: string[];
    technologies?: string[];
    description: string;
  };
}

export default function PortfolioItem({ title, description, details }: PortfolioItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-violet-100">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100/20 via-transparent to-fuchsia-100/20"></div>
      <div className="p-8 relative">
        <h3 className="text-3xl font-bold mb-4 text-gray-900 drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-gray-700 mb-6 text-lg group-hover:text-gray-900 transition-colors duration-300">{description}</p>
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 font-medium hover:scale-105 shadow-sm"
        >
          View Details
        </button>
      </div>

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-xl shadow-2xl p-6 z-50">
            <Dialog.Close className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X size={24} />
            </Dialog.Close>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              {title}
            </h2>
            {details.services && (
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {details.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-violet-50 text-violet-700 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 hover:bg-violet-100"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {details.technologies && (
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {details.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-violet-50 text-violet-700 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 hover:bg-violet-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Project Description</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{details.description}</p>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
} 