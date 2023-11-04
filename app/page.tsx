import Nav from "@/components/Nav";
import Link from "next/link";
import { UseForm } from "@/components/UseForm";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  return (
    <main className="p-24">
      <Nav />
      <section className="py-12 flex flex-col gap-6  text-center">
        <h1 className="text-4xl font-bold">Shadcn is awesome</h1>
        <p className="text-2xl text-muted-foreground">
          Hand-pickup themes that you can copy and test into your apps.
        </p>
      </section>
      <div className="flex gap-6 py-6 items-center justify-center">
        <Button variant={"secondary"}>
          <Link href={"/textArea"}>Text Area</Link>
        </Button>
        <Button>Enroll Now</Button>
      </div>
      <div className="flex justify-center m-3">
        <Calendar />
      </div>

      <div className="border rounded p-3">
        <UseForm />
      </div>
    </main>
  );
}
