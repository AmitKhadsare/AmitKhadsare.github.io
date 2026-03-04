import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true, // Allow HTML for complex components like comparison tables
  breaks: true,
  linkify: true
});

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

// Simple frontmatter parser to avoid bulky Node-dependent libraries in the browser
const parseFrontmatter = (fileContent: string) => {
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {} as any, content: fileContent };

  const yaml = match[1];
  const content = match[2];
  const data: any = {};

  yaml.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();

      // Basic YAML unfolding
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);

      if (value.startsWith('[') && value.endsWith(']')) {
        data[key] = value.slice(1, -1).split(',').map(v => v.trim().replace(/^["'](.*)["']$/, '$1'));
      } else if (value === '' && key === 'tags') {
        // Handle multiline tags if needed, but our files use [tag, tag]
        data[key] = [];
      } else {
        data[key] = value;
      }
    }
  });

  return { data, content };
};

// Import all markdown files from the content directory
const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', eager: true });

// Import all images to resolve them from markdown paths
const assetModules = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp,svg}', { eager: true, as: 'url' });

// Function to resolve image paths from markdown
const resolveAsset = (path: string) => {
  if (!path) return '';
  // If it's already a full URL or absolute path not starting with /src, return as is
  if (path.startsWith('http') || !path.startsWith('/src/')) return path;

  // Convert /src/assets/foo.jpg to ../assets/foo.jpg to match glob keys
  const globPath = path.replace('/src/', '../');

  // Find the resolved URL from assetModules
  const resolved = Object.entries(assetModules).find(([key]) => key.endsWith(globPath.replace('../', '')));
  return (resolved ? resolved[1] : path) as string;
};

export const blogs: BlogPost[] = Object.entries(modules).map(([path, module]: [string, any]) => {
  const slug = path.split('/').pop()?.replace('.md', '') || '';
  const fileContent = typeof module === 'string' ? module : module.default;
  const { data, content: body } = parseFrontmatter(fileContent);

  return {
    id: data.id || slug,
    slug,
    title: data.title || 'Untitled Post',
    excerpt: data.excerpt || '',
    content: md.render(body),
    author: data.author || 'Columbia Care Home Team',
    date: data.date || new Date().toISOString().split('T')[0],
    image: resolveAsset(data.image),
    tags: Array.isArray(data.tags) ? data.tags : []
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
