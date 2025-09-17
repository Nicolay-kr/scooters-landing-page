export type DataType = {
  uid: string;
  _version: number;
  locale: string;
  _in_progress: boolean;
  characteristic_cards: Array<{
    characteristic: string;
    _metadata: {
      uid: string;
    };
    description: string;
  }>;
  created_at: string;
  created_by: string;
  cta: Array<{
    label: string;
    _metadata: {
      uid: string;
    };
    link: {
      title: string;
      href: string;
    };
    icon: {
      uid: string;
      _version: number;
      parent_uid: string;
      tags: string[];
      title: string;
      created_by: string;
      updated_by: string;
      created_at: string;
      updated_at: string;
      content_type: string;
      file_size: string;
      filename: string;
      is_dir: boolean;
      publish_details: {
        time: string;
        user: string;
        environment: string;
        locale: string;
      };
      url: string;
    };
  }>;
  heading: {
    type: string;
    attrs: object;
    children: Array<any>;
    uid: string;
    _version: number;
  };
  page_footer: Array<any>;
};