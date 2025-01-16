import Transcription from "./transcription";
import User from "./user";

export default interface Call {
  id: number;
  title: string;
  creation_date: string;
  creator: User;
  transcriptions: Transcription[];
}

