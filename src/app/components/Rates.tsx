'use client';

export default function Rates() {
  return (
    <section className="bg-[#8CA6A6] py-24 px-6 text-center text-gray-900 font-serif">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl font-medium">Rates and Insurance</h2>

        <div className="space-y-2 text-lg">
          <p>Session Fee - $200</p>
          <p>Psychodiagnostic Evaluation - $225</p>
        </div>

        <p className="text-base font-light">
          I accept both private pay and insurance. I am in-network with BCBS and Aetna.
        </p>

        <p className="text-base font-light">
          For out-of-network plans, I’ve partnered with Mentaya using{' '}
          <a
            href="#"
            className="underline hover:text-blue-700 transition-colors"
          >
            this tool
          </a>{' '}
          to help you check your eligibility for reimbursement for my services.
        </p>
      </div>
    </section>
  );
}
