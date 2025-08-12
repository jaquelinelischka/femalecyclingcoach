export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1a4b84] to-[#4a6d58] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-xl">
        <h1 className="text-2xl font-bold text-[#1a4b84] mb-4">Vielen Dank für deine Anmeldung!</h1>
        <p className="text-gray-600 mb-6">
          Dein Coaching-Paket wurde erfolgreich aktiviert. Du erhältst in Kürze eine E-Mail mit allen weiteren Details.
        </p>
        <a
          href="/"
          className="inline-block bg-[#1a4b84] text-white py-2 px-6 rounded-full hover:bg-[#4a6d58] transition duration-300"
        >
          Zurück zur Startseite
        </a>
      </div>
    </div>
  )
}
