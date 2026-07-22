import {
  MessageCircle, Send, Phone, Video, Users, Target, BarChart3, Bell,
  Mail, Hash, Layers, Compass, Rocket, UserPlus, Link2, FolderKanban,
  Gauge, Building2, GraduationCap, Heart, Globe2, Briefcase, CalendarClock,
  type LucideIcon,
} from "lucide-react";

export interface Channel {
  icon: LucideIcon;
  label: string;
}

export const NAV_LINKS = ["Features", "Integrations", "Pricing", "FAQ", "Blog"];

export const CHANNELS: Channel[] = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Send, label: "Telegram" },
  { icon: Phone, label: "Phone Call" },
  { icon: Video, label: "Google Meet" },
  { icon: Video, label: "Zoom" },
  { icon: Users, label: "Microsoft Teams" },
  { icon: Hash, label: "Slack" },
  { icon: Layers, label: "Discord" },
  { icon: Mail, label: "Email" },
];

export const STATS = [
  { value: 1000, suffix: "+", label: "Teams onboard" },
  { value: 50000, suffix: "+", label: "Active users" },
  { value: 99.9, suffix: "%", label: "Uptime", decimals: 1 },
  { value: 150, suffix: "+", label: "Countries" },
];

export const OLD_WAY = ["WhatsApp", "Telegram", "Zoom", "Email", "Phone calls", "Slack", "A dozen tabs open", "Context lost in the shuffle"];
export const NEW_WAY = ["One workspace", "Purpose-driven groups", "Goals everyone can see", "Every channel, one click away", "Analytics built in", "Nothing lost, nothing scattered"];

export const FEATURES = [
  { icon: Compass, title: "Purpose-Built Groups", desc: "Every group starts with a stated purpose, so nobody has to guess why the conversation exists." },
  { icon: Target, title: "Goal Tracking", desc: "Attach milestones to a group and watch progress move as the team does the work." },
  { icon: Rocket, title: "Communication Hub", desc: "Launch WhatsApp, Telegram, Zoom, Slack, Discord, Teams, Meet, email, or a call — instantly, without leaving the workspace." },
  { icon: UserPlus, title: "Member Management", desc: "Invite people, assign roles, and set permissions with admin controls that stay out of the way." },
  { icon: Bell, title: "Real-Time Notifications", desc: "See what changed the moment it happens, filtered to what actually matters to you." },
  { icon: BarChart3, title: "Analytics", desc: "Measure engagement and progress across every group, in one dashboard." },
];

export const STEPS = [
  { title: "Create an account", desc: "Sign up in seconds — no credit card required." },
  { title: "Start your 1-month free trial", desc: "Full workspace access, completely free for 30 days." },
  { title: "Create your workspace", desc: "Set up the home base your whole team works from." },
  { title: "Create purpose-based groups", desc: "Every group starts with a clear reason to exist." },
  { title: "Invite your members", desc: "Bring your team in with roles and permissions." },
  { title: "Connect communication apps", desc: "Link WhatsApp, Zoom, Slack, Teams, and more." },
  { title: "Collaborate", desc: "Chat, call, and meet without ever leaving ComHub." },
  { title: "Track progress", desc: "Watch goals move as the real work gets done." },
];

export const PLANS = [
  { name: "Free Trial", duration: "1 Month", price: "$0", cadence: "no credit card required", features: ["Full workspace access", "Up to 3 groups", "All communication integrations", "Community support"], cta: "Start Free" },
  { name: "Starter", duration: "3 Months", price: "$19", cadence: "per month, billed quarterly", features: ["Everything in Free Trial", "Up to 10 groups", "Goal tracking & analytics", "Email support"], cta: "Choose Starter" },
  { name: "Professional", duration: "6 Months", price: "$15", cadence: "per month, billed twice yearly", features: ["Everything in Starter", "Unlimited groups", "Advanced analytics", "Priority support", "Save 21% vs monthly"], cta: "Choose Professional", popular: true },
  { name: "Business", duration: "12 Months", price: "$12", cadence: "per month, billed annually", features: ["Everything in Professional", "Admin roles & permissions", "Dedicated onboarding", "Save 37% vs monthly"], cta: "Choose Business" },
  { name: "Enterprise", duration: "Custom", price: "Let's talk", cadence: "tailored to your organization", features: ["Everything in Business", "SSO & advanced security", "Custom integrations", "Dedicated success manager"], cta: "Contact Sales" },
];

export const TESTIMONIALS = [
  { name: "Priya Nair", role: "Ops Lead, Northwind Labs", quote: "We closed four different apps the week we switched. Our team finally argues about the work instead of which app it's in." },
  { name: "Daniel Osei", role: "Program Director, Riverside NGO", quote: "Every group has a purpose and a goal attached. Volunteers know exactly why they're in a thread now." },
  { name: "Mei Lin Tan", role: "Founder, Loop Studio", quote: "The analytics view told us which groups were actually active within a week. That alone paid for itself." },
  { name: "Carlos Duarte", role: "IT Director, Cedar College", quote: "Rolling this out to 40 departments took a single afternoon. Support tickets dropped almost immediately." },
  { name: "Anika Sharma", role: "Event Producer, Fielday Co.", quote: "Vendors, volunteers, and sponsors each got their own group with the right channel already attached." },
];

export const FAQS = [
  { q: "How does the free trial work?", a: "You get full access to ComHub for one month, no credit card required. If you love it, pick a plan before the trial ends; if not, it simply expires — no charges, no follow-up calls." },
  { q: "Can I connect WhatsApp?", a: "Yes. WhatsApp is one of nine communication channels you can launch directly from any group, alongside Telegram, phone calls, Zoom, Google Meet, Microsoft Teams, Slack, Discord, and email." },
  { q: "Can I use multiple communication apps in the same group?", a: "Every group can have as many communication shortcuts attached as it needs, so a single group might use WhatsApp for quick chat and Zoom for weekly calls." },
  { q: "How secure is my data?", a: "Your data is encrypted in transit and at rest, and admins control exactly who can see, join, or manage each group through roles and permissions." },
  { q: "Can I upgrade anytime?", a: "You can move to a longer plan at any time and we'll prorate the difference — no need to wait for renewal." },
];

export const AUDIENCE = [
  { icon: Building2, label: "Companies" },
  { icon: Rocket, label: "Startups" },
  { icon: GraduationCap, label: "Schools & colleges" },
  { icon: Heart, label: "NGOs" },
  { icon: Globe2, label: "Communities" },
  { icon: Briefcase, label: "Project teams" },
  { icon: CalendarClock, label: "Event organizers" },
];

export const FOOTER_LINK_GROUPS = [
  { title: "Product", links: ["Features", "Integrations", "Pricing", "Changelog"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Support", links: ["Help center", "Community", "Status", "Security"] },
  { title: "Legal", links: ["Privacy", "Terms", "DPA", "Cookies"] },
];

export const FOOTER_SOCIAL = ["Twitter", "LinkedIn", "GitHub"];
