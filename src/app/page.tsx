import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import {
  RiGithubFill,
  RiGithubLine,
  RiLinkedinBoxFill,
  RiMailFill,
} from "react-icons/ri";

export default function PortfolioPage() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background text-foreground">
        <header className="container mx-auto py-6 flex justify-between items-center px-4">
          <h1 className="text-4xl font-bold">Phuong Dang</h1>
          <nav className="md:flex items-center gap-4 hidden ">
            <a href="#education" className="hover:underline">
              Education
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            {/* <ModeToggle /> */}
          </nav>
        </header>

        <main className="container mx-auto py-12 space-y-12 px-4">
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Software Engineering Student
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Passionate about building innovative interfaces and applications.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link href={"https://github.com/powoftech"}>
                  <RiGithubFill className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon">
                <Link href={"https://www.linkedin.com/in/powoftech/"}>
                  <RiLinkedinBoxFill className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon">
                <Link href={"mailto:powoftech@gmail.com"}>
                  <RiMailFill className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>

          <section id="education">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <Card>
              <CardHeader>
                <CardTitle>
                  HCMC University of Technology and Education
                </CardTitle>
                <CardDescription className="italic">
                  B.E. in Information Technology, Specialization in Software
                  Engineering
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside gap-y-1">
                  <li>GPA: 3.23</li>
                  <li>
                    Relevant coursework: Data Structures and Algorithms,
                    Object-Oriented Software Engineering, Software Design
                    Patterns, Web Programming, Artificial Intelligence
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section id="projects">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <div>Connector - A premier social media platform</div>
                    {/* <Link
                        href={"http://connector.rocks/"}
                        className="hover:underline font-normal"
                      >
                        www.connector.rocks
                      </Link> */}
                  </CardTitle>
                  <Link
                    href={"https://github.com/connector-inc/web-frontend"}
                    className="flex flex-row items-center hover:underline underline-offset-2 font-medium text-sm"
                  >
                    <RiGithubLine className="h-4 w-4" />{" "}
                    /connector-inc/web-frontend
                  </Link>
                  <CardDescription>Front-end web application</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    Developed a responsive social media platform using Next.js,
                    React, Tailwind CSS, and Radix UI.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Next.js</Badge>
                    <Badge>React</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>Radix UI</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Connector API</CardTitle>
                  <Link
                    href={"https://github.com/connector-inc/rest-backend"}
                    className="flex flex-row items-center hover:underline underline-offset-2 font-medium text-sm"
                  >
                    <RiGithubLine className="h-4 w-4" />{" "}
                    /connector-inc/rest-backend
                  </Link>
                  <CardDescription>Back-end REST APIs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    Created a general-purpose REST APIs for a social media
                    platform using FastAPI, and PostgreSQL.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>FastAPI</Badge>
                    <Badge>PostgreSQL</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="skills">
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <Card>
              <CardContent className="grid gap-x-4 gap-y-6 p-6">
                <div>
                  <h3 className="font-semibold mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Python</Badge>
                    <Badge>Dart</Badge>
                    <Badge>SQL</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Next.js</Badge>
                    <Badge>React</Badge>
                    <Badge>FastAPI</Badge>
                    <Badge>Express.js</Badge>
                    <Badge>Flutter</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>GitHub Actions</Badge>
                    <Badge>Docker</Badge>
                    <Badge>PostgreSQL</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>

        <footer className="container mx-auto py-6 text-center text-muted-foreground px-4">
          © {new Date().getFullYear()} Phuong Dang. All rights reserved.
        </footer>
      </div>
    </ThemeProvider>
  );
}
