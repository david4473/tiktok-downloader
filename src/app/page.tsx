import VideoDownloader from "@/components/video-downloader";
import Header from "./header";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            TikTok Video <span className="text-primary">Downloader</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Download TikTok videos without watermark in HD quality. Fast,
            secure, and completely free.
          </p>

          <VideoDownloader />
        </section>

        <section id="how-it-works" className="mb-16">
          <h2 className="mb-6 text-center text-3xl font-bold">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-card p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Copy TikTok Link</h3>
              <p className="text-muted-foreground">
                Copy the link of the TikTok video you want to download from the
                TikTok app or website.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Paste the Link</h3>
              <p className="text-muted-foreground">
                Paste the TikTok video link in the input field above and click
                the &quot;Download&quot; button.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Download Video</h3>
              <p className="text-muted-foreground">
                Click the download button to save the TikTok video without
                watermark to your device.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="mb-6 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold">
                Is this TikTok downloader free to use?
              </h3>
              <p className="text-muted-foreground">
                Yes, our TikTok video downloader is completely free to use with
                no hidden charges or limitations.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold">
                Can I download TikTok videos without watermark?
              </h3>
              <p className="text-muted-foreground">
                Yes, our tool removes the TikTok watermark from the videos,
                giving you clean, high-quality downloads.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold">
                Is it legal to download TikTok videos?
              </h3>
              <p className="text-muted-foreground">
                Downloading videos for personal use is generally acceptable.
                However, please respect copyright laws and do not use downloaded
                content for commercial purposes without permission.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold">
                What devices can I use this TikTok downloader on?
              </h3>
              <p className="text-muted-foreground">
                Our TikTok video downloader works on all devices including
                smartphones, tablets, and computers, as long as you have a web
                browser.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
