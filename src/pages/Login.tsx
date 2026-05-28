import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Check } from "lucide-react";
import { login } from "../utils/auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("demo@jobtracker.com");
  const [password, setPassword] = useState("password");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    login();
    navigate("/");
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="hidden flex-1 flex-col justify-between bg-slate-900 p-12 text-white lg:flex">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600">
              <Briefcase size={24} />
            </div>

            <span className="text-2xl font-bold">JobTracker</span>
          </div>

          <div className="mt-24 max-w-md">
            <h1 className="text-5xl font-bold leading-tight">
              Track your job search with confidence.
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              Organize applications, monitor interview progress, and manage
              your career pipeline in one modern dashboard.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm text-slate-300">
            “This dashboard helps me stay organized during my job search.”
          </p>

          <p className="mt-4 font-semibold">Riemi Urakami</p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Welcome back
            </h2>

            <p className="mt-2 text-slate-500">
              Sign in to continue to your dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" className="rounded border-slate-300" />
                Remember me
              </label>

              <button
                type="button"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Sign in
            </button>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <Check size={18} />
              Continue with GitHub
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Demo account is pre-filled. No real authentication is required.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;