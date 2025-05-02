import Link from "next/link";
import { DownloadIcon } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Header() {
  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <DownloadIcon className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">TikTok Downloader</h1>
        </Link>
        <div className="flex items-center gap-4">
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/#how-it-works" className="text-sm hover:underline">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-sm hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
