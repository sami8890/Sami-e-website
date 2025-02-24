"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Globe, Github, Users, Calendar } from "lucide-react";

interface ProjectCardProps {
  project: {
    name: string;
    metric: string;
    imageUrl: string;
    category: string;
    technologies: string[];
    timeline?: {
      started: string;
      completed?: string;
    };
    githubUrl?: string;
    demoUrl?: string;
    engagement?: {
      users?: number;
      commits?: number;
    };
    status?: "live" | "development" | "completed";
  };
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isImageError, setIsImageError] = useState(false);

  // Reset image error state when imageUrl changes
  useEffect(() => {
    setIsImageError(false);
    setImageLoaded(false);
  }, [project.imageUrl]);

  const getStatusConfig = (status?: string) => {
    switch (status) {
      case "live":
        return {
          color: "bg-emerald-500",
          text: "Live",
          textColor: "text-emerald-500",
          bgLight: "bg-emerald-500/10",
        };
      case "development":
        return {
          color: "bg-amber-500",
          text: "In Development",
          textColor: "text-amber-500",
          bgLight: "bg-amber-500/10",
        };
      default:
        return {
          color: "bg-blue-500",
          text: "Completed",
          textColor: "text-blue-500",
          bgLight: "bg-blue-500/10",
        };
    }
  };

  const statusConfig = getStatusConfig(project.status);

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.7,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    initial: {
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.32, 0.72, 0, 1],
      },
    },
  };

  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden bg-zinc-900 cursor-pointer border border-zinc-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      whileHover={{ y: -4 }}
    >
      {/* Image Container */}
      <div className="w-full h-full md:h-[300px] relative overflow-hidden bg-zinc-800">
        <motion.div
          className="relative w-full h-full"
          variants={imageVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          {/* Loading Skeleton */}
          {!imageLoaded && !isImageError && (
            <div className="absolute inset-0 bg-zinc-800">
              <div className="h-full w-full animate-pulse bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 background-animate" />
            </div>
          )}

          {/* Fallback for Image Error */}
          {isImageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
              <span className="text-zinc-600">Image unavailable</span>
            </div>
          )}

          {/* Main Image */}
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.name}
            fill
            className={`object-cover transition-all duration-700 ease-in-out ${
              imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-lg"
            }`}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setImageLoaded(true)}
            onError={() => setIsImageError(true)}
            quality={90}
          />

          {/* Image Overlay Effects */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/20 to-zinc-900 pointer-events-none"
            animate={{
              opacity: isHovered ? 0.8 : 0.6,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex items-center gap-3">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${statusConfig.bgLight} backdrop-blur-sm`}
          >
            <span className="relative flex h-2 w-2">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusConfig.color} opacity-75`}
              />
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${statusConfig.color}`}
              />
            </span>
            <span className={`text-xs font-medium ${statusConfig.textColor}`}>
              {statusConfig.text}
            </span>
          </motion.div>
        </div>

        {/* Project Links */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              className="p-2 rounded-lg bg-zinc-800/90 text-zinc-300 backdrop-blur-sm hover:bg-zinc-700 transition-colors"
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-4 h-4" />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              className="p-2 rounded-lg bg-zinc-800/90 text-zinc-300 backdrop-blur-sm hover:bg-zinc-700 transition-colors"
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6 bg-zinc-900">
        <div className="space-y-4">
          {/* Project Category & Timeline */}
          <div className="flex items-center justify-between">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full"
            >
              {project.category}
            </motion.span>
            {project.timeline && (
              <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>
                  {new Date(project.timeline.started).toLocaleDateString(
                    "en-US",
                    { month: "short", year: "numeric" }
                  )}
                </span>
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="space-y-2">
            <motion.h3
              className="text-xl font-bold text-white"
              animate={{ y: isHovered ? -2 : 0 }}
            >
              {project.name}
            </motion.h3>
            <motion.p
              className="text-emerald-400 font-medium"
              animate={{ y: isHovered ? -1 : 0 }}
            >
              {project.metric}
            </motion.p>
          </div>

          {/* Engagement Metrics */}
          {project.engagement && (
            <div className="flex items-center gap-4 text-sm text-zinc-400">
              {project.engagement.users && (
                <motion.div
                  className="flex items-center gap-1.5"
                  whileHover={{ scale: 1.05, color: "#ffffff" }}
                >
                  <Users className="w-4 h-4" />
                  <span>{project.engagement.users.toLocaleString()} users</span>
                </motion.div>
              )}
              {project.engagement.commits && (
                <motion.div
                  className="flex items-center gap-1.5"
                  whileHover={{ scale: 1.05, color: "#ffffff" }}
                >
                  <Github className="w-4 h-4" />
                  <span>{project.engagement.commits} commits</span>
                </motion.div>
              )}
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgb(63 63 70 / 1)",
                }}
                className="px-2.5 py-1 text-xs bg-zinc-800 text-zinc-400 rounded-lg hover:text-zinc-300 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* View Project Button */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-6 top-1/2 -translate-y-1/2"
            >
              <motion.button
                className="px-4 py-2 rounded-lg bg-emerald-500 text-sm text-white flex items-center gap-2 transition-all hover:bg-emerald-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-emerald-500"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
      />
    </motion.div>
  );
}

export default ProjectCard;
