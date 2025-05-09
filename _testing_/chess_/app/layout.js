import "@/app/styles/globals.css";

export const metadata = {
  title: "chess_"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
