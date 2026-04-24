# Columbia Care Home: Blog Editorial Guidelines

To maintain the "Quiet Premium" aesthetic and high-fidelity vertical rhythm of our insights section, all future blog posts should follow these structural standards.

## 1. Paragraph Spacing ("Proper Paras")
Due to the `breaks: true` configuration in our markdown parser, standard double-newlines can sometimes "stick" together depending on the preceding content (especially after custom HTML blocks).

**The Rule:** Use a single `<br />` at the end of a paragraph if you notice text sticking together on your local preview.

```markdown
This is the first paragraph.<br />
This is the second paragraph that now has a clean gap.
```

## 2. Responsive Tables (Mobile-First)
Large tables must remain readable on small screens. Use the following class pattern to ensure high-density text on mobile and professional padding on desktop.

```html
<div class="overflow-hidden border border-stone-200 rounded-3xl shadow-2xl bg-white my-10">
  <div class="bg-emerald-900 px-6 py-4">
    <h3 class="text-white font-serif text-sm sm:text-xl m-0">Table Title</h3>
  </div>
  <div class="w-full">
    <table class="w-full text-left border-collapse m-0 table-fixed">
      <thead>
        <tr class="bg-stone-50 text-stone-600 border-b border-stone-200">
          <!-- text-[10px] for mobile, sm:text-sm for desktop -->
          <th class="p-2 sm:p-6 font-bold text-[10px] sm:text-sm uppercase tracking-wider">Column</th>
        </tr>
      </thead>
      <!-- text-[10px] for mobile, sm:text-base for desktop -->
      <tbody class="divide-y divide-stone-100 text-[10px] sm:text-base">
        <tr>
          <td class="p-2 sm:p-6 font-semibold text-stone-900">Row Item</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

## 3. High-Fidelity Accents
Use the `blog-accent` span for "Clinical Emerald" highlights.

```markdown
## The <span class="blog-accent">DPT Advantage</span>
```

## 4. Image Figures
Always include an `italic` caption for a professional editorial feel.

```html
<figure>
  <img src="/images/blog/image.jpg" alt="Description" class="w-full rounded-2xl shadow-xl" />
  <figcaption class="text-center text-stone-500 mt-4 text-sm font-medium italic">Capturing the residential scale of our home.</figcaption>
</figure>
```
