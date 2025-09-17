"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Tutorial() {
  const steps = [
    {
      title: "Gather Your Materials",
      description:
        "You'll need yarn, a crochet hook, scissors, and a yarn needle.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCPWFb_bk-_UGFH4gnruZgjNcbH9K3COeFm0lnowXgjMosngY-mo_j0J5AqV8XUFdQT9svDUKRr3Y1IEWUfFj-TVxRzFsMV5-z_NKPkyqHLC8MnLYXZZiIDVMdU1UGjTkBoJ0RBrb2ilOiYOhKixZOkNcX4W9ye7qIfBXBDFqgBm3SU0Cy4bMG996Nva8bNQG_Qm08EqUtvoY2S8ZpTbU3nnhAejyxOLbqLczysrgBf6AMSEGnfOqjWWkKwF06VZWcPjArd3N8odazR",
    },
    {
      title: "Start with a Magic Ring",
      description: "Create a magic ring to begin your amigurumi project.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCKMz0Ewfopyyrafj6K3EjQUp8I-AAak1kPo_HRZNmzWO2T3Re6E5DTadJPUkj8v5aaDHFb1c9_3pt9S9fq9dNGS_MOtEy9pJ0Weatx5gD9wyFYtBbCwobqm37JQg4cpFSy-eU76ylR8eztvW8jCOephoEtXbed80-4lUAMpjTS4eJU8jzXCqN58V5sbvfd0Xg4A9NvdwRUTZ5dfriIT-MKKlQwtOecUQhUl5SjZaBvJNqoyk7cV1rrg94M-LSaauHhnkeilGVgTAEz",
    },
    {
      title: "Work in Rounds",
      description:
        "Continue working in rounds, increasing as needed to shape your project.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCXxUfJG81zIhWXAbQx5koK41cDriL440odFMuF7u2Sq-6bkQ22gas4LVnXgv0yqfcfnLBruD5tmpwX4vivzh197Qi09DVVlF_1XuWDkdaI2Krci_T0judT3sMuQlNsAq0cnoa0XPXYYowJfyKBacYnDm464AqGCNdWXJQvRS31zU8vWgwNs2TVFcLFEmpYIOmawTW1UN0vrygfB89VzjnSLLixAD_OLolG1XYsBOzVRl5aNGZOR4vydxvb8yvPw5aQRx9e9cxx2U9W",
    },
    {
      title: "Add Details",
      description:
        "Finish your project by adding eyes, embroidery, or other decorative elements.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBqBneGTWIcT2-EC7LZZlGjWLPWqHR24UD97t3NWq7952AFBN1WtWf2rTh08qZya_zlGI62DMzX2z-x5FhFLnl1bkMrbnYZGIGJZmBun4J839rAPvmwuKqhsb6GrGPv5weWJiasVbsjR7XRIpdaCsXYieXUnJeo3QGfIIXoo0sEBBqmhuNjiBgOH_wVkk0E23b2WOtQuc2elR0ZDNpf7VxZS-MapPcSIJn591mXYuV0B_d8npbbVtnNNs6mVFs2Z6i0gdNqnuDqfh5_",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Tutorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-primary-400 text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
            Beginner&apos;s Crochet Tutorial
          </h1>
          <p className="text-primary-300 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Learn the basics of crochet with this step-by-step tutorial perfect
            for beginners.
          </p>
        </motion.div>

        {/* Tutorial Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center gap-8"
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary-200 text-primary-400 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h2 className="text-primary-400 text-2xl font-bold leading-tight">
                    {step.title}
                  </h2>
                </div>
                <p className="text-primary-300 text-base font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="flex-1 max-w-md">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tutorial Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16 bg-gradient-to-r from-sage-50/50 to-lavender-50/50 rounded-lg p-8 border border-sage-100"
        >
          <h2 className="text-primary-400 text-2xl font-bold leading-tight mb-4">
            Ready for More?
          </h2>
          <p className="text-primary-300 text-base font-normal leading-relaxed mb-6">
            Explore our gallery for more project ideas and tutorials to continue
            your crochet journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>View Gallery</Button>
            <Button variant="secondary">More Tutorials</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
