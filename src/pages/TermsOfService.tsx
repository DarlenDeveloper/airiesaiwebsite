import { motion } from 'framer-motion';
import './pages.css';

const TermsOfService = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="terms-page">
      <div className="page-container">
        <div className="page-header">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Terms of Service for Airies AI
          </motion.h1>
          <motion.p 
            className="text-gray-500 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Last Updated: 21|04|2025
          </motion.p>
        </div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="animate-fade-in">
            Welcome to Airies AI. These Terms of Service ("ToS" or "Terms") govern your access to and use of the Airies AI platform, including all related services, features, content, and tools (collectively, the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms in their entirety. If you do not agree to these Terms, you are not permitted to use the Platform under any circumstances.
          </motion.p>

          <motion.h2 variants={itemVariants}>1. Acceptance of Terms</motion.h2>
          <motion.p variants={itemVariants}>
            These Terms form a legally binding agreement between you ("User," "you," or "your") and Airies AI ("we," "us," or "our"). By registering for an account, accessing, or otherwise interacting with the Platform, you confirm that you have read, understood, and agree to comply with these Terms and our accompanying Privacy Policy. If you are using the Platform on behalf of a business, organization, or other legal entity, you represent and warrant that you have the full authority to bind that entity to these Terms, and "you" will refer to both you and that entity collectively.
          </motion.p>
          <motion.p variants={itemVariants}>
            We reserve the right to update or modify these Terms at our discretion. Should we make material changes, we will notify you through reasonable means, such as via email to the address associated with your account or by displaying a prominent notice on the Platform. Such notifications will be provided at least 30 days prior to the changes taking effect, unless immediate changes are required by law. Your continued use of the Platform following the effective date of any updates constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically to stay informed of any modifications. If you disagree with the updated Terms, your sole remedy is to discontinue using the Platform and terminate your account prior to the effective date of the changes.
          </motion.p>

          <motion.h2 variants={itemVariants}>2. Scope of Services</motion.h2>
          <motion.p variants={itemVariants}>
            Airies AI provides a business-to-business (B2B) platform designed to empower businesses with AI-powered customer care agents. The Platform encompasses a variety of features and services, including but not limited to:
          </motion.p>
          <motion.ul variants={itemVariants}>
            <li>AI Agent Creation and Customization: Tools to design and tailor AI agents to meet specific business needs.</li>
            <li>Training Tools: Resources for training AI models with custom datasets or predefined parameters.</li>
            <li>Telephony Integrations: Connectivity with services like Twilio and Africa's Talking for seamless communication.</li>
            <li>Real-Time Analytics: Dashboards providing insights into agent performance, customer interactions, and system usage.</li>
            <li>Data Management: Secure storage, retrieval, and processing of business and user data.</li>
            <li>Customer Support: Access to documentation, tutorials, and a support team for assistance.</li>
          </motion.ul>
          <motion.p variants={itemVariants}>
            The Platform is dynamic and may evolve over time. We may, at our sole discretion and without prior notice, modify, enhance, suspend, or discontinue any aspect of the Platform. This includes adding new functionalities, removing outdated features, adjusting the user interface, or updating underlying technologies. While we strive to maintain continuity, we will endeavor to notify users of significant changes that may materially impact their ability to use the Platform, such as the discontinuation of a core feature. Such notifications may be delivered via email, in-app messages, or other reasonable methods.
          </motion.p>

          <motion.div className="fancy-box" variants={itemVariants}>
            <motion.h2 variants={itemVariants}>3. User Accounts and Responsibilities</motion.h2>
            <motion.h3 variants={itemVariants}>3.1 Account Registration</motion.h3>
            <motion.p variants={itemVariants}>To access certain features of the Platform, you must register for an account. During registration, you agree to:</motion.p>
            <motion.ul variants={itemVariants}>
              <li>Provide accurate, current, and complete information, including your name, email address, and business details.</li>
              <li>Promptly update your account information if any changes occur, such as a new email address or contact number.</li>
              <li>Safeguard your login credentials, including your username and password, and refrain from sharing them with third parties.</li>
              <li>Immediately notify us at <span className="highlight-text">support@airiesai.com</span> if you suspect unauthorized access to your account or any other security breach.</li>
            </motion.ul>
          </motion.div>

          <motion.h2 variants={itemVariants}>3.2 Account Security</motion.h2>
          <motion.p variants={itemVariants}>
            To ensure the integrity of your account, you agree to adhere to the following security practices:
          </motion.p>
          <motion.ul variants={itemVariants}>
            <li>Create a strong password incorporating a mix of uppercase and lowercase letters, numbers, and special characters (e.g., !, @, #).</li>
            <li>Update your password periodically, at least every six months, or sooner if a breach is suspected.</li>
            <li>Enable 2FA if provided, adding an additional layer of protection through a secondary verification method (e.g., a code sent to your phone).</li>
            <li>Log out of your account after each session, particularly when using shared, public, or unsecured devices.</li>
          </motion.ul>
          <motion.p variants={itemVariants}>
            If you forget your password, you may initiate a reset by selecting the "Forgot Password" option on the login page. A reset link will be sent to the email address tied to your account. Follow the instructions in the email to create a new password. If you encounter issues, contact our support team for assistance.
          </motion.p>

          <motion.h2 variants={itemVariants}>3.3 Acceptable Use</motion.h2>
          <motion.p variants={itemVariants}>
            You agree to use the Platform solely for lawful purposes and in accordance with these Terms. Prohibited activities include, but are not limited to:
          </motion.p>
          <motion.ul variants={itemVariants}>
            <li>Engaging in illegal, fraudulent, or harmful conduct, such as harassment, discrimination, or distributing malicious content.</li>
            <li>Attempting to gain unauthorized access to the Platform, other user accounts, servers, or connected systems.</li>
            <li>Uploading or transmitting content that is defamatory, obscene, pornographic, or violates third-party rights, including intellectual property or privacy rights.</li>
            <li>Disrupting the Platform's functionality by introducing viruses, malware, or other harmful code.</li>
            <li>Sending spam, unsolicited messages, or bulk communications without prior consent.</li>
            <li>Impersonating another individual or entity, or misrepresenting your affiliation with any party.</li>
            <li>Overloading, damaging, or impairing the Platform's infrastructure or performance.</li>
          </motion.ul>
          <motion.p variants={itemVariants}>
            Violations of these policies may result in immediate suspension or termination of your account, at our discretion. We may also report illegal activities to relevant law enforcement authorities and cooperate fully with any investigations.
          </motion.p>

          <motion.h2 variants={itemVariants}>4. Intellectual Property</motion.h2>
          <motion.h3 variants={itemVariants}>4.1 Ownership</motion.h3>
          <motion.p variants={itemVariants}>
            Airies AI retains all rights, title, and interest in the Platform, including its software, algorithms, user interfaces, documentation, trademarks, logos, and other proprietary materials. Your use of the Platform does not grant you any ownership rights or licenses beyond those expressly provided in these Terms. All trademarks, service marks, and logos appearing on the Platform are the exclusive property of Airies AI or their respective third-party owners, and you may not use them without prior written permission.
          </motion.p>

          <motion.h3 variants={itemVariants}>4.2 User Data</motion.h3>
          <motion.p variants={itemVariants}>
            You retain ownership of all data, content, or materials you upload or submit to the Platform ("User Data"). By providing User Data, you grant Airies AI a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, store, process, reproduce, modify, and display such data solely for the purposes of operating, maintaining, and enhancing the Platform. This license extends to creating derivative works, such as aggregated or anonymized datasets for analytics, reporting, or machine learning improvements, provided such works do not identify you or your business without consent.
          </motion.p>
          <motion.p variants={itemVariants}>
            You warrant that you have all necessary rights, permissions, and consents to upload User Data and grant the above license. Airies AI is not responsible for the content of User Data or any disputes arising from its use.
          </motion.p>

          <motion.h3 variants={itemVariants}>4.3 Feedback</motion.h3>
          <motion.p variants={itemVariants}>
            If you submit feedback, suggestions, or ideas about the Platform ("Feedback"), you grant Airies AI a perpetual, irrevocable, royalty-free, worldwide license to use, adapt, and incorporate such Feedback into the Platform or related services without any obligation to compensate or credit you. This includes the right to modify, publish, or commercialize Feedback for purposes such as feature development, marketing, or customer support enhancements.
          </motion.p>

          <motion.h2 variants={itemVariants}>5. Privacy</motion.h2>
          <motion.p variants={itemVariants}>
            Your privacy is a priority for us. Our Privacy Policy provides a comprehensive explanation of how we collect, use, store, disclose, and protect your personal information and User Data. By using the Platform, you consent to these practices as outlined in the Privacy Policy.
          </motion.p>
          <motion.p variants={itemVariants}>
            We adhere to applicable privacy laws, including the General Data Protection Regulation (GDPR) for users in the European Union and the California Consumer Privacy Act (CCPA) for California residents. Depending on your location, you may have rights such as accessing, correcting, or deleting your data. Please refer to the Privacy Policy for details on exercising these rights and our compliance with regional regulations.
          </motion.p>
          <motion.p variants={itemVariants}>
            We implement reasonable technical and organizational measures to safeguard your data, including encryption, access controls, and regular security audits. However, no system is entirely immune to breaches, and we cannot guarantee absolute security.
          </motion.p>

          <motion.h2 variants={itemVariants}>6. Subscription and Payment</motion.h2>
          <motion.h3 variants={itemVariants}>6.1 Subscription Plans</motion.h3>
          <motion.p variants={itemVariants}>
            Certain features of the Platform require a paid subscription. Available plans and pricing are outlined on our Pricing Page and may include:
          </motion.p>
          <motion.ul variants={itemVariants}>
            <li><span className="font-semibold">Starter Plan:</span> Basic AI tools with limited monthly usage and support.</li>
            <li><span className="font-semibold">Professional Plan:</span> Expanded features, higher usage limits, and priority support.</li>
            <li><span className="font-semibold">Enterprise Plan:</span> Fully customized solutions, unlimited usage, and dedicated account management.</li>
          </motion.ul>
          <motion.p variants={itemVariants}>
            We may adjust subscription offerings, pricing, or features at any time. Changes will not affect your current subscription term but will apply upon renewal or if you switch plans.
          </motion.p>

          <motion.h3 variants={itemVariants}>6.2 Payment Terms</motion.h3>
          <motion.p variants={itemVariants}>
            You agree to pay all applicable fees for your selected subscription plan in advance. Payments are non-refundable unless otherwise stated in these Terms or mandated by law. We accept multiple payment methods, including credit/debit cards, wire transfers, and electronic payment services (e.g., PayPal, Stripe), as specified during checkout.
          </motion.p>
          <motion.p variants={itemVariants}>
            If a payment fails (e.g., due to insufficient funds or an expired card), we may suspend your access until payment is successfully processed. You are liable for any additional fees incurred due to payment failures, such as bank charges or penalties.
          </motion.p>

          <motion.h3 variants={itemVariants}>6.3 Billing and Renewals</motion.h3>
          <motion.p variants={itemVariants}>
            Subscriptions are billed on a recurring basis—either monthly or annually—based on your chosen plan. Your subscription will automatically renew at the end of each billing cycle unless canceled at least 48 hours prior to the renewal date. You can manage billing preferences and cancellations via your account dashboard or by contacting our support team.
          </motion.p>
          <motion.p variants={itemVariants}>
            Upon cancellation, you retain access to paid features until the end of your current billing period. No prorated refunds are issued for unused portions of a billing cycle.
          </motion.p>

          <motion.h3 variants={itemVariants}>6.4 Refunds</motion.h3>
          <motion.p variants={itemVariants}>
            Refunds are not typically offered, except where required by applicable law or at our sole discretion (e.g., for significant service disruptions). To request a refund, contact our support team with your account details and a description of the issue.
          </motion.p>

          <motion.h2 variants={itemVariants}>7. Limitation of Liability</motion.h2>
          <motion.p variants={itemVariants}>
            To the fullest extent permitted by law, Airies AI, its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages—including loss of profits, revenue, data, goodwill, or business opportunities—arising from your use of or inability to use the Platform, even if we were advised of the possibility of such damages.
          </motion.p>
          <motion.p variants={itemVariants}>
            Our aggregate liability for any claim related to these Terms or the Platform shall not exceed the total amount you paid to us in the twelve (12) months prior to the claim. This limitation applies regardless of the legal theory (e.g., contract, tort, or statute) and does not waive any non-excludable statutory rights you may have under applicable law.
          </motion.p>

          <motion.h2 variants={itemVariants}>8. Disclaimer of Warranties</motion.h2>
          <motion.p variants={itemVariants}>
            The Platform is provided "as is" and "as available," without warranties of any kind, whether express, implied, or statutory. We do not guarantee that the Platform will:
          </motion.p>
          <motion.ul variants={itemVariants}>
            <li>Operate uninterrupted or error-free.</li>
            <li>Be secure or free from viruses, malware, or other harmful components.</li>
            <li>Meet your specific needs or expectations.</li>
          </motion.ul>
          <motion.p variants={itemVariants}>
            We disclaim all implied warranties, including merchantability, fitness for a particular purpose, non-infringement, accuracy, completeness, or timeliness of information. Your use of the Platform is at your own risk, and we are not liable for any damages resulting from reliance on the Platform's content or services.
          </motion.p>

          <motion.h2 variants={itemVariants}>9. Termination</motion.h2>
          <motion.h3 variants={itemVariants}>9.1 Termination by User</motion.h3>
          <motion.p variants={itemVariants}>
            You may terminate your account at any time by navigating to the account settings page and selecting the termination option or by emailing our support team at support@airiesai.com. Termination ends your access to the Platform, and we recommend exporting any critical data beforehand.
          </motion.p>

          <motion.h3 variants={itemVariants}>9.2 Termination by Airies AI</motion.h3>
          <motion.p variants={itemVariants}>
            We may suspend or terminate your account and access to the Platform without prior notice if you:
          </motion.p>
          <motion.ul variants={itemVariants}>
            <li>Breach these Terms or our acceptable use policies.</li>
            <li>Fail to pay subscription fees after a reasonable grace period.</li>
            <li>Engage in conduct that harms the Platform, other users, or our reputation.</li>
            <li>Are subject to legal or regulatory actions requiring termination.</li>
          </motion.ul>
          <motion.p variants={itemVariants}>
            Termination for cause voids any eligibility for refunds or compensation.
          </motion.p>

          <motion.h3 variants={itemVariants}>9.3 Effect of Termination</motion.h3>
          <motion.p variants={itemVariants}>
            Upon termination, all rights and licenses granted to you under these Terms cease immediately, and you must stop using the Platform. We may retain your User Data post-termination for legal compliance, dispute resolution, or contractual enforcement purposes. You may request data deletion, subject to applicable laws, by contacting us within 30 days of termination.
          </motion.p>

          <motion.h2 variants={itemVariants}>10. Dispute Resolution</motion.h2>
          <motion.h3 variants={itemVariants}>10.1 Governing Law</motion.h3>
          <motion.p variants={itemVariants}>
            These Terms are governed by the laws of Uganda, excluding its conflict of law provisions. Any legal actions not subject to arbitration will be resolved in the courts of Kampala.
          </motion.p>

          <motion.h3 variants={itemVariants}>10.2 Arbitration</motion.h3>
          <motion.p variants={itemVariants}>
            Disputes arising from these Terms or the Platform shall be resolved through binding arbitration under the rules of the Arbitration Association of Uganda. Arbitration will occur in Kampala, conducted by a single arbitrator in English. The arbitrator's decision is final and enforceable in any court of competent jurisdiction. Each party bears its own costs unless the arbitrator awards otherwise.
          </motion.p>

          <motion.h3 variants={itemVariants}>10.3 Class Action Waiver</motion.h3>
          <motion.p variants={itemVariants}>
            You agree to resolve disputes on an individual basis only, waiving any right to participate in class, collective, or representative actions against Airies AI.
          </motion.p>

          <motion.h2 variants={itemVariants}>11. Modifications to the Terms</motion.h2>
          <motion.p variants={itemVariants}>
            We may amend these Terms at our discretion. Material changes will be communicated via email or an in-platform notice at least 30 days before taking effect, unless immediate implementation is legally required. Continued use post-modification signifies acceptance. To reject changes, terminate your account before the effective date.
          </motion.p>

          <motion.h2 variants={itemVariants}>12. Force Majeure</motion.h2>
          <motion.p variants={itemVariants}>
            We are not liable for delays or failures in performing our obligations due to events beyond our reasonable control, such as natural disasters, wars, terrorist acts, government mandates, labor strikes, or disruptions in internet or utility services. We will resume performance as soon as practicable following such events.
          </motion.p>

          <motion.h2 variants={itemVariants}>13. Miscellaneous</motion.h2>
          <motion.h3 variants={itemVariants}>13.1 Entire Agreement</motion.h3>
          <motion.p variants={itemVariants}>
            These Terms, alongside the Privacy Policy and any referenced agreements, constitute the complete understanding between you and Airies AI regarding the Platform, superseding all prior agreements.
          </motion.p>

          <motion.h3 variants={itemVariants}>13.2 Severability</motion.h3>
          <motion.p variants={itemVariants}>
            If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions remain in full effect, and the invalid provision will be reformed to reflect the original intent as closely as legally possible.
          </motion.p>

          <motion.h3 variants={itemVariants}>13.3 Waiver</motion.h3>
          <motion.p variants={itemVariants}>
            Our failure to enforce any provision does not waive it. Waivers must be explicit, written, and signed by an authorized Airies AI representative.
          </motion.p>

          <motion.h3 variants={itemVariants}>13.4 Assignment</motion.h3>
          <motion.p variants={itemVariants}>
            You may not assign your rights or obligations under these Terms without our prior written consent. We may assign these Terms freely, including in cases of mergers, acquisitions, or asset sales.
          </motion.p>

          <motion.h3 variants={itemVariants}>13.5 Contact Information</motion.h3>
          <motion.p variants={itemVariants}>
            For questions or concerns about these Terms, reach out to:
          </motion.p>
          <motion.address variants={itemVariants}>
            Airies AI<br />
            National Innovation Hub<br />
            Nakawa, Kampala, Uganda<br />
            <a href="mailto:devops@najod.co" className="text-accent hover:underline">devops@najod.co</a><br />
            +256778825312
          </motion.address>

          <motion.div className="mt-10 py-6 border-t border-gray-200" variants={itemVariants}>
            <motion.p 
              className="font-medium"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              By accessing or using the Airies AI Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service in their entirety.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService; 