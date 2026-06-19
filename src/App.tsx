import React from "react";
import "./App.css";

const App: React.FC = () => {
  // Inline styles for premium look
  const styles = {
    app: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "2.5rem 2rem",
      backgroundColor: "#ffffff",
      borderRadius: "2rem",
      boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    hero: {
      textAlign: "center" as const,
      padding: "4rem 2rem 3rem",
      background: "linear-gradient(145deg, #0f172a 0%, #1e293b 100%)",
      borderRadius: "1.5rem",
      color: "#ffffff",
      marginBottom: "3.5rem",
    },
    heroTitle: {
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.75rem",
    },
    heroIcon: {
      color: "#facc15",
      fontSize: "2.5rem",
    },
    heroSub: {
      fontSize: "1.2rem",
      color: "#cbd5e1",
      maxWidth: "600px",
      margin: "0 auto 2rem",
      lineHeight: 1.6,
    },
    primaryBtn: {
      backgroundColor: "#facc15",
      color: "#0f172a",
      border: "none",
      padding: "0.9rem 2.8rem",
      borderRadius: "60px",
      fontSize: "1.1rem",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.2s",
      boxShadow: "0 8px 24px rgba(250,204,21,0.3)",
    },
    sectionTitle: {
      fontSize: "2.2rem",
      fontWeight: 700,
      color: "#0f172a",
      textAlign: "center" as const,
      marginBottom: "1rem",
      letterSpacing: "-0.01em",
    },
    sectionSub: {
      textAlign: "center" as const,
      color: "#64748b",
      marginBottom: "2.5rem",
      fontSize: "1.1rem",
    },
    cardContainer: {
      display: "flex",
      flexWrap: "wrap" as const,
      gap: "1.8rem",
      justifyContent: "center",
      marginTop: "0.5rem",
    },
    card: {
      flex: "1 1 200px",
      minWidth: "180px",
      backgroundColor: "#f8fafc",
      padding: "1.8rem 1.5rem",
      borderRadius: "1.25rem",
      border: "1px solid #e9edf2",
      transition: "all 0.25s",
      textAlign: "center" as const,
    },
    cardIcon: {
      fontSize: "2.2rem",
      color: "#facc15",
      marginBottom: "0.75rem",
    },
    cardTitle: {
      fontSize: "1.2rem",
      fontWeight: 600,
      color: "#0f172a",
      marginBottom: "0.5rem",
    },
    cardDesc: {
      color: "#475569",
      fontSize: "0.95rem",
      lineHeight: 1.5,
    },
    priceCard: {
      flex: "1 1 200px",
      minWidth: "180px",
      backgroundColor: "#ffffff",
      padding: "1.8rem 1.5rem",
      borderRadius: "1.25rem",
      border: "1px solid #e9edf2",
      boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
      textAlign: "center" as const,
      transition: "all 0.25s",
    },
    priceAmount: {
      fontSize: "2.8rem",
      fontWeight: 700,
      color: "#0f172a",
      margin: "0.5rem 0",
      letterSpacing: "-0.02em",
    },
    priceFeature: {
      color: "#475569",
      fontSize: "0.95rem",
      padding: "0.3rem 0",
      borderBottom: "1px solid #f1f5f9",
    },
    priceFeatureLast: {
      color: "#475569",
      fontSize: "0.95rem",
      padding: "0.3rem 0",
      borderBottom: "none",
    },
    contact: {
      backgroundColor: "#f1f5f9",
      borderRadius: "1.5rem",
      padding: "3rem 2rem",
      marginTop: "3rem",
      textAlign: "center" as const,
    },
    contactTitle: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#0f172a",
      marginBottom: "1.5rem",
    },
    contactDetail: {
      fontSize: "1.05rem",
      color: "#334155",
      margin: "0.4rem 0",
    },
    contactIcon: {
      color: "#facc15",
      marginRight: "0.5rem",
      width: "1.5rem",
    },
    secondaryBtn: {
      backgroundColor: "#0f172a",
      color: "#ffffff",
      border: "none",
      padding: "0.9rem 2.8rem",
      borderRadius: "60px",
      fontSize: "1.1rem",
      fontWeight: 600,
      cursor: "pointer",
      marginTop: "1.5rem",
      transition: "all 0.2s",
      boxShadow: "0 8px 24px rgba(15,23,42,0.2)",
    },
  };

  return (
    <div style={styles.app}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          <i className="fas fa-motorcycle" style={styles.heroIcon}></i>
          Premium Bike Service
        </h1>
        <p style={styles.heroSub}>
          Keep your bike in perfect condition with our professional
          maintenance and repair services.
        </p>
        <button style={styles.primaryBtn}>Book a Service</button>
      </section>

      {/* Services Section */}
      <section>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <p style={styles.sectionSub}>Expert care for every ride</p>

        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>
              <i className="fas fa-wrench"></i>
            </div>
            <h3 style={styles.cardTitle}>General Service</h3>
            <p style={styles.cardDesc}>
              Complete bike inspection, engine oil replacement, and tuning.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>
              <i className="fas fa-circle"></i>
            </div>
            <h3 style={styles.cardTitle}>Tyre Replacement</h3>
            <p style={styles.cardDesc}>
              Premium tyre fitting, wheel balancing, and alignment.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>
              <i className="fas fa-cogs"></i>
            </div>
            <h3 style={styles.cardTitle}>Engine Repair</h3>
            <p style={styles.cardDesc}>
              Expert engine diagnostics and performance enhancement.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>
              <i className="fas fa-soap"></i>
            </div>
            <h3 style={styles.cardTitle}>Bike Wash</h3>
            <p style={styles.cardDesc}>
              Premium foam wash, polishing, and ceramic coating.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ marginTop: "3.5rem" }}>
        <h2 style={styles.sectionTitle}>Service Packages</h2>
        <p style={styles.sectionSub}>Choose the plan that fits your needs</p>

        <div style={styles.cardContainer}>
          <div style={styles.priceCard}>
            <h3 style={{ fontSize: "1.4rem", color: "#0f172a" }}>Basic</h3>
            <div style={styles.priceAmount}>₹499</div>
            <p style={styles.priceFeature}>Oil Check</p>
            <p style={styles.priceFeature}>Brake Check</p>
            <p style={styles.priceFeatureLast}>Bike Wash</p>
          </div>

          <div style={{ ...styles.priceCard, borderColor: "#facc15", boxShadow: "0 8px 24px rgba(250,204,21,0.15)" }}>
            <h3 style={{ fontSize: "1.4rem", color: "#0f172a" }}>Premium</h3>
            <div style={styles.priceAmount}>₹999</div>
            <p style={styles.priceFeature}>Full Service</p>
            <p style={styles.priceFeature}>Engine Tune-up</p>
            <p style={styles.priceFeatureLast}>Premium Wash</p>
          </div>

          <div style={styles.priceCard}>
            <h3 style={{ fontSize: "1.4rem", color: "#0f172a" }}>Ultimate</h3>
            <div style={styles.priceAmount}>₹1499</div>
            <p style={styles.priceFeature}>Complete Service</p>
            <p style={styles.priceFeature}>Ceramic Polish</p>
            <p style={styles.priceFeatureLast}>Pickup &amp; Drop</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.contact}>
        <h2 style={styles.contactTitle}>Book Your Bike Service Today!</h2>
        <p style={styles.contactDetail}>
          <i className="fas fa-map-pin" style={styles.contactIcon}></i>
          Hyderabad, India
        </p>
        <p style={styles.contactDetail}>
          <i className="fas fa-phone-alt" style={styles.contactIcon}></i>
          +91 98765 43210
        </p>
        <p style={styles.contactDetail}>
          <i className="fas fa-envelope" style={styles.contactIcon}></i>
          premiumbike@gmail.com
        </p>
        <button style={styles.secondaryBtn}>Contact Us</button>
      </section>
    </div>
  );
};

export default App;