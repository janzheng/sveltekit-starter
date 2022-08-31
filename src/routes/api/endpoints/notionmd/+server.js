import { json } from '@sveltejs/kit';
import notionClient from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";



const notion = new notionClient.Client({
  auth: process.env.NOTION_API,
});

const n2m = new NotionToMarkdown({ notionClient: notion });



// // passing notion client to the option

// (async () => {
//   const mdblocks = await n2m.pageToMarkdown("target_page_id");
//   const mdString = n2m.toMarkdownString(mdblocks);

//   console.log('md string:', mdString)
//   //writing to file
//   // fs.writeFile("test.md", mdString, (err) => {
//   //   console.log(err);
//   // });
// })();


export async function GET({ url }) {
  let id = url.searchParams.get('id')
  if (id) {
    const mdblocks = await n2m.pageToMarkdown(id);
    const mdString = n2m.toMarkdownString(mdblocks);

    // return { body: mdString }
    return json({ markdown: mdString})
  }
  // return { body: {} }
  return new Response(undefined, { status: 400 })
}