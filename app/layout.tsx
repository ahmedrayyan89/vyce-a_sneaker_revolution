// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'VYCE - Premium Sneakers & Streetwear',
//   description: 'Premium sneakers and streetwear for those who define the culture. Exclusive drops, limited editions, and timeless classics.',
// };

// // Client component wrapper
// 'use client';
// const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
//   const [mounted, setMounted] = React.useState(false);

//   React.useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return children;
// };

// // Server component
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ClientWrapper>{children}</ClientWrapper>
//       </body>
//     </html>
//   );
// }
// new code
// 'use client'; // ✅ Moved to the top

// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import React from 'react'; // ✅ Added missing import for React

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'VYCE - Premium Sneakers & Streetwear',
//   description: 'Premium sneakers and streetwear for those who define the culture. Exclusive drops, limited editions, and timeless classics.',
// };

// // Client component wrapper
// const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
//   const [mounted, setMounted] = React.useState(false);

//   React.useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return children;
// };

// // Server component
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ClientWrapper>{children}</ClientWrapper>
//       </body>
//     </html>
//   );
// };
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// ✅ metadata is allowed here because this is a Server Component
export const metadata: Metadata = {
  title: 'VYCE - Premium Sneakers & Streetwear',
  description: 'Premium sneakers and streetwear for those who define the culture. Exclusive drops, limited editions, and timeless classics.',
};

// ✅ Remove 'use client' from this file
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap with ClientWrapper if needed */}
        {children}
      </body>
    </html>
  );
}