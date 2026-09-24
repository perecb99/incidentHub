import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const adminUser = await prisma.user.upsert({
    where: { email: "admin@incidenthub.local" },
    update: {
      name: "IncidentHub Admin",
      passwordHash: hashedPassword,
      role: "ADMIN",
    },
    create: {
      email: "admin@incidenthub.local",
      name: "IncidentHub Admin",
      passwordHash: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("Seeded IncidentHub admin user:", adminUser);
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
