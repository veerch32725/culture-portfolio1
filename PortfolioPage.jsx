import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Culture-Rooted Digital Portfolio</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">🌿 Cultural Foundation</h2>
            <p className="mt-2 text-sm">
              Knowledgeable in Sanatan Dharma, Bhagavad Gita, and Vedic practices. Daily Yoga and Pranayama practitioner. Created content like "Ancient Insights, Modern Life."
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">🛠 Tools & Product Management</h2>
            <p className="mt-2 text-sm">
              Hands-on experience with Notion, ClickUp, Trello, Jira. Built a Notion Product OS for student startups with PRDs, retros, and roadmaps.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">📝 Writing & Documentation</h2>
            <p className="mt-2 text-sm">
              Authored 20+ product specs, SOPs, onboarding guides. Specialized in simplifying complex ideas for dev and design handoffs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">📈 Digital & Content Projects</h2>
            <p className="mt-2 text-sm">
              Ran IG page "Yoga for Techies", tested Mailchimp campaigns, designed mock landing copy. Explored Canva, MoEngage, and influencer-led wellness concepts.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">🚀 Projects</h2>
            <ul className="list-disc pl-5 mt-2 text-sm">
              <li>Smart Video Tracker – custom progress tracking</li>
              <li>SkillSync AI – skill + mental wellness mapper</li>
              <li>SanatanUX – cultural UI/UX experiment</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">🧠 Soft Skills</h2>
            <p className="mt-2 text-sm">
              Self-starter, curious, thrives in structured ambiguity. Experienced with solo and cross-functional collaboration.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-10">
        <h2 className="text-xl font-bold mb-2">🔗 Links</h2>
        <ul className="text-sm space-y-1">
          <li><a className="text-blue-600 underline" href="#">GitHub Portfolio</a></li>
          <li><a className="text-blue-600 underline" href="#">Notion Product OS</a></li>
          <li><a className="text-blue-600 underline" href="#">Smart Video Tracker</a></li>
          <li><a className="text-blue-600 underline" href="#">SkillSync AI Deck</a></li>
          <li><a className="text-blue-600 underline" href="#">Resume (PDF)</a></li>
        </ul>
        <Button className="mt-4">Download Resume</Button>
      </div>
    </div>
  );
}
