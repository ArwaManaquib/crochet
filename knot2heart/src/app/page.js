"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Newsletter from "@/components/ui/Newsletter";

export default function Home() {
  const featuredCategories = [
    {
      title: "Gallery & Tutorials",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-5-WKH_OkI7f4o1lznoIhWF_6-Cm0JSRQwNZZGkxUeo0JpeUHDakhrKb-O5vh5D3vCb8edhRKvht-fkrESWdBH_bfKQB1Ypc5j_YLbI9evfT-gMqM5PKXeAg_Ki9qzKCxv24zSGVk-B-EUrkg03w2eHb89Api0rV7qF6gqcJJVGtCjwsOxa1yv6zYJXOhjNw5xXbwC9B641DIdYv-9f2rgADD9mVpUlJ9ZcQ4Y8gwrJJ1--wesW5nN2YmMAkLTLs1ZBmhdtUs03Gy",
      href: "/gallery",
    },
    {
      title: "Blogs & Stories",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCPWFb_bk-_UGFH4gnruZgjNcbH9K3COeFm0lnowXgjMosngY-mo_j0J5AqV8XUFdQT9svDUKRr3Y1IEWUfFj-TVxRzFsMV5-z_NKPkyqHLC8MnLYXZZiIDVMdU1UGjTkBoJ0RBrb2ilOiYOhKixZOkNcX4W9ye7qIfBXBDFqgBm3SU0Cy4bMG996Nva8bNQG_Qm08EqUtvoY2S8ZpTbU3nnhAejyxOLbqLczysrgBf6AMSEGnfOqjWWkKwF06VZWcPjArd3N8odazR",
      href: "/blog",
    },
  ];

  const highlightedCreations = [
    {
      title: "Beginner's Guide to Crochet",
      description:
        "Learn the basics of crochet with our step-by-step tutorial.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCXxUfJG81zIhWXAbQx5koK41cDriL440odFMuF7u2Sq-6bkQ22gas4LVnXgv0yqfcfnLBruD5tmpwX4vivzh197Qi09DVVlF_1XuWDkdaI2Krci_T0judT3sMuQlNsAq0cnoa0XPXYYowJfyKBacYnDm464AqGCNdWXJQvRS31zU8vWgwNs2TVFcLFEmpYIOmawTW1UN0vrygfB89VzjnSLLixAD_OLolG1XYsBOzVRl5aNGZOR4vydxvb8yvPw5aQRx9e9cxx2U9W",
      href: "/tutorial",
    },
    {
      title: "The Story Behind Our Latest Collection",
      description:
        "Discover the inspiration and process behind our latest crochet collection.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2WEsPvYk1ZMFWt3UCStyctLT6yS1lDJ_de6PJPiJYyD3uf6Rl0GFz5GyevqlVAcG46QZPMxK4EQLKfWXzCe0j_Pi-lob7GX21EQKkKTCRhvaZD_BQtryVgjQprgu9MgFIttqTbnXWRwztspCSeVufdQzyb9cUvV8ZXJzFWOL8BQPFyROn846k_JzQWM6KsGVNYLkRj0Ux-EMBmYfGLekdkUMMGvmLpA-ty6-an63T1uvTsMDhAG3NfgLHkGNkeF5lyWqW23O7SH9g",
      href: "/blog",
    },
    {
      title: "Project Spotlight: Cozy Winter Scarf",
      description: "Get inspired by our community's cozy winter scarf project.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD0j6_sgMsONKKfx0A1vOi9YpT77-XvkesIbeQVfDWq9e4cvaraxK2jU4UZXlKfjCsnSWzrO-jAh5TJ28e37wVfkWAS3y_NKVZ_xzaiQ7mKez3s7t2AMUEJE5dDevcIcHkOLzx2RTynQK5-D6PVbd_QTyAQMlNfkdJhZNAz-h9LlaO6ejXLU-ScxvrOT4VzFsB8bnOb4s-zikNZI2BLRyxrxIB8f1ghbR3qV2vgs6wRjOoEu7auLuObeY5HLPWCvyYI-MsnC6Ev2-dy",
      href: "/gallery",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdQ3rfkEZnyEmm7AJj4RFGWZjN3qQYcxQyOjJuyDZS2h2DqCSH_pgDOw73YuXJC8RezVt5F-Z_vTB-vR-1coZBhJqt4OdRjKe96I_ByT5naBIQyMZmkngsYyk1W3CjEWADWqRDWeIp4lAzxtKg1b-oo0KX21K_mTx6dBBpiFXtuZuubjPlTZbjTK9rp6Sw0C0oEKy-fiWf_hMSI5QcCJRhL9mdx-WZXFc4UpURtuQj2ZJOZ8AIjJeDAYBv4Q3yE0NlDrWjKRWVYxac"
            alt="Crochet background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-200/10 via-black/20 to-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-balance">
              Crafting Stories, One Stitch at a Time
            </h1>
            <p className="text-white text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto text-balance">
              Welcome to Knot2Heart, where every loop tells a tale of creativity
              and passion. Dive into our cozy corner of crochet, filled with
              inspiration, tutorials, and a community that celebrates the art of
              handmade.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button size="lg" className="text-lg px-8 py-4">
                Explore Creations
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-warm-50/30 to-primary-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-primary-400 text-3xl font-bold leading-tight tracking-tight mb-8 px-4"
          >
            Featured Categories
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card
                  title={category.title}
                  image={category.image}
                  href={category.href}
                  imageAspect="square"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted Creations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sage-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-primary-400 text-3xl font-bold leading-tight tracking-tight mb-8 px-4"
          >
            Highlighted Creations
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {highlightedCreations.map((creation, index) => (
              <motion.div
                key={creation.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card
                  title={creation.title}
                  description={creation.description}
                  image={creation.image}
                  href={creation.href}
                  imageAspect="square"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-lavender-50/20 to-warm-50/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-primary-400 text-3xl font-bold leading-tight tracking-tight mb-8 px-4"
          >
            About Knot2Heart
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-8 px-4"
          >
            <div className="flex-1 space-y-4">
              <h3 className="text-primary-400 text-xl font-bold leading-tight">
                Meet Sarah, the Heart Behind Knot2Heart
              </h3>
              <p className="text-primary-300 text-base font-normal leading-relaxed">
                Sarah&apos;s passion for crochet began as a hobby and blossomed
                into a creative journey she loves to share. With a focus on
                cozy, modern designs, Sarah aims to inspire others to pick up a
                hook and create something beautiful.
              </p>
              <Button variant="secondary" className="mt-4">
                Know More
              </Button>
            </div>

            <div className="flex-1 max-w-md">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO1IjNrZt-Wjt2zG6CU-tMyXPANvUPW5uYOpuxuuS21VM_V56wNc3MhuFxgIDlYGcsWFq4zmTKgLRYk86tSj_UZVgxrKw-nlUfx0C8kUSQ9BYB8PQAgVeODR402mH0tOsYq4PGY7qOD1_Z7mJZElkGu5LSPhe4Lq14CvlTsJc1t18QKPTlqzOwIAqa7nor5CnBStEx3_EmCh63SlNJ86eGqJWPPcQiZCwNZBNBonQzLOeT4v2jzoXUdJexaFsjyE02uhcUQJag_0cE"
                  alt="Sarah working on crochet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}
