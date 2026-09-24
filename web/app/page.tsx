import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Header from "@/app/components/header";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <Header />
      <main className="space-y-4 p-6">
        <div>
          <h1 className="text-2xl font-semibold">IncidentHub</h1>
          <p className="text-sm text-muted-foreground">
            Capture incident context, investigations, and resolutions in one
            place.
          </p>
        </div>

        <section className="space-y-2 rounded-xl border p-4">
          <h2 className="text-sm font-medium">Session</h2>
          <p className="text-sm text-muted-foreground">
            Signed in as {session.user?.name ?? session.user?.email}
          </p>
        </section>
      </main>
    </>
  );
}
