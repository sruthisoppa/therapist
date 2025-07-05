'use client';

export default function Footer() {
  return (
    <footer className="bg-[#e5e5d4] bg-cover bg-center bg-no-repeat bg-fixed px-6 py-2 text-center text-gray-800 font-serif">
      <div className="max-w-4xl mx-auto p-10 rounded-xl space-y-6">
        <h2 className="text-3xl font-medium">Dr. Serena Blake, PsyD, Clinical Psychologist</h2>

        <p>
          <a href="mailto:serena@blakepsychology.com" className="underline hover:text-blue-600">
            serena@blakepsychology.com
          </a>
        </p>

        <p>
          Phone: <a href="tel:+13235550192" className="underline hover:text-blue-600"> (323) 555-0192</a>
        </p>

        <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>

        <p>
          <span className="font-semibold">Office Hours</span><br />
          In-person: Tue & Thu, 10 AM–6 PM<br />
          Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
        </p>

        <div className="space-x-6">
          <a href="#" className="underline hover:text-blue-600">Home</a>
          <a href="#" className="underline hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="underline hover:text-blue-600">Terms</a>
        </div>

        <p className="pt-6 text-sm text-gray-700">
          © 2025 Dr. Serena Blake. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
