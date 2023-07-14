import type { NextApiRequest, NextApiResponse } from "next";

import { Client } from "@notionhq/client";
import type {
  QueryDatabaseResponse,
  PageObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

//get around type errors from Notion API
interface DatabaseResponse extends Omit<QueryDatabaseResponse, "results"> {
  results: (
    | PageObjectResponse
    | (PartialPageObjectResponse & { properties: any })
  )[];
}

export type Project = {
  order: number;
  name: string;
  description: string;
  source_link: string;
  image_links: string[];
  technologies: string[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const database_id = process.env.NOTION_DATABASE_ID as string;

  const response = (await notion.databases.query({
    database_id: database_id,
  })) as Partial<DatabaseResponse>;

  const rows = response.results!.map((result) => result.properties);

  const projects: Array<Project> = rows.map((row) => {
    return {
      order: row.order.rich_text[0].plain_text,
      name: row.Name.title[0].plain_text,
      description: row.description.rich_text[0].plain_text,
      source_link: row.source_link.rich_text[0].plain_text,
      image_links: row.image_links.rich_text
        .map((text: any) => {
          return text.href;
        })
        .filter((link: any) => {
          if (link != null) {
            return link;
          }
        }),
      technologies: row.technologies.rich_text[0].plain_text.split(", "),
    };
  });

  res.status(200).json(projects);
};

export default handler;
