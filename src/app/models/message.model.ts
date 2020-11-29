export interface Message {
  id: number;
  sender: {
    name: string;
    profileImage: string;
  };
  content: string;
  read: boolean;
  date: string;
}
