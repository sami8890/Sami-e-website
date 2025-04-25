"use client";
export interface Project {
    id: number;
    name: string;
    metric: string;
    imageUrl: string;
    category: string;
    description: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    duration?: string;
    views?: number;
    status?: "live" | "development";
}
