export const metadata = {
  title: "Privacy Policy — StormScreen",
  description:
    "StormScreen does not collect or transmit personal data to our servers. Read our full privacy practices.",
}

export default function PrivacyPage() {
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

      <h1 style={{ fontSize: "2.5rem", fontWeight: 800, margin: "1.5rem 0 0.5rem" }}>
        Privacy Policy
      </h1>
      <p style={{ color: "#5c6a85", fontSize: "0.9rem", marginBottom: "2.5rem" }}>
        Last updated: May 14, 2026
      </p>

      <section>
        <p>
          StormScreen does not collect or transmit personal data to our servers. We don&apos;t
          operate any servers. Everything described below happens on your Mac.
        </p>
      </section>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "2.5rem 0 1rem" }}>
        Location data
      </h2>
      <p>
        When you enable Live Weather, StormScreen requests location access from macOS. Your
        approximate location is sent only to Apple&apos;s WeatherKit endpoint so the app can match
        on-screen effects to your current weather. Your location never leaves your device except
        to Apple&apos;s WeatherKit endpoint. You can revoke location access at any time in System
        Settings → Privacy &amp; Security → Location Services.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "2.5rem 0 1rem" }}>
        Local storage only
      </h2>
      <p>
        Your settings (effect intensity, presets, schedules, color choices, keyboard shortcuts,
        per-display preferences, etc.) are stored locally in macOS&apos; standard user defaults
        and the app&apos;s sandbox. Nothing is synced to our servers because we have no servers.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "2.5rem 0 1rem" }}>
        In-app purchases
      </h2>
      <p>
        StormScreen Pro is sold through Apple&apos;s StoreKit. Apple processes every transaction.
        We never see your name, email, payment method, or any identifier that could link a
        purchase to a specific person. We receive only aggregate purchase counts — we cannot
        identify individual customers. Apple&apos;s privacy policy governs the purchase itself.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "2.5rem 0 1rem" }}>
        What we do NOT collect
      </h2>
      <ul style={{ paddingLeft: "1.25rem" }}>
        <li>Names, email addresses, or contact information</li>
        <li>Analytics or telemetry</li>
        <li>Crash reports (StormScreen does not currently include any third-party crash reporting SDK)</li>
        <li>Advertising identifiers</li>
        <li>Access to contacts, photos, microphone, or camera</li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "2.5rem 0 1rem" }}>
        Future changes
      </h2>
      <p>
        If we ever add features that change this policy — for example, opt-in crash reporting —
        we will update this page and call out the change in the app&apos;s release notes. We will
        never retroactively expand data collection on existing users without a clear, in-app
        notice and opt-in.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "2.5rem 0 1rem" }}>Contact</h2>
      <p>
        Questions about this policy? Email{" "}
        <a href="mailto:cybertec44@yahoo.com" style={{ color: "#4ae3ff" }}>
          cybertec44@yahoo.com
        </a>
        .
      </p>
    </main>
    </div>
  )
}
