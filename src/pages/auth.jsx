import AuthComponent from "../components/Auth";

export default function AuthPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        marginTop: "2rem",
      }}
    >
      <AuthComponent />
    </div>
  );
}
