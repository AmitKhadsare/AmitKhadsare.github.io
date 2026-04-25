import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true
});

const text = `
## Why an 8-Bed Home <span class="blog-accent">Works Differently</span>

Smaller homes are simpler to run. We don't have layers of corporate marketing departments or massive regional management teams to pay for.

At our home at **10610 Hickory Point Lane**, your investment goes toward two things: high-quality staff and clinical oversight. Because we are owned and operated by clinical experts, we can often manage complex care needs that would force a large facility to discharge a resident to a far more expensive skilled nursing home.

To see why this model is becoming the preferred choice for Howard County families, read our guide on [8-bed homes vs. large facilities](/blog/8-bed-vs-large-facility-howard-county).
`;

const html = md.render(text);
console.log(html);

// Let's see if it's wrapping them correctly
console.log('Is "Smaller homes" wrapped in P?', html.includes('<p>Smaller homes'));
console.log('Is "At our home" wrapped in P?', html.includes('<p>At our home'));
