import { motion } from 'framer-motion';
import './pages.css';

const PrivacyPolicy = () => {
  // Get current date for the "Last Updated" field
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}|${(currentDate.getMonth() + 1).toString().padStart(2, '0')}|${currentDate.getFullYear()}`;

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section className="privacy-page">
      <div className="page-container">
        <div className="page-header">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Privacy Policy for Airies AI
          </motion.h1>
          <motion.p 
            className="text-gray-500 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Last Updated: {formattedDate}
          </motion.p>
        </div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="animate-fade-in">
            At Airies AI, we are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, share, and protect the information you provide when using our platform, services, and website (collectively, the "Platform"). By accessing or using the Platform, you consent to the practices described in this Privacy Policy.
          </motion.p>

          <motion.h2 variants={itemVariants}>1. Introduction</motion.h2>
          <motion.p variants={itemVariants}>
            This Privacy Policy applies to all users of the Airies AI Platform, including business customers, their employees, and end-users interacting with our AI-powered customer care agents. We handle your data in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
          </motion.p>

          <motion.div className="fancy-box" variants={itemVariants}>
            <motion.h2 variants={itemVariants}>2. Information We Collect</motion.h2>
            <motion.p variants={itemVariants}>
              We collect various types of information to provide and improve our services:
            </motion.p>
            
            <motion.h3 variants={itemVariants}>2.1 Personal Information</motion.h3>
            <motion.ul variants={itemVariants}>
              <li><span className="highlight-text">Account Data:</span> When you register for an account, we collect your name, email address, company name, and contact details.</li>
              <li><span className="highlight-text">Payment Information:</span> If you subscribe to a paid plan, we collect billing information such as credit card details or bank account information.</li>
              <li><span className="highlight-text">Communication Data:</span> Information you provide when contacting us for support or inquiries, including emails, chat logs, and call recordings.</li>
            </motion.ul>

            <motion.h3 variants={itemVariants}>2.2 Usage Data</motion.h3>
            <motion.ul variants={itemVariants}>
              <li><span className="highlight-text">Platform Interactions:</span> We collect data on how you use the Platform, such as pages visited, features accessed, and time spent.</li>
              <li><span className="highlight-text">Device Information:</span> Details about your device, including IP address, browser type, operating system, and unique device identifiers.</li>
              <li><span className="highlight-text">AI Interaction Data:</span> For businesses using our AI agents, we collect data on customer interactions, including call logs, transcripts, and resolution statuses.</li>
            </motion.ul>

            <motion.h3 variants={itemVariants}>2.3 Cookies and Tracking Technologies</motion.h3>
            <motion.p variants={itemVariants}>
              We use cookies, web beacons, and similar technologies to enhance your experience, analyze usage, and deliver personalized content. For more details, see Section 7.
            </motion.p>
          </motion.div>

          <motion.h2 variants={itemVariants}>3. How We Use Your Information</motion.h2>
          <motion.p variants={itemVariants}>
            We use the collected data for the following purposes:
          </motion.p>
          <motion.ul variants={itemVariants} className="animate-slide-left">
            <li><span className="highlight-text">Service Provision:</span> To create and manage your account, provide access to the Platform, and deliver our AI-powered customer care services.</li>
            <li><span className="highlight-text">Improvement and Development:</span> To analyze usage patterns, improve existing features, and develop new functionalities.</li>
            <li><span className="highlight-text">Customer Support:</span> To respond to your inquiries, provide technical assistance, and resolve issues.</li>
            <li><span className="highlight-text">Billing and Payments:</span> To process payments, manage subscriptions, and handle billing disputes.</li>
            <li><span className="highlight-text">Marketing and Communications:</span> To send you updates, newsletters, promotional offers, and other information about our services (you can opt-out at any time).</li>
            <li><span className="highlight-text">Legal Compliance:</span> To comply with legal obligations, such as responding to lawful requests from authorities or enforcing our Terms of Service.</li>
          </motion.ul>

          <motion.h2 variants={itemVariants}>4. Data Sharing and Disclosure</motion.h2>
          <motion.p variants={itemVariants}>
            We may share your information in the following circumstances:
          </motion.p>
          <motion.ul variants={itemVariants} className="animate-slide-right">
            <li><span className="highlight-text">Service Providers:</span> With third-party vendors who assist us in operating the Platform, such as hosting providers, payment processors, and analytics services. These providers are contractually obligated to protect your data.</li>
            <li><span className="highlight-text">Business Partners:</span> With partners involved in delivering integrated services, such as telephony providers (e.g., Twilio, Africa's Talking).</li>
            <li><span className="highlight-text">Legal Requirements:</span> When required by law, such as in response to subpoenas, court orders, or to protect our rights, property, or safety.</li>
            <li><span className="highlight-text">Business Transfers:</span> In connection with a merger, acquisition, or sale of assets, your data may be transferred to the new entity, subject to this Privacy Policy.</li>
            <li><span className="highlight-text">Aggregated Data:</span> We may share anonymized or aggregated data for research, marketing, or statistical purposes.</li>
          </motion.ul>
          <motion.p variants={itemVariants} className="font-medium animate-pulse">
            We do not sell your personal information to third parties.
          </motion.p>

          <motion.h2 variants={itemVariants}>5. Data Security</motion.h2>
          <motion.p variants={itemVariants}>
            We implement robust technical and organizational measures to protect your data from unauthorized access, alteration, or destruction. These measures include:
          </motion.p>
          <motion.ul variants={itemVariants}>
            <li><span className="highlight-text">Encryption:</span> Data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption provided by supabase.</li>
            <li><span className="highlight-text">Access Controls:</span> Strict access controls and authentication protocols to ensure only authorized personnel can access sensitive data.</li>
            <li><span className="highlight-text">Regular Audits:</span> Ongoing security assessments and audits to identify and mitigate potential vulnerabilities.</li>
            <li><span className="highlight-text">Incident Response:</span> A comprehensive plan to respond to and recover from data breaches or security incidents.</li>
          </motion.ul>
          <motion.p variants={itemVariants}>
            Despite these measures, no system is completely secure. If a breach occurs, we will notify affected users as required by law and take steps to mitigate the impact.
          </motion.p>

          <motion.h2 variants={itemVariants}>6. Your Rights and Choices</motion.h2>
          <motion.p variants={itemVariants}>
            Depending on your location, you may have the following rights regarding your personal data:
          </motion.p>
          <motion.div className="grid md:grid-cols-2 gap-4" variants={itemVariants}>
            <motion.div 
              className="fancy-box"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <h3 className="text-lg font-bold mb-2">Data Control Rights</h3>
              <motion.ul variants={itemVariants}>
                <li><span className="highlight-text">Access:</span> Request a copy of the data we hold about you.</li>
                <li><span className="highlight-text">Correction:</span> Update or correct inaccurate or incomplete data.</li>
                <li><span className="highlight-text">Deletion:</span> Request the deletion of your data, subject to legal retention requirements.</li>
              </motion.ul>
            </motion.div>
            <motion.div 
              className="fancy-box"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <h3 className="text-lg font-bold mb-2">Usage Control Rights</h3>
              <motion.ul variants={itemVariants}>
                <li><span className="highlight-text">Restriction:</span> Limit how we process your data in certain circumstances.</li>
                <li><span className="highlight-text">Portability:</span> Receive your data in a structured, machine-readable format.</li>
                <li><span className="highlight-text">Objection:</span> Object to the processing of your data for specific purposes, such as marketing.</li>
              </motion.ul>
            </motion.div>
          </motion.div>
          <motion.p variants={itemVariants}>
            To exercise these rights, contact us via our <a href="https://calendly.com/hello-darlendev/30min" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">scheduling page</a>. We will respond to your request within the timeframes required by law (e.g., 30 days under GDPR).
          </motion.p>

          <motion.h3 variants={itemVariants}>6.1 Opting Out of Marketing</motion.h3>
          <motion.p variants={itemVariants}>
            You can opt-out of receiving marketing communications by clicking the "unsubscribe" link in emails or adjusting your account settings.
          </motion.p>

          <motion.h2 variants={itemVariants}>7. Cookies and Tracking Technologies</motion.h2>
          <motion.p variants={itemVariants}>
            We use cookies and similar technologies to enhance your experience and analyze usage:
          </motion.p>
          <motion.ul variants={itemVariants}>
            <li><span className="highlight-text">Essential Cookies:</span> Necessary for the Platform's functionality, such as maintaining your session.</li>
            <li><span className="highlight-text">Performance Cookies:</span> Collect data on how users interact with the Platform to improve performance.</li>
            <li><span className="highlight-text">Marketing Cookies:</span> Used to deliver personalized ads and track campaign effectiveness.</li>
          </motion.ul>
          <motion.p variants={itemVariants}>
            You can manage cookie preferences through your browser settings. However, disabling essential cookies may affect the Platform's functionality.
          </motion.p>

          <motion.h2 variants={itemVariants}>8. International Data Transfers</motion.h2>
          <motion.p variants={itemVariants}>
            Airies AI operates globally, and your data may be transferred to and processed in countries outside your jurisdiction, including the United States. We ensure that such transfers comply with applicable data protection laws, using mechanisms like Standard Contractual Clauses (SCCs) or adequacy decisions.
          </motion.p>

          <motion.h2 variants={itemVariants}>9. Changes to This Privacy Policy</motion.h2>
          <motion.p variants={itemVariants}>
            We may update this Privacy Policy to reflect changes in our practices or legal requirements. If we make material changes, we will notify you via email or through the Platform at least 30 days before the changes take effect. Your continued use of the Platform after the effective date constitutes acceptance of the updated policy.
          </motion.p>

          <motion.h2 variants={itemVariants}>10. Contact Us</motion.h2>
          <motion.p variants={itemVariants}>
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </motion.p>
          <address className="mt-2 mb-6">
            Airies AI<br />
            National Innovation Hub<br />
            Nakawa, Kampala, Uganda<br />
            Contact us via our <a href="https://calendly.com/hello-darlendev/30min" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">scheduling page</a><br />
            +256778825312
          </address>

          <motion.div className="mt-10 py-6 border-t border-gray-200" variants={itemVariants}>
            <motion.p 
              className="font-medium"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              By using the Airies AI Platform, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and sharing of your information as described herein.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy; 