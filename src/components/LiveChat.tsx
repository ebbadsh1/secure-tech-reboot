import { MessageCircle, X, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LiveChat() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-40">
      {open && (
        <div className="mb-3 w-80 rounded-2xl border border-border bg-card shadow-2xl animate-fade-up overflow-hidden">
          <div className="flex items-center justify-between bg-primary text-primary-foreground px-4 py-3">
            <div>
              <p className="text-sm font-semibold">SecureTech Support</p>
              <p className="text-xs text-primary-foreground/70">Typically replies in a few minutes</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="rounded p-1 hover:bg-primary-foreground/10">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4 space-y-3 max-h-64 overflow-auto">
            <div className="rounded-xl bg-secondary px-3 py-2 text-sm">👋 Hi! How can we help you with biometrics, ID or enterprise solutions today?</div>
          </div>
          <form className="flex gap-2 border-t border-border p-3" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Type your message…" className="h-9" />
            <Button size="icon" type="submit" className="h-9 w-9 bg-accent hover:bg-accent-dark text-accent-foreground">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open live chat"
        className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-xl hover:bg-accent-dark transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
