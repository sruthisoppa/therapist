'use client';

export default function Quote() {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat bg-fixed py-32 px-6 text-center text-gray-900 font-serif">
      <div className=" max-w-3xl mx-auto p-10 rounded-xl space-y-10">
        <h2 className="text-4xl font-medium leading-relaxed">
          “I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival.”
        </h2>

        <div className="text-lg">
          <p>— Audre Lorde</p>
        </div>
      </div>
    </section>
  );
}
