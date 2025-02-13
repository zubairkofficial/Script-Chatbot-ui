"use client";

import {
  Plus,
  CopyCheck,
  Pencil,
  CircleUserRound,
  SquareCode,
  Paperclip,
  AudioLines,
  FileSearch,
  Ellipsis,
  SendHorizontal,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  isNew?: boolean;
}

const projects: Project[] = [
  {
    title: "New Project",
    description: "Start a new project from scratch",
    isNew: true,
  },
  {
    title: "Learning From 100 Years of...",
    description: "For athletes, high altitude prod...",
  },
  {
    title: "Research officiants",
    description: "Maxwell's equations—the foun...",
  },
  {
    title: "What does a senior lead de...",
    description: "Physiological respiration invol...",
  },
  {
    title: "Write a sweet note to your...",
    description: "In the eighteenth century the G...",
  },
  {
    title: "Meet with cake bakers",
    description: "Physical space is often conceiv...",
  },
];

export default function Dashboard() {
  const [inputValue, setInputValue] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex min-h-screen w-full border-t rounded-tl-3xl bg-white">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Welcome to Script
          </h1>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Get started by Script a task and Chat can do the rest. Not sure
            where to start?
          </p>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[800px]">
          {/* Write Copy Card */}
          <Card className="p-6 hover:shadow-lg transition-shadow rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#dbac54] p-2 rounded-xl">
                  <CopyCheck className="w-6 h-6 text-amber-100" />
                </div>
                <span className="font-medium">Write copy</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border p-2 flex items-center justify-center"
              >
                <Plus className="h-2 w-2" />
                <span className="sr-only">Add write copy</span>
              </Button>
            </div>
          </Card>

          {/* Image Generation Card */}
          <Card className="p-6 hover:shadow-lg transition-shadow rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#cde7fe] p-2 rounded-xl">
                  <Pencil className="w-6 h-6 text-blue-400" />
                </div>
                <span className="font-medium">Image generation</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border p-2 flex items-center justify-center"
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add image generation</span>
              </Button>
            </div>
          </Card>

          {/* Create Avatar Card */}
          <Card className="p-6 hover:shadow-lg transition-shadow rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#cae690] p-2 rounded-xl">
                  <CircleUserRound className="w-6 h-6 text-gray-400" />
                </div>
                <span className="font-medium">Create avatar</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border p-2 flex items-center justify-center"
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add create avatar</span>
              </Button>
            </div>
          </Card>

          {/* Write Code Card */}
          <Card className="p-6 hover:shadow-lg transition-shadow rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#ffcbe8] p-2 rounded-xl">
                  <SquareCode className="w-6 h-6 text-pink-400" />
                </div>
                <span className="font-medium">Write code</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border p-2 flex items-center justify-center"
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add write code</span>
              </Button>
            </div>
          </Card>
        </div>

        {/* Input Area */}
        <div className="w-full max-w-[800px] px-4 py-4 mt-28 bg-white">
          <Card>
            {/* Image Preview */}
            {selectedImage && (
              <div className="relative mb-4 inline-block">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-20 h-20 object-cover rounded-lg border"
                />
                <button
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 bg-[#f9fbfc] text-black rounded-full p-1 border border-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Input Field */}
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Summarize the latest"
                value={inputValue}
                onChange={handleInputChange}
                className="flex-1 bg-transparent outline-none p-4"
              />
              {/* Show send icon only when typing */}
              {inputValue.length > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full p-2 flex items-center justify-center"
                >
                  <SendHorizontal className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Attachments Section */}
            <div className="flex items-center justify-between border-t bg-[#f9fbfc] rounded-b-lg">
              <div className="flex items-center gap-4">
                <label
                  htmlFor="imageUpload"
                  className="py-2 px-3 flex items-center space-x-1 cursor-pointer"
                >
                  <Paperclip className="w-4 h-4" />
                  <span className="text-sm">Attach</span>
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <a
                  href="#"
                  className="py-2 px-3 flex items-center space-x-1 border-l"
                >
                  <AudioLines className="w-4 h-4" />
                  <span className="text-sm">Voice Message</span>
                </a>
                <a
                  href="#"
                  className="py-2 px-3 flex items-center space-x-1 border-l"
                >
                  <FileSearch className="w-4 h-4" />
                  <span className="text-sm">Browse Prompts</span>
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground p-4">
                <span>20/3,000</span>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="hidden lg:block w-80 border-l min-h-screen p-4 bg-background">
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-1">
              <h2 className="text-sm font-semibold">Projects</h2>
              <span className="text-sm text-muted-foreground">(7)</span>
            </div>
            <Ellipsis className="w-5 h-5" />
          </div>

          {/* Project List */}
          <div className="space-y-2">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`p-3 cursor-pointer rounded-3xl lhover:bg-accent transition-colors ${
                  project.isNew ? "rounded-3xl border-none bg-[#f9fbfc]" : ""
                }`}
              >
                <h3 className="font-medium text-sm mb-1">{project.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {project.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
