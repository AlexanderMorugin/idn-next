import { prisma } from './prisma-client';
import { cards } from './cards';

async function up() {
  await prisma.card.createMany({
    data: cards,
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Card" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
