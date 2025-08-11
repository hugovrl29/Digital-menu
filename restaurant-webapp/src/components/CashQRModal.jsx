import { QRCodeCanvas } from "qrcode.react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CashQRModal({ open, onClose, total, table = 1 }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
        navigate("/");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [open, navigate, onClose]);

  if (!open) return null;

  const payload = JSON.stringify({
    type: "cash",
    total,
    table,
    ts: Date.now()
  });

  const handleClose = () => {
    onClose();
    navigate("/");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 360,
          maxWidth: "90vw",
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          padding: "1.25rem",
          textAlign: "center"
        }}
      >
        <h3 style={{ margin: 0, marginBottom: ".75rem" }}>Paiement en cash</h3>

        <div style={{ display: "flex", justifyContent: "center", margin: "0.5rem 0 1rem" }}>
            <div style={{ padding: "10px", background: "#fff" }}>
                <QRCodeCanvas value={payload} size={220} />
            </div>
        </div>

        <div style={{ fontSize: "1rem", marginBottom: ".25rem" }}>
          Total à régler : <strong>{total.toFixed(2)} €</strong>
        </div>
        <p style={{ margin: 0, color: "#444" }}>
          Veuillez présenter ce code QR à la caisse lors de votre départ.
        </p>

        <button
          onClick={handleClose}
          style={{
            marginTop: "1rem",
            padding: ".6rem 1.2rem",
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(to bottom, #ffe066, #e0a800)",
            fontWeight: "bold"
          }}
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

export default CashQRModal;
