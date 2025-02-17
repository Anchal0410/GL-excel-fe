
'use client';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-6">
          {/* Your navigation content */}
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-6">
          {/* Your footer content */}
        </div>
      </footer>
    </div>
  );
}