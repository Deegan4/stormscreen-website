export const metadata = {
  title: "Terms of Use — StormScreen",
  description: "Terms of use for StormScreen, the macOS atmospheric desktop effects app.",
}

export default function TermsPage() {
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
        style={{ color: "#4ae3ff", textDecoration: "none", fontSize: "0.9rem" }}
      >
        ← Back to StormScreen
      </a>

      <h1 style={{ fontSize: "2.5rem", fontWeight: 800, margin: "1.5rem 0 0.5rem" }}>
        Terms of Use
      </h1>
      <p style={{ color: "#5c6a85", fontSize: "0.9rem", marginBottom: "2.5rem" }}>
        Last updated: May 14, 2026
      </p>

      <p>
        By installing or using StormScreen (&quot;the app&quot;), you agree to these terms. If you
        don&apos;t agree, don&apos;t install the app.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "2.5rem 0 1rem" }}>License</h2>
      <p>
        StormScreen is licensed, not sold. You receive a personal, non-exclusive, non-transferable
        license to install and use the app on any Mac you own or control. You may not redistribute,
        sublicense, reverse-engineer, or modify the app.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "2.5rem 0 1rem" }}>
        In-app purchases
      </h2>
      <p>
        Pro features are sold through Apple&apos;s StoreKit. Auto-renewing subscriptions renew
        until canceled — manage or cancel through System Settings → Apple ID → Subscriptions on
        macOS. Refunds and billing disputes are handled by Apple, not by us.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "2.5rem 0 1rem" }}>
        No warranty
      </h2>
      <p>
        The app is provided &quot;as is&quot; without warranty of any kind. To the maximum extent
        permitted by law, we disclaim all warranties — express, implied, or statutory — including
        warranties of merchantability, fitness for a particular purpose, and non-infringement.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "2.5rem 0 1rem" }}>
        Limitation of liability
      </h2>
      <p>
        To the maximum extent permitted by law, our total liability arising out of or related to
        the app is limited to the amount you paid for it (which may be zero for free users).
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "2.5rem 0 1rem" }}>
        Changes to these terms
      </h2>
      <p>
        We may update these terms. Material changes will be reflected on this page with an updated
        date. Continued use after a change means you accept the new terms.
      </p>

      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "2.5rem 0 1rem" }}>Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href="mailto:cybertec44@yahoo.com" style={{ color: "#4ae3ff" }}>
          cybertec44@yahoo.com
        </a>
        .
      </p>
    </main>
    </div>
  )
}
