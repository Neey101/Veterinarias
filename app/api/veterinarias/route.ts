// pages/api/veterinarias.ts
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nombreDelLocal, ubicacion, numero, email, latitud, longitud } = req.body;

    try {
      const nuevaVeterinaria = await prisma.veterinaria.create({
        data: {
          nombreDelLocal,
          ubicacion,
          numero,
          email,
          latitud,
          longitud,
        },
      });

      res.status(201).json(nuevaVeterinaria);
    } catch (error) {
      res.status(500).json({ error: 'Error al registrar la veterinaria' });
    }
  } else if (req.method === 'GET') {
    const { query } = req.query;

    try {
      const veterinarias = query
        ? await prisma.veterinaria.findMany({
            where: {
              ubicacion: {
                contains: query as string,
              },
            },
          })
        : await prisma.veterinaria.findMany();

      // Si no se encuentran resultados, devuelve una lista vacía
      res.status(200).json(veterinarias || []);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las veterinarias' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
