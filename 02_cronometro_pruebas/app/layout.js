import "@/app/styles/globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "૮₍ ˃ ⤙ ˂ ₎ა"
};

export default function RootLayout({ children }) {

  // const [contador, setContador] = useState(0);  

  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
