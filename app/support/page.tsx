export const metadata = {
  title: "Support — StormScreen",
  description: "Get help with StormScreen — common questions, troubleshooting, and contact info.",
}

const faqs: { q: string; a: string }[] = [
  {
    q: "How do I install StormScreen?",
    a: "Download the .dmg from the link in your purchase email or the App Store. Open the .dmg, drag StormScreen.app into your Applications folder, then launch it. The first launch may show a Gatekeeper prompt — right-click the app and choose Open to confirm.",
  },
  {
    q: "I don't see a window after launching.",
    a: "That's by design. StormScreen lives in the menu bar — look for the cloud icon at the top-right of your screen. Click it to access settings, presets, and effect toggles.",
  },
  {
    q: "How do I enable Live Weather?",
    a: "Open the menu bar icon → Preferences → Weather tab. Toggle Live Weather on. macOS will request location permission. Live Weather requires macOS 15.6 or later and a working internet connection (Apple WeatherKit).",
  },
  {
    q: "I subscribed to Pro but Pro features are still locked.",
    a: "Open Preferences → Subscription tab and click 'Restore Purchases'. If that doesn't unlock Pro within a minute, confirm you're signed in to the same Apple ID you used to subscribe (System Settings → Apple ID). Still stuck? Email us with your order receipt.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Apple manages the subscription. Open System Settings → Apple ID → Subscriptions, find StormScreen Pro, and tap Cancel. You'll keep Pro features until the end of the current billing period.",
  },
  {
    q: "How do I change the keyboard shortcuts?",
    a: "Preferences → Shortcuts tab. Click any shortcut to record a new combination, or click the X to disable it.",
  },
  {
    q: "Why is StormScreen using more than 5% CPU?",
    a: "If you've raised particle counts beyond the defaults, or enabled multiple effects across many displays, CPU use rises. Preferences → Performance tab → Reset to defaults, or enable Adaptive Quality which scales effects to keep CPU and GPU in budget.",
  },
  {
    q: "How do I report a bug or request a feature?",
    a: "Email cybertec44@yahoo.com with your macOS version, Mac model, a screenshot or video if relevant, and the steps to reproduce. We read every message.",
  },
]

export default function SupportPage() {
  return (
    <div
      style={{
        background: "#080c14",
        minHeight: "100vh",
        color: "#e8edf5",
      }}
    >
    <main
      style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "6rem 1.5rem 4rem",
        color: "#e8edf5",
        fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif",
        lineHeight: 1.7,
      }}
    >
      <a
        href="/"
        style={{
          color: "#4ae3ff",
          textDecoration: "none",
          fontSize: "0.9rem",
        }}
      >
        ← Back to StormScreen
      </a>

      <h1 style={{ fontSize: "2.5rem", fontWeight: 800, margin: "1.5rem 0 0.5rem" }}>Support</h1>
      <p style={{ color: "#9ba8c2", marginBottom: "2.5rem" }}>
        Most questions are answered below. If you need a human, write to{" "}
        <a href="mailto:cybertec44@yahoo.com" style={{ color: "#4ae3ff" }}>
          cybertec44@yahoo.com
        </a>
        .
      </p>

      <section
        style={{
          background: "#141c2e",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: "1.5rem 1.75rem",
          marginBottom: "3rem",
        }}
      >
        <strong style={{ color: "#4ae3ff" }}>Fastest path:</strong>{" "}
        <span style={{ color: "#9ba8c2" }}>
          Include your macOS version, Mac model (Apple → About This Mac), the StormScreen version
          (menu bar icon → About), and a screen recording if the issue is visual.
        </span>
      </section>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>
        Frequently asked
      </h2>

      <div>
        {faqs.map(({ q, a }) => (
          <details
            key={q}
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "1.25rem 0",
            }}
          >
            <summary
              style={{
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "1.05rem",
                color: "#ffffff",
                listStyle: "none",
              }}
            >
              {q}
            </summary>
            <p style={{ marginTop: "0.75rem", color: "#9ba8c2" }}>{a}</p>
          </details>
        ))}
      </div>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "3rem 0 1rem" }}>
        Still need help?
      </h2>
      <p>
        Email{" "}
        <a href="mailto:cybertec44@yahoo.com" style={{ color: "#4ae3ff" }}>
          cybertec44@yahoo.com
        </a>{" "}
        with your details. We typically respond within 1–2 business days.
      </p>
    </main>
    </div>
  )
}
