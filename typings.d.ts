interface Shortcut {
  id: string;
  imageUrl: string;
  linkUrl: string;
  sort: Number;
  title: string;
}

interface Banner {
  id: string;
  linkUrl: string;
  mobileImageUrl: string;
  pcImageUrl: string;
  sort: Number;
  title: string;
}

interface Collection {
  totalCount: Number;
  items: CollectionItem[]
}

interface CollectionItem {
  id: string;
  code: string;
  description: string;
  title: string;
  subtitle: string;
}
