export const AuthRequests = {
  Login: `/auth`,
  Logout: `/auth`,
  RefreshToken: `/auth`,
  AddMoreInfo: `/auth/info`,
};

export const HomeRequest = {
  WritePost: `/home`,
  GetPosts: `/home`,
  LookDetail: (pro_id: number) =>
    `/home/${pro_id}`,
  DeletePost: (pro_id: number) =>
    `/home/${pro_id}`,
  MakeMeeting: (pro_id: number) =>
    `/home/${pro_id}`,
  PostDeclaration: (pro_id: number) =>
    `/home/${pro_id}/declare`,
};

export const MyRequest = {
  Reservation: `/my/reservation`,
  CheckMyPosts: `/my`,
  CheckWhoJoin: `/my/info`,
  SendOut: (pro_id: number, id: number) =>
    `/my/${pro_id}/${id}`,
  SettingProfileImg: `/my`,
};

export const AdminRequest = {
  LookDeclarationPosts: `/admin/dec_info`,
  LookDeclarationDetail: (dec_id: number) =>
    `/admin/${dec_id}`,
  DeleteDeclarationPost: (dec_id: number) =>
    `/admin/${dec_id}`,
  LookUserInfo: `/admin/user_info`,
  ChangeUserState: (user_id: number) =>
    `/admin/${user_id}`,
  SearchUser: `/admin`,
};
