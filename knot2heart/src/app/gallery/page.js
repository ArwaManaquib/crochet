'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

export default function Gallery() {
  const galleryItems = [
    {
      title: 'Crochet Duck',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqBneGTWIcT2-EC7LZZlGjWLPWqHR24UD97t3NWq7952AFBN1WtWf2rTh08qZya_zlGI62DMzX2z-x5FhFLnl1bkMrbnYZGIGJZmBun4J839rAPvmwuKqhsb6GrGPv5weWJiasVbsjR7XRIpdaCsXYieXUnJeo3QGfIIXoo0sEBBqmhuNjiBgOH_wVkk0E23b2WOtQuc2elR0ZDNpf7VxZS-MapPcSIJn591mXYuV0B_d8npbbVtnNNs6mVFs2Z6i0gdNqnuDqfh5_',
      href: '/tutorial',
    },
    {
      title: 'Amigurumi Bear',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKMz0Ewfopyyrafj6K3EjQUp8I-AAak1kPo_HRZNmzWO2T3Re6E5DTadJPUkj8v5aaDHFb1c9_3pt9S9fq9dNGS_MOtEy9pJ0Weatx5gD9wyFYtBbCwobqm37JQg4cpFSy-eU76ylR8eztvW8jCOephoEtXbed80-4lUAMpjTS4eJU8jzXCqN58V5sbvfd0Xg4A9NvdwRUTZ5dfriIT-MKKlQwtOecUQhUl5SjZaBvJNqoyk7cV1rrg94M-LSaauHhnkeilGVgTAEz',
      href: '/tutorial',
    },
    {
      title: 'Cozy Blanket',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXxUfJG81zIhWXAbQx5koK41cDriL440odFMuF7u2Sq-6bkQ22gas4LVnXgv0yqfcfnLBruD5tmpwX4vivzh197Qi09DVVlF_1XuWDkdaI2Krci_T0judT3sMuQlNsAq0cnoa0XPXYYowJfyKBacYnDm464AqGCNdWXJQvRS31zU8vWgwNs2TVFcLFEmpYIOmawTW1UN0vrygfB89VzjnSLLixAD_OLolG1XYsBOzVRl5aNGZOR4vydxvb8yvPw5aQRx9e9cxx2U9W',
      href: '/tutorial',
    },
    {
      title: 'Flower Bouquet',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2WEsPvYk1ZMFWt3UCStyctLT6yS1lDJ_de6PJPiJYyD3uf6Rl0GFz5GyevqlVAcG46QZPMxK4EQLKfWXzCe0j_Pi-lob7GX21EQKkKTCRhvaZD_BQtryVgjQprgu9MgFIttqTbnXWRwztspCSeVufdQzyb9cUvV8ZXJzFWOL8BQPFyROn846k_JzQWM6KsGVNYLkRj0Ux-EMBmYfGLekdkUMMGvmLpA-ty6-an63T1uvTsMDhAG3NfgLHkGNkeF5lyWqW23O7SH9g',
      href: '/tutorial',
    },
    {
      title: 'Winter Scarf',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0j6_sgMsONKKfx0A1vOi9YpT77-XvkesIbeQVfDWq9e4cvaraxK2jU4UZXlKfjCsnSWzrO-jAh5TJ28e37wVfkWAS3y_NKVZ_xzaiQ7mKez3s7t2AMUEJE5dDevcIcHkOLzx2RTynQK5-D6PVbd_QTyAQMlNfkdJhZNAz-h9LlaO6ejXLU-ScxvrOT4VzFsB8bnOb4s-zikNZI2BLRyxrxIB8f1ghbR3qV2vgs6wRjOoEu7auLuObeY5HLPWCvyYI-MsnC6Ev2-dy',
      href: '/tutorial',
    },
    {
      title: 'Baby Booties',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdQ3rfkEZnyEmm7AJj4RFGWZjN3qQYcxQyOjJuyDZS2h2DqCSH_pgDOw73YuXJC8RezVt5F-Z_vTB-vR-1coZBhJqt4OdRjKe96I_ByT5naBIQyMZmkngsYyk1W3CjEWADWqRDWeIp4lAzxtKg1b-oo0KX21K_mTx6dBBpiFXtuZuubjPlTZbjTK9rp6Sw0C0oEKy-fiWf_hMSI5QcCJRhL9mdx-WZXFc4UpURtuQj2ZJOZ8AIjJeDAYBv4Q3yE0NlDrWjKRWVYxac',
      href: '/tutorial',
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-primary-400 text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
            Gallery of Creations
          </h1>
          <p className="text-primary-300 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Explore our collection of beautiful crochet projects, from beginner-friendly patterns to advanced masterpieces.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card
                title={item.title}
                image={item.image}
                href={item.href}
                imageAspect="square"
                className="h-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-primary-400 text-2xl font-bold leading-tight mb-4">
            Ready to Start Your Own Project?
          </h2>
          <p className="text-primary-300 text-base font-normal leading-relaxed mb-6">
            Browse our tutorials and learn how to create these beautiful pieces yourself.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
