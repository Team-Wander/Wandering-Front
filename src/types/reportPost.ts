import { genderType, gradeType, tagType } from './Card';

export type reportType =
  | 'PRIVATE'
  | 'ADVERTISEMENT'
  | 'ABUSE'
  | 'REPEATED'
  | 'NSFW'
  | 'ETC';

export default interface reportPost {
  id?: number;
  author: string;
  title: string;
  author_school: string;
  author_gender: genderType;
  author_grade: gradeType;
  content?: string;
  date?: Date;
  maximum?: number;
  type: reportType[];
  tag: tagType[];
  gender: genderType;
  grade: gradeType[];
}
