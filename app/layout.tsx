import '../styles/globals.css';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <head />
      <body>
        <div className='flex'>
          {/* Sidebar */}

          {/* ClientProvider - Notifications */}
          <div className='bg-[#343541] flex-1 mt-3'>{children}</div>
        </div>
      </body>
    </html>
  );
}
