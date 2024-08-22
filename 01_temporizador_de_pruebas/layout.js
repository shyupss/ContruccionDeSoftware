import "@/app/styles/globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "cronometro de pruebas"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers> {children} </Providers>
      </body>
    </html>
  );
}
