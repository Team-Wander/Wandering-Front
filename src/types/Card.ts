export type genderType = 'MALE'| 'FEMALE'| 'ANY';
export type tagType = 'WALK'| 'WORRY'| 'CHAT'| 'EXERCISE'| 'STUDY'| 'GO_OUT';
export type gradeType = "ONE"| "TWO"| "THREE"| "FOUR"| "FIVE"| "SIX";

export interface Card {
  id: number;
  author: string;
  title: string;
  author_school: string;
  author_gender: genderType;
  author_grade: gradeType
  content: string;
  date: Date;
  maximum: number;
  gender: genderType;
  tag: tagType[];
  grade: gradeType[];
}
