"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Card = ({
  title,
  description,
  image,
  href,
  className = "",
  imageAspect = "square", // 'square', 'video', 'portrait'
  ...props
}) => {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  };

  const cardContent = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group bg-gradient-to-br from-white to-warm-50/20 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${className}`}
      {...props}
    >
      {image && (
        <div
          className={`relative w-full ${aspectClasses[imageAspect]} overflow-hidden`}
        >
          <Image
            src={image}
            alt={title || "Card image"}
            fill
            className="object-cover transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {(title || description) && (
        <div className="p-4">
          {title && (
            <h3 className="text-primary-400 text-base font-medium leading-normal mb-2 group-hover:text-primary-200 transition-colors duration-300">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-primary-300 text-sm font-normal leading-normal">
              {description}
            </p>
          )}
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default Card;
