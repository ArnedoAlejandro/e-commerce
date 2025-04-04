
export default function  AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-emerald-500">
      {children}
    </div>
  );
}