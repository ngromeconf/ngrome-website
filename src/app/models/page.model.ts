interface Sections {
  _id: string;
  description: {
    html: string;
  };
  header: string;
  image: {
    url: string;
  };
}

export default interface Page {
  data: {
    sections: Sections[];
    title: string;
  };
  id: string;
}
