---
name: 21st-dev
description: Guidelines and rules for 21st.dev development, covering TS, Turborepo, Motion/React, Supabase, Clerk, and RLS policies.
---
# 21st.dev Development Guidelines

This skill defines the development guidelines, technical stack requirements, and best practices for building and maintaining the 21st.dev platform and its components.

## 1. Language Requirements
* Use only English text and English comments in code.

## 2. Tech Stack
* **Language:** TypeScript
* **Architecture:** Turborepo with Next.js App Router
* **Animation:** Motion/React (formerly Framer Motion)
  * Always import using: `import { motion } from "motion/react"`
* **Database & Auth:** Supabase + Clerk
* **Package Manager:** PNPM

## 3. Project Structure
* **Main App Location:** `apps/web`
* **Environment Variables:** `apps/web/.env.local`

## 4. Best Practices
* **Minimize useEffect:** Avoid using `useEffect` for operations that can be handled during rendering, event handlers, or through data-fetching library states.
* **Data Fetching:** Use `useQuery` (from TanStack Query) for data fetching.
* **No Index Files:** Never add `index.ts` or `index.js` files to directories. Import directly from the source files.

## 5. Supabase Access
* **Server-side:**
  ```typescript
  import { supabaseWithAdminAccess } from "@/lib/supabase"
  ```
* **Client-side:**
  ```typescript
  import { useClerkSupabaseClient } from "@/lib/clerk"
  ```

## 6. SQL Handling
* SQL queries should be written for Supabase SQL Editor.
* Queries will be executed manually.

## 7. Project Context
21st.dev is an AI-powered UI component library and platform designed for modern frontend developers and design engineers. It provides high-quality, ready-to-use UI components that are easily customizable and instantly usable in projects built with React, Next.js, and Tailwind CSS.

### Who are the users of 21st.dev?
* **Frontend developers** who need high-quality, pre-built UI components to speed up development.
* **Design engineers** looking for components that are visually appealing and built with best UI/UX practices.
* **Startup teams & indie hackers** who want to ship faster without reinventing the wheel.
* **AI enthusiasts** who want to leverage AI-powered UI generation to build unique, custom interfaces.
* **Companies** that need a scalable design system with AI-assisted customization to maintain consistency across products.

### How is 21st.dev useful?
* **Instant Access to Quality UI Components** – A vast collection of battle-tested UI elements following modern design principles.
* **AI-Assisted Customization** – AI suggestions help users modify components to match their brand identity, layout needs, or functionality.
* **Built for Modern Stacks** – Fully optimized for React, Next.js, Tailwind CSS, and shadcn/ui.
* **Component Marketplace** – Developers can publish, share, and monetize their own UI components.
* **No-Code Styling & Configuration** – Adjust components visually without modifying code.
* **AI-Powered UI Generation** – Users can describe a UI component in plain English, and Magic MCP will generate it.

## 8. Row Level Security (RLS) Policies
As we use Clerk + Supabase, enforce RLS policies in the database as follows:

### Select Tasks Policy
Enforce that only tasks where the `user_id` matches the Clerk user ID are returned:
```sql
CREATE POLICY "Select tasks policy" ON "public"."tasks" AS PERMISSIVE FOR
SELECT
  TO authenticated USING (requesting_user_id () = user_id);
```

### Insert Tasks Policy
Enforce that the `user_id` field on INSERT statements matches the Clerk user ID:
```sql
CREATE POLICY "Insert tasks policy" ON "public"."tasks" AS PERMISSIVE FOR INSERT TO authenticated
WITH
  CHECK (requesting_user_id () = user_id);
```

## 9. Users Table
* We use `public.users` table.
* The `user_id` data type is `TEXT` (due to Clerk integration).
