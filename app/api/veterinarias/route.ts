import db from "@/db";
const GET = async (req: Request) => {
  const veterinarias = await db.veterinaria.findMany({}); 
  return Response.json({veterinarias}, { status: 201 });
};

export { GET };
