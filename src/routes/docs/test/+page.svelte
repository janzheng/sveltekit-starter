<script>
	// a single Markdoc component
  import mdoc from "@markdoc/markdoc";
	import Markdoc from "$lib/components/markdoc/Markdoc.svelte";
	import Callout from "$lib/components/markdoc/subcomponents/Callout.svelte";

	// the doc itself (lifted from https://markdoc.io/sandbox?mode=preview)

  let content
  let headings
  
  // $: if(content) {
  //   console.log('headings:', collectHeadings(content))
  // }


	const doc = `---
{
  "title": "What is Markdoc!?!?!?"
}
---

# {% $markdoc.frontmatter.title %} {% #overview %}

~~~javascript

Some fenced code

~~~


Markdoc is a Markdown-based syntax and toolchain for creating custom documentation sites. Stripe created Markdoc to power [our public docs](http://stripe.com/docs).

{% callout type="check" %}
Markdoc is open-source—check out its [source](http://github.com/markdoc/markdoc) to see how it works.
{% /callout %}

## How is Markdoc different?

Markdoc uses a fully declarative approach to composition and flow control, where other solutions… [Read more](/docs/overview).

fruit: {% $fruit %}

{% partial file="header.md" /%}

[Install Markdoc](/docs/getting-started)

## Next steps
- [Install Markdoc](/docs/getting-started)
- [Explore the syntax](/docs/syntax)
`;

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
      'header.md': mdoc.parse(`# This is my partial header!`)
    }
	};
	
	// any custom components (tags) that you want to pass in
  const components = new Map([["Callout", Callout]]);



  function collectHeadings(node, sections = []) {
  if (node && node.name) {
    // Match all h1, h2, h3… tags
    if (node.name.match(/h\d/)) {
      const title = node.children[0];

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title
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

</script>

<div class="Markdoc-container _content">
  <Markdoc {doc} {config} {components} bind:content={content} />
</div>