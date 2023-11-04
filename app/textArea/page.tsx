import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TextPage() {
  return (
    <div className="h-full w-screen gap-1.5 flex flex-col justify-center items-center">
      <div className="w-1/2 ">
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>
      <Button>
        <Link href={"/"}>Home</Link>
      </Button>
    </div>
  );
}
