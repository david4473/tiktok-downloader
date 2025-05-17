import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for TikTok Video Downloader",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/"
        className="mb-8 flex items-center gap-2 text-sm hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>

        <div className="prose prose-gray dark dark:prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Information We Collect</h2>
          <p>
            When you use our TikTok Video Downloader service, we may collect the
            following information:
          </p>
          <ul>
            <li>TikTok video URLs that you submit for downloading</li>
            <li>IP address and browser information</li>
            <li>Usage data such as download frequency and features used</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To improve and optimize our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent, and address technical issues</li>
          </ul>

          <h2>3. Data Retention</h2>
          <p>
            We retain the TikTok URLs you submit only for the duration necessary
            to process your download request. We do not store the actual video
            content on our servers. Usage data may be retained for a longer
            period for analytical purposes.
          </p>

          <h2>4. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity
            on our service and hold certain information. You can instruct your
            browser to refuse all cookies or to indicate when a cookie is being
            sent.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            We may employ third-party companies and individuals to facilitate
            our service, provide the service on our behalf, perform
            service-related services, or assist us in analyzing how our service
            is used. These third parties have access to your information only to
            perform these tasks on our behalf.
          </p>

          <h2>6. Security</h2>
          <p>
            We value your trust in providing us your information, thus we strive
            to use commercially acceptable means of protecting it. However, no
            method of transmission over the internet or method of electronic
            storage is 100% secure and reliable, and we cannot guarantee its
            absolute security.
          </p>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            Our service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from children
            under 13.
          </p>

          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at <a href="mailto:privacy@example.com">privacy@example.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
