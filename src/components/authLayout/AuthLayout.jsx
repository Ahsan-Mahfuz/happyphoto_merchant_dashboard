// Shared wrapper used by all auth pages
// Centers content, shows logo + title, renders a white card
const AuthLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">
    {/* Logo + brand */}
    <div className="flex flex-col items-center mb-6">
      <img
        src="/logo.svg"
        alt="Admin Portal"
        className="w-20 h-20 object-contain rounded-full shadow-md"
      />
      <h1 className="text-base font-bold text-gray-800 mt-3">Admin Portal</h1>
      <p className="text-xs text-gray-400 mt-0.5">Secure access setup</p>
    </div>

    {/* Card */}
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-md border border-gray-100 px-6 py-7">
      {children}
    </div>
  </div>
);

export default AuthLayout;
