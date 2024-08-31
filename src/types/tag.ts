export type genderType = 'MALE'| 'FEMALE'| 'ANY';
export type tagType = 'WALK'| 'WORRY'| 'CHAT'| 'EXERCISE'| 'STUDY'| 'GO_OUT';
export type gradeType = "ONE"| "TWO"| "THREE"| "FOUR"| "FIVE"| "SIX";

export interface Tag {
  id: number;
  author: string;
  title: string;
  content: string;
  date: Date;
  maximum: number;
  gender: genderType;
  tag: tagType[];
  grade: gradeType[];
}
