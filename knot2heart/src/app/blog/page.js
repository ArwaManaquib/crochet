"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Art of Choosing the Perfect Yarn",
      description:
        "Discover how to select the right yarn for your crochet projects, from fiber types to weight considerations.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCPWFb_bk-_UGFH4gnruZgjNcbH9K3COeFm0lnowXgjMosngY-mo_j0J5AqV8XUFdQT9svDUKRr3Y1IEWUfFj-TVxRzFsMV5-z_NKPkyqHLC8MnLYXZZiIDVMdU1UGjTkBoJ0RBrb2ilOiYOhKixZOkNcX4W9ye7qIfBXBDFqgBm3SU0Cy4bMG996Nva8bNQG_Qm08EqUtvoY2S8ZpTbU3nnhAejyxOLbqLczysrgBf6AMSEGnfOqjWWkKwF06VZWcPjArd3N8odazR",
      href: "#",
    },
    {
      title: "My Journey into Amigurumi",
      description:
        "Follow my personal story of discovering the joy of creating adorable amigurumi characters.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCKMz0Ewfopyyrafj6K3EjQUp8I-AAak1kPo_HRZNmzWO2T3Re6E5DTadJPUkj8v5aaDHFb1c9_3pt9S9fq9dNGS_MOtEy9pJ0Weatx5gD9wyFYtBbCwobqm37JQg4cpFSy-eU76ylR8eztvW8jCOephoEtXbed80-4lUAMpjTS4eJU8jzXCqN58V5sbvfd0Xg4A9NvdwRUTZ5dfriIT-MKKlQwtOecUQhUl5SjZaBvJNqoyk7cV1rrg94M-LSaauHhnkeilGVgTAEz",
      href: "#",
    },
    {
      title: "Creating Cozy Spaces with Handmade Textiles",
      description:
        "Learn how to transform your home with beautiful, handcrafted crochet pieces that add warmth and personality.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCXxUfJG81zIhWXAbQx5koK41cDriL440odFMuF7u2Sq-6bkQ22gas4LVnXgv0yqfcfnLBruD5tmpwX4vivzh197Qi09DVVlF_1XuWDkdaI2Krci_T0judT3sMuQlNsAq0cnoa0XPXYYowJfyKBacYnDm464AqGCNdWXJQvRS31zU8vWgwNs2TVFcLFEmpYIOmawTW1UN0vrygfB89VzjnSLLixAD_OLolG1XYsBOzVRl5aNGZOR4vydxvb8yvPw5aQRx9e9cxx2U9W",
      href: "#",
    },
    {
      title: "The Therapeutic Benefits of Crochet",
      description:
        "Explore how the rhythmic motions of crochet can provide stress relief and mindfulness in our busy lives.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2WEsPvYk1ZMFWt3UCStyctLT6yS1lDJ_de6PJPiJYyD3uf6Rl0GFz5GyevqlVAcG46QZPMxK4EQLKfWXzCe0j_Pi-lob7GX21EQKkKTCRhvaZD_BQtryVgjQprgu9MgFIttqTbnXWRwztspCSeVufdQzyb9cUvV8ZXJzFWOL8BQPFyROn846k_JzQWM6KsGVNYLkRj0Ux-EMBmYfGLekdkUMMGvmLpA-ty6-an63T1uvTsMDhAG3NfgLHkGNkeF5lyWqW23O7SH9g",
      href: "#",
    },
    {
      title: "Seasonal Crochet: Winter Warmth Projects",
      description:
        "Discover cozy winter crochet projects that will keep you warm and stylish throughout the cold months.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD0j6_sgMsONKKfx0A1vOi9YpT77-XvkesIbeQVfDWq9e4cvaraxK2jU4UZXlKfjCsnSWzrO-jAh5TJ28e37wVfkWAS3y_NKVZ_xzaiQ7mKez3s7t2AMUEJE5dDevcIcHkOLzx2RTynQK5-D6PVbd_QTyAQMlNfkdJhZNAz-h9LlaO6ejXLU-ScxvrOT4VzFsB8bnOb4s-zikNZI2BLRyxrxIB8f1ghbR3qV2vgs6wRjOoEu7auLuObeY5HLPWCvyYI-MsnC6Ev2-dy",
      href: "#",
    },
    {
      title: "Building a Crochet Community",
      description:
        "The importance of connecting with fellow crafters and how our community supports each other's creative journeys.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBO1IjNrZt-Wjt2zG6CU-tMyXPANvUPW5uYOpuxuuS21VM_V56wNc3MhuFxgIDlYGcsWFq4zmTKgLRYk86tSj_UZVgxrKw-nlUfx0C8kUSQ9BYB8PQAgVeODR402mH0tOsYq4PGY7qOD1_Z7mJZElkGu5LSPhe4Lq14CvlTsJc1t18QKPTlqzOwIAqa7nor5CnBStEx3_EmCh63SlNJ86eGqJWPPcQiZCwNZBNBonQzLOeT4v2jzoXUdJexaFsjyE02uhcUQJag_0cE",
      href: "#",
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
            Stories & Inspiration
          </h1>
          <p className="text-primary-300 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Dive into our collection of stories, tips, and inspiration from the
            world of crochet and handmade crafts.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card
                title={post.title}
                description={post.description}
                image={post.image}
                href={post.href}
                imageAspect="video"
                className="h-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16 bg-gradient-to-r from-warm-50/50 to-sage-50/50 rounded-lg p-8 border border-warm-100"
        >
          <h2 className="text-primary-400 text-2xl font-bold leading-tight mb-4">
            Never Miss a Story
          </h2>
          <p className="text-primary-300 text-base font-normal leading-relaxed mb-6">
            Subscribe to our newsletter to get the latest blog posts, tutorials,
            and crochet inspiration delivered to your inbox.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
