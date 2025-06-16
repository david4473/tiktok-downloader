import Link from "next/link";
import { DownloadIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <DownloadIcon className="h-5 w-5 text-primary" />
            <span className="font-semibold">TikTok Downloader</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TikTok Downloader. All rights reserved.
          </p>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/terms" className="text-sm hover:underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
