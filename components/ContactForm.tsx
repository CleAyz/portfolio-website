"use client";

import { useState, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formState.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      // Placeholder: in production, POST to API route or external service
      // e.g. await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formState) })
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={formState.name}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, name: e.target.value }))
          }
          className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2 text-neutral-900 shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
          placeholder="Your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formState.email}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, email: e.target.value }))
          }
          className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2 text-neutral-900 shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formState.message}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, message: e.target.value }))
          }
          className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2 text-neutral-900 shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
          placeholder="How can I help?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {status === "success" && (
        <p className="rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-400">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-red-900/20 dark:text-red-400">
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
