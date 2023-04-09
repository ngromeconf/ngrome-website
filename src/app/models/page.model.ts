interface Image {
  name: string;
  url: string;
}
interface Stack {
  _id: string;
  text: string;
  header: string;
  image: Image[];
}

interface Seo {
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

export default interface Page {
  _id: string,
  title: string,
  subtitle: string,
  _slug: string,
  stack: Stack[],
  seo: Seo
}