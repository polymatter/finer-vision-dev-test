import type { NextApiRequest, NextApiResponse } from 'next'
import buildSequelizeModel from '../../shared/buildSequelizeModel';
import SectionOneModel from '../../shared/models/SectionOne';
import { Sequelize } from 'sequelize';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {

    try {
      console.log(`Receive data ${JSON.stringify(req.body)}`)
      const sequelize = new Sequelize('sqlite::memory:');
      const sectionOne = buildSequelizeModel(sequelize, SectionOneModel, 'sectionOne');
      await sequelize.sync();
      const sectionOneData = req.body;
      const newSectionOne = await sectionOne.create(sectionOneData);
      res.status(200).json(newSectionOne.toJSON());
    } catch (err) {
      console.error(err);
      res.status(500).json(err)
    }
  } else {
    res.status(200).json({ name: 'John Doe' })
  }
}
