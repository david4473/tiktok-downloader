import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for TikTok Video Downloader",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold">Terms of Service</h1>

        <div className="prose prose-gray dark dark:prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the TikTok Video Downloader service, you agree
            to be bound by these Terms of Service. If you do not agree to these
            terms, please do not use our service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            TikTok Video Downloader provides a service that allows users to
            download videos from TikTok for personal, non-commercial use. We do
            not host any content ourselves but provide a technical service to
            access publicly available content.
          </p>

          <h2>3. User Conduct</h2>
          <p>You agree not to use our service to:</p>
          <ul>
            <li>
              Download content for commercial purposes without proper
              authorization
            </li>
            <li>Violate any intellectual property rights</li>
            <li>
              Distribute downloaded content in a way that infringes on the
              original creator&apos;s rights
            </li>
            <li>
              Use automated systems or software to extract data from our service
              (scraping)
            </li>
            <li>
              Attempt to interfere with or compromise the system integrity or
              security
            </li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content downloaded through our service belongs to its original
            creators. Our service does not claim ownership of any content
            downloaded through the use of our tools. Users must respect the
            intellectual property rights of the original content creators.
          </p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            The service is provided &quot;as is&quot; without warranties of any
            kind, either express or implied. We do not guarantee that the
            service will be uninterrupted, timely, secure, or error-free.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            We shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from your use of or
            inability to use the service.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will
            provide notice of significant changes by posting the new terms on
            our website. Your continued use of the service after such
            modifications constitutes your acceptance of the revised terms.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with
            the laws of [Your Jurisdiction], without regard to its conflict of
            law provisions.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:support@example.com">support@example.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
