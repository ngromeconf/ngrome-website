
export interface Image {
  name: string;
  url: string;
}
export interface Stack {
  _id: string;
  text: string;
  header: string;
  image: Image[];
}

export interface Seo {
  _id: string,
  title: string | null,
  description: string | null,
  social_media_image: [
    {
      _id: string,
      url: string
    }
  ]
}

export interface Page {
  _id: string,
  title: string,
  subtitle: string,
  _slug: string,
  stack: Stack[],
  seo: Seo
}
export interface PageResult {
  data: {
    Page: Page,
  }
  loading: boolean,
  error: string
}