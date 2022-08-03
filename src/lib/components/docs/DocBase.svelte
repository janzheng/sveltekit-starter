<script>
	// a single Markdoc component
  import mdoc from "@markdoc/markdoc";
	import Markdoc from "$lib/components/markdoc/Markdoc.svelte";
	import Callout from "$lib/components/markdoc/subcomponents/Callout.svelte";

	// the doc itself (lifted from https://markdoc.io/sandbox?mode=preview)

	// any custom components (tags) that you want to pass in
  const components = new Map([["Callout", Callout]]);

  export let doc = '', content, headings;
  

	// markdoc config
	const config = {
		tags: {
			callout: {
				render: "Callout",
				description: "Display the enclosed content in a callout box",
				children: ["paragraph", "tag", "list"],
				attributes: {
					type: {
						type: String,
						default: "note",
						matches: ["check", "error", "note", "warning"]
					}
				}
			}
		},
    variables: {
      fruit: "banana"
    },
    partials: {
      'header.md': mdoc.parse(`# my partial header!`)
    }
	};
	





  function collectHeadings(node, sections = []) {
    if (node && node.name) {
      // Match all h1, h2, h3… tags
      if (node.name.match(/h\d/)) {
        const title = node.children[0];
        // console.log('---node name:', node.name, "|||", title, "|||", node.name.match(/h\d/) )

        
        if (typeof title === 'string') { // screws up for headers wrapped in bold/italic
          sections.push({
            ...node.attributes,
            title: title.children ? title.children[0] : title,
            tag: node.name
          });
        }
      }

      if (node.children) {
        for (const child of node.children) {
          collectHeadings(child, sections);
        }
      }
    }

    return sections;
  }




  $: if(content) {
    // console.log('headings:', collectHeadings(content))
    headings = collectHeadings(content)
  }


</script>

<div class="Markdoc-container">
  <Markdoc {doc} {config} {components} bind:content={content} />
</div>